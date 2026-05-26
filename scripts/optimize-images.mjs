/**
 * Сжимает все картинки в public/images и постер видео.
 * Оригиналы переезжают в public/images-original (бэкап).
 * Логика:
 *   - PNG-фотки (большие, не из reviews) → JPEG q82 mozjpeg, ресайз до 1920 px.
 *   - JPG/JPEG-фотки → JPEG q82 mozjpeg, ресайз до 1920 px.
 *   - PNG из reviews/ (скриншоты чатов с текстом) → перепаковка PNG без качества.
 *   - SVG / маленькие файлы (<150 KB) → не трогаем.
 */
import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'public', 'images');
const BACKUP_DIR = path.join(ROOT, 'public', 'images-original');
const POSTER = path.join(ROOT, 'public', 'video', 'bg-poster.jpg');
const POSTER_BACKUP_DIR = path.join(ROOT, 'public', 'video-original');

const MAX_DIM = 1920;
const QUALITY = 82;
const SKIP_BELOW_BYTES = 150 * 1024; // 150 KB

const isPhotoExt = (ext) => /\.(jpe?g|png)$/i.test(ext);
const isJpeg = (ext) => /\.(jpe?g)$/i.test(ext);
const isPng = (ext) => /\.png$/i.test(ext);

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

async function copyToBackup(srcFile, srcRoot, backupRoot) {
  const rel = path.relative(srcRoot, srcFile);
  const dest = path.join(backupRoot, rel);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  // Если уже забэкаплено — не перезаписываем (вдруг скрипт запустили дважды).
  try {
    await fs.access(dest);
    return; // backup exists
  } catch {
    // continue
  }
  await fs.copyFile(srcFile, dest);
}

function fmtBytes(n) {
  if (n > 1024 * 1024) return (n / 1024 / 1024).toFixed(2) + ' MB';
  if (n > 1024) return (n / 1024).toFixed(1) + ' KB';
  return n + ' B';
}

async function readWithRetry(file, tries = 5) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      return await fs.readFile(file);
    } catch (e) {
      lastErr = e;
      // Windows file locks — ждём и пробуем ещё.
      await new Promise((r) => setTimeout(r, 200 * (i + 1)));
    }
  }
  throw lastErr;
}

async function processOne(file) {
  const ext = path.extname(file);
  if (!isPhotoExt(ext)) return null;

  const stat = await fs.stat(file);
  if (stat.size < SKIP_BELOW_BYTES) return { file, skipped: true, before: stat.size };

  const isReviews = file.toLowerCase().includes(path.sep + 'reviews' + path.sep);

  // Читаем файл в память — обходит Windows-блокировки.
  const inputBuf = await readWithRetry(file);

  await copyToBackup(file, SRC_DIR, BACKUP_DIR);
  const originalBytes = stat.size;

  let pipeline = sharp(inputBuf, { failOn: 'none' }).rotate(); // honor EXIF orientation

  const meta = await sharp(inputBuf).metadata();
  const longSide = Math.max(meta.width || 0, meta.height || 0);
  if (longSide > MAX_DIM) {
    pipeline = pipeline.resize({
      width: meta.width && meta.width >= meta.height ? MAX_DIM : null,
      height: meta.height && meta.height > meta.width ? MAX_DIM : null,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  let outBuffer;
  let outPath;

  if (isReviews && isPng(ext)) {
    // Скриншоты — оставляем PNG, но с агрессивной перепаковкой.
    outBuffer = await pipeline.png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer();
    outPath = file;
  } else {
    // Всё остальное — в JPEG mozjpeg.
    outBuffer = await pipeline.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toBuffer();
    if (isPng(ext)) {
      // Конвертация расширения: PNG → JPG. Удалим старый PNG ниже.
      outPath = file.replace(/\.png$/i, '.jpg');
    } else {
      outPath = file;
    }
  }

  // Безопасность: если новый файл не меньше — оставляем оригинал и выходим.
  if (outBuffer.length >= originalBytes && outPath === file) {
    return { file, skipped: true, before: originalBytes, reason: 'no gain' };
  }

  await fs.writeFile(outPath, outBuffer);
  if (outPath !== file) {
    // Расширение поменялось — удаляем старый файл.
    await fs.unlink(file);
  }

  return {
    file,
    outPath,
    before: originalBytes,
    after: outBuffer.length,
    saved: originalBytes - outBuffer.length,
  };
}

async function run() {
  const results = [];
  let totalBefore = 0;
  let totalAfter = 0;
  let totalSaved = 0;
  let processed = 0;
  let skipped = 0;

  console.log('Сканирую', SRC_DIR);

  for await (const file of walk(SRC_DIR)) {
    try {
      const res = await processOne(file);
      if (!res) continue;
      if (res.skipped) {
        skipped++;
        continue;
      }
      results.push(res);
      totalBefore += res.before;
      totalAfter += res.after;
      totalSaved += res.saved;
      processed++;
      const rel = path.relative(ROOT, res.outPath);
      console.log(`  ✓ ${rel}  ${fmtBytes(res.before)} → ${fmtBytes(res.after)}  (-${((1 - res.after / res.before) * 100).toFixed(0)}%)`);
    } catch (e) {
      console.warn(`  ✗ ${path.relative(ROOT, file)}: ${e.message}`);
    }
  }

  // Постер видео.
  try {
    const stat = await fs.stat(POSTER);
    if (stat.size >= SKIP_BELOW_BYTES) {
      const posterBuf = await readWithRetry(POSTER);
      const meta = await sharp(posterBuf).metadata();
      let pipeline = sharp(posterBuf, { failOn: 'none' }).rotate();
      const longSide = Math.max(meta.width || 0, meta.height || 0);
      if (longSide > MAX_DIM) {
        pipeline = pipeline.resize({
          width: meta.width >= meta.height ? MAX_DIM : null,
          height: meta.height > meta.width ? MAX_DIM : null,
          fit: 'inside',
          withoutEnlargement: true,
        });
      }
      const buf = await pipeline.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toBuffer();
      if (buf.length < stat.size) {
        await fs.mkdir(POSTER_BACKUP_DIR, { recursive: true });
        const backup = path.join(POSTER_BACKUP_DIR, path.basename(POSTER));
        try { await fs.access(backup); } catch { await fs.copyFile(POSTER, backup); }
        await fs.writeFile(POSTER, buf);
        totalBefore += stat.size;
        totalAfter += buf.length;
        totalSaved += stat.size - buf.length;
        processed++;
        console.log(`  ✓ ${path.relative(ROOT, POSTER)}  ${fmtBytes(stat.size)} → ${fmtBytes(buf.length)}  (-${((1 - buf.length / stat.size) * 100).toFixed(0)}%)`);
      }
    }
  } catch {
    // нет постера — пропустим.
  }

  console.log('');
  console.log('Итог:');
  console.log(`  обработано: ${processed}`);
  console.log(`  пропущено (мелкие или без выигрыша): ${skipped}`);
  console.log(`  было:    ${fmtBytes(totalBefore)}`);
  console.log(`  стало:   ${fmtBytes(totalAfter)}`);
  console.log(`  сэкономлено: ${fmtBytes(totalSaved)}  (-${((totalSaved / totalBefore) * 100).toFixed(1)}%)`);
  console.log('');
  console.log(`Оригиналы лежат в:`);
  console.log(`  ${path.relative(ROOT, BACKUP_DIR)}`);
  console.log(`  ${path.relative(ROOT, POSTER_BACKUP_DIR)} (если был постер)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

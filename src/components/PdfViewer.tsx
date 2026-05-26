import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, AlertCircle } from 'lucide-react';

let pdfjsPromise: Promise<typeof import('pdfjs-dist')> | null = null;

function loadPdfjs(): Promise<typeof import('pdfjs-dist')> {
  if (pdfjsPromise) return pdfjsPromise;
  pdfjsPromise = (async () => {
    const pdfjs = await import('pdfjs-dist');
    const workerUrl = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default;
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
    return pdfjs;
  })();
  return pdfjsPromise;
}

type PdfDocLike = Awaited<ReturnType<Awaited<ReturnType<typeof loadPdfjs>>['getDocument']>['promise']>;

interface PdfViewerProps {
  url: string;
  labels: {
    page: string;
    of: string;
    prev: string;
    next: string;
    open: string;
    loading: string;
    error: string;
  };
}

export default function PdfViewer({ url, labels }: PdfViewerProps) {
  const [pdf, setPdf] = useState<PdfDocLike | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const renderTokenRef = useRef(0);

  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    setPdf(null);
    setNumPages(0);
    setCurrentPage(1);

    (async () => {
      try {
        const pdfjs = await loadPdfjs();
        const doc = await pdfjs.getDocument(url).promise;
        if (cancelled) {
          doc.destroy();
          return;
        }
        setPdf(doc);
        setNumPages(doc.numPages);
        setStatus('ready');
      } catch (err) {
        if (!cancelled) {
          console.error('Failed to load PDF', url, err);
          setStatus('error');
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [url]);

  const renderPage = useCallback(
    async (pageNumber: number, canvas: HTMLCanvasElement, targetWidth: number) => {
      if (!pdf) return;
      const token = ++renderTokenRef.current;
      const page = await pdf.getPage(pageNumber);
      if (token !== renderTokenRef.current) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const base = page.getViewport({ scale: 1 });
      const scale = (targetWidth / base.width) * dpr;
      const viewport = page.getViewport({ scale });

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.aspectRatio = `${base.width} / ${base.height}`;

      await page.render({ canvasContext: ctx, viewport }).promise;
    },
    [pdf],
  );

  useEffect(() => {
    if (!pdf || !canvasRef.current || !stageRef.current) return;
    const targetWidth = Math.max(280, stageRef.current.clientWidth);
    void renderPage(currentPage, canvasRef.current, targetWidth);
  }, [pdf, currentPage, renderPage]);

  useEffect(() => {
    if (!pdf || !canvasRef.current || !stageRef.current) return;
    const node = stageRef.current;
    let timeoutId: number | undefined;
    const observer = new ResizeObserver(() => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (canvasRef.current && stageRef.current) {
          void renderPage(currentPage, canvasRef.current, stageRef.current.clientWidth);
        }
      }, 150);
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [pdf, currentPage, renderPage]);

  const goPrev = useCallback(() => setCurrentPage((p) => Math.max(1, p - 1)), []);
  const goNext = useCallback(
    () => setCurrentPage((p) => Math.min(numPages || 1, p + 1)),
    [numPages],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).closest('input, textarea, select')) return;
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goPrev, goNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartXRef.current;
    touchStartXRef.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX ?? start;
    const dx = end - start;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const pageLabel = useMemo(
    () => `${labels.page} ${currentPage} ${labels.of} ${numPages || '—'}`,
    [labels, currentPage, numPages],
  );

  const canPrev = currentPage > 1;
  const canNext = numPages > 0 && currentPage < numPages;

  return (
    <div className="w-full max-w-[25.2rem] mx-auto">
      <div className="premium-card rounded-3xl p-3 sm:p-5 md:p-6 shadow-xl">
        <div
          ref={stageRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden flex items-center justify-center"
          style={{ aspectRatio: '1 / 1.414', minHeight: 180 }}
        >
          {status === 'loading' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400">
              <FileText className="w-12 h-12 animate-pulse" />
              <span className="text-sm">{labels.loading}</span>
            </div>
          )}
          {status === 'error' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400">
              <AlertCircle className="w-12 h-12" />
              <span className="text-sm">{labels.error}</span>
            </div>
          )}
          <canvas
            ref={canvasRef}
            className={`block max-w-full max-h-full w-auto h-auto shadow-lg rounded-md bg-white transition-opacity duration-300 ${
              status === 'ready' ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {status === 'ready' && (
            <>
              <button
                type="button"
                onClick={goPrev}
                disabled={!canPrev}
                aria-label={labels.prev}
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center text-gray-700 hover:text-primary-500 transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!canNext}
                aria-label={labels.next}
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center text-gray-700 hover:text-primary-500 transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 mt-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev || status !== 'ready'}
            aria-label={labels.prev}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="font-display text-sm font-medium text-gray-700 tabular-nums">{pageLabel}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 hover:text-primary-500 transition px-3 py-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{labels.open}</span>
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels.open}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={!canNext || status !== 'ready'}
            aria-label={labels.next}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {status === 'ready' && numPages > 1 && numPages <= 30 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
            {Array.from({ length: numPages }, (_, idx) => {
              const n = idx + 1;
              const active = n === currentPage;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCurrentPage(n)}
                  aria-label={`${labels.page} ${n}`}
                  className={`h-2 rounded-full transition-all ${
                    active ? 'w-6 bg-primary-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

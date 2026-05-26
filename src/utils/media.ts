// Pre-load all available images from the images directory and subdirectories
const mediaFiles = import.meta.glob('/public/images/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,gif,GIF,svg,SVG,heic,HEIC,heif,HEIF}');

const mediaPaths = Object.keys(mediaFiles).sort((left, right) =>
  left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }),
);

function toMediaPrefix(folderPath: string): string {
  return `/public/images/${folderPath}/`.toLowerCase();
}

function toPublicPath(filePath: string): string {
  return import.meta.env.BASE_URL + filePath.replace('/public/', '');
}

function getDirectMediaFiles(folderPath: string): string[] {
  const prefix = toMediaPrefix(folderPath);

  return mediaPaths.filter((filePath) => {
    const relativePath = filePath.toLowerCase().slice(prefix.length);
    return filePath.toLowerCase().startsWith(prefix) && !relativePath.includes('/');
  });
}

function getNestedFolderPreviewFiles(folderPath: string): string[] {
  const prefix = toMediaPrefix(folderPath);
  const firstFileByFolder = new Map<string, string>();

  for (const filePath of mediaPaths) {
    const normalizedPath = filePath.toLowerCase();
    if (!normalizedPath.startsWith(prefix)) {
      continue;
    }

    const relativePath = normalizedPath.slice(prefix.length);
    const pathSegments = relativePath.split('/');
    if (pathSegments.length < 2) {
      continue;
    }

    const childFolder = pathSegments[0];
    if (!firstFileByFolder.has(childFolder)) {
      firstFileByFolder.set(childFolder, filePath);
    }
  }

  return Array.from(firstFileByFolder.entries())
    .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }))
    .map(([, filePath]) => filePath);
}

function getNestedFolderAllFiles(folderPath: string): string[] {
  const prefix = toMediaPrefix(folderPath);

  return mediaPaths.filter((filePath) => {
    const normalizedPath = filePath.toLowerCase();
    if (!normalizedPath.startsWith(prefix)) {
      return false;
    }

    const relativePath = normalizedPath.slice(prefix.length);
    return relativePath.includes('/');
  });
}

/**
 * Returns the first image found in an exact directory path inside /public/images/
 * Example: if folderPath is "adults/hero", it checks for "/public/images/adults/hero/*"
 */
export function getMediaImage(folderPath: string): string | undefined {
  const directFiles = getDirectMediaFiles(folderPath);
  if (directFiles.length > 0) {
    return toPublicPath(directFiles[0]);
  }

  const nestedPreviewFiles = getNestedFolderPreviewFiles(folderPath);
  return nestedPreviewFiles[0] ? toPublicPath(nestedPreviewFiles[0]) : undefined;
}

/**
 * Returns preview images ONLY from nested subfolders (ignores direct files).
 * Useful when you want to exclude loose files and only show subfolder items.
 */
export function getMediaNestedFolderPreviewImages(folderPath: string): string[] {
  return getNestedFolderPreviewFiles(folderPath).map(toPublicPath);
}

/**
 * Returns one preview image per nested subfolder inside /public/images/.
 * Useful for carousels where each child folder represents one logical item.
 */
export function getMediaFolderPreviewImages(folderPath: string): string[] {
  const directFiles = getDirectMediaFiles(folderPath);
  if (directFiles.length > 0) {
    return directFiles.map(toPublicPath);
  }

  return getNestedFolderPreviewFiles(folderPath).map(toPublicPath);
}

/**
 * Returns all images found in an exact directory path inside /public/images/.
 * Photos from nested subfolders (e.g. reviews/01, reviews/02) come first,
 * followed by any loose photos sitting directly in the parent folder.
 */
export function getMediaImages(folderPath: string): string[] {
  const directFiles = getDirectMediaFiles(folderPath);
  const nestedFiles = getNestedFolderAllFiles(folderPath);

  const uniqueFiles = Array.from(new Set([...nestedFiles, ...directFiles]));

  return uniqueFiles.map(toPublicPath);
}

const diplomaFiles = import.meta.glob('/public/diplomas/**/*.{pdf,PDF}');

export interface DiplomaFile {
  url: string;
  title: string;
}

/**
 * Returns all PDF diplomas from /public/diplomas/, sorted by file name.
 * The file name (without extension) is used as the human-readable title.
 */
export function getDiplomaFiles(): DiplomaFile[] {
  return Object.keys(diplomaFiles)
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }))
    .map((filePath) => {
      const url = toPublicPath(filePath);
      const fileName = filePath.split('/').pop() ?? '';
      const title = fileName.replace(/\.pdf$/i, '').replace(/^\d+[-_.\s]*/, '').trim();
      return { url, title };
    });
}

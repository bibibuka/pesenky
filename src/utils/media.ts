// Pre-load all available images from the images directory and subdirectories
const mediaFiles = import.meta.glob('/public/images/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,gif,GIF,svg,SVG,heic,HEIC,heif,HEIF}');

const mediaPaths = Object.keys(mediaFiles).sort((left, right) =>
  left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }),
);

function toMediaPrefix(folderPath: string): string {
  return `/public/images/${folderPath}/`.toLowerCase();
}

function toPublicPath(filePath: string): string {
  return filePath.replace('/public', '');
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
 * Returns all images found in an exact directory path inside /public/images/.
 * If the folder contains nested subfolders, each subfolder contributes its first image,
 * so a structure like reviews/01/photo.png and reviews/02/photo.png is treated as
 * two separate gallery items.
 */
export function getMediaImages(folderPath: string): string[] {
  const directFiles = getDirectMediaFiles(folderPath);
  const nestedPreviewFiles = getNestedFolderPreviewFiles(folderPath);

  return [...directFiles, ...nestedPreviewFiles].map(toPublicPath);
}

import { X, ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

interface GalleryLightboxProps {
  isOpen: boolean;
  images: string[];
  title: string;
  onClose: () => void;
}

export default function GalleryLightbox({ isOpen, images, title, onClose }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isViewingImage = selectedIndex !== null;

  // Lock body scroll when gallery is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('lightbox-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
    };
  }, [isOpen]);

  // Reset selected index when gallery closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedIndex(null);
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      if (isViewingImage) {
        setSelectedIndex(null);
      } else {
        onClose();
      }
    }
    if (isViewingImage && images.length > 1) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      }
    }
  }, [isOpen, isViewingImage, images.length, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-[110] flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          {isViewingImage && (
            <button
              onClick={() => setSelectedIndex(null)}
              className="text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors"
              title="Back to gallery"
            >
              <Grid className="w-5 h-5" />
            </button>
          )}
          <h3 className="text-white font-display text-lg sm:text-xl font-bold truncate max-w-[50vw]">
            {title}
          </h3>
          {isViewingImage && (
            <span className="text-white/50 text-sm">
              {selectedIndex! + 1} / {images.length}
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Gallery grid view */}
      {!isViewingImage && (
        <div className="w-full h-full overflow-y-auto pt-20 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <img
                  src={img}
                  alt={`${title} — ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {i + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen single image view */}
      {isViewingImage && (
        <div className="w-full h-full flex items-center justify-center pt-16 pb-4 px-4 sm:px-6">
          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={() => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))}
              className="absolute left-2 sm:left-4 z-[115] text-white/70 hover:text-white p-2 sm:p-3 bg-black/40 hover:bg-black/60 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Image */}
          <img
            src={images[selectedIndex!]}
            alt={`${title} — ${selectedIndex! + 1}`}
            decoding="async"
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          />

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={() => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))}
              className="absolute right-2 sm:right-4 z-[115] text-white/70 hover:text-white p-2 sm:p-3 bg-black/40 hover:bg-black/60 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
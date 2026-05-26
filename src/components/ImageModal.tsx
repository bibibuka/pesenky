import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageUrl, onClose }: ImageModalProps) {
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

  if (!isOpen || !imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm" 
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white p-2 bg-black/50 rounded-full transition-colors z-[110]"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      <img 
        src={imageUrl} 
        alt="Review fullscreen" 
        decoding="async"
        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
}

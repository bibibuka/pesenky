import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/* ──────────────────────────────────────────────────────────────────
   Единая система появления при скролле.
   - Один общий IntersectionObserver на всё приложение.
   - Типовая анимация: opacity 0→1 + translateY 24px→0, 700ms, cubic-bezier(0.16,1,0.3,1).
   - prefers-reduced-motion: показываем сразу.
   ────────────────────────────────────────────────────────────────── */

type Cb = (visible: boolean) => void;
let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, Cb>();

function getObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb(true);
            sharedObserver?.unobserve(entry.target);
            callbacks.delete(entry.target);
          }
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  return sharedObserver;
}

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Animated({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    callbacks.set(el, setVisible);
    const obs = getObserver();
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  const style: CSSProperties = {
    transitionDelay: visible ? `${delay}ms` : '0ms',
  };

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--in' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

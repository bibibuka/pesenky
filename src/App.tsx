import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { translations, type Lang } from './i18n';
import { Menu, X, ChevronDown } from 'lucide-react';
import MouseWave from './components/MouseWave';

// Один плавающий значок — позиция задаётся один раз при монтировании (stable ref),
// анимация полностью через CSS: нота всплывает снизу (top:100vh) через весь экран
// вверх (-130vh) и бесшовно зацикливается. Никакого JS-телепорта.
type FloatingNoteProps = {
  glyph: string;
  color: string;
  variant: 'a' | 'b' | 'c';
  dur: string;
  delay: string;
  op: number;
  size: number;
  spinDur: string;
  spinDir: 'normal' | 'reverse';
  left: number; // 3…95 % — горизонтальная позиция (фиксированная)
  hideOnMobile?: boolean;
};

function FloatingNote({ glyph, color, variant, dur, delay, op, size, spinDur, spinDir, left, hideOnMobile }: FloatingNoteProps) {
  return (
    <div
      className={`decor-item note-float note-${variant}${hideOnMobile ? ' decor-hide-mobile' : ''}`}
      style={{
        left: `${left}%`,
        top: '100vh',
        width: `${size}px`,
        height: `${size * 1.3}px`,
        ['--note-dur' as never]: dur,
        ['--note-delay' as never]: delay,
        ['--note-opacity' as never]: op,
      }}
    >
      <div
        className="note-spin"
        style={{
          ['--spin-dur' as never]: spinDur,
          ['--spin-dir' as never]: spinDir,
          ['--note-opacity' as never]: op,
        }}
      >
        <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <text x="50" y="115" textAnchor="middle" fontFamily="Georgia, serif" fontSize="130" fill={color}>{glyph}</text>
        </svg>
      </div>
    </div>
  );
}

const HomePage = lazy(() => import('./pages/HomePage'));
const AdultsPage = lazy(() => import('./pages/AdultsPage'));
const KidsPage = lazy(() => import('./pages/KidsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ArtistPage = lazy(() => import('./pages/ArtistPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const BookPage = lazy(() => import('./pages/BookPage'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));

const LANG_STORAGE_KEY = 'pesenky.lang';
const SUPPORTED_LANGS: readonly Lang[] = ['de', 'en', 'ru'];

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'de';
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && (SUPPORTED_LANGS as readonly string[]).includes(stored)) {
      return stored as Lang;
    }
  } catch {
    // localStorage may be unavailable (private mode, blocked cookies) — fall through.
  }
  const browser = (window.navigator.language || '').slice(0, 2).toLowerCase();
  if ((SUPPORTED_LANGS as readonly string[]).includes(browser)) {
    return browser as Lang;
  }
  return 'de';
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(readInitialLang);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const t = translations[lang];

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // Ignore storage errors — language still applies for the session.
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    let ticking = false;
    const h = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', h, { passive: true });
    h();
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenu(false);
  }, [location.pathname]);

  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navItems = [
    { label: t.nav.home, href: '/' },
    {
      label: t.nav.lessons,
      key: 'lessons',
      children: [
        { label: t.nav.adults, href: '/adults' },
        { label: t.nav.kids, href: '/kids' },
      ],
    },
    {
      label: t.nav.stageCreative,
      key: 'stageCreative',
      children: [
        { label: t.nav.projects, href: '/projects' },
        { label: t.nav.artist, href: '/artist' },
      ],
    },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.reviews, href: '/reviews' },
  ];

  return (
    <div className="min-h-screen relative">
      <MouseWave />

      {/* Base background colour */}
      <div className="fixed inset-0 pointer-events-none bg-[#faf8f6]" style={{ zIndex: 0 }} />

      {/* Floating Music Notes — все варианты нотных знаков, всплывают, крутятся и рассасываются */}
      <div className="decor-3d-layer" aria-hidden="true">
        {/* 22 ноты, одинаковая скорость подъёма (22s), задержки равномерно через 1s */}
        {([
          { glyph: '♪',  size: 164, color: '#9e1a3b', variant: 'a', dur: '22s', delay: '0s',   op: 0.09, spinDur: '7s',  spinDir: 'normal',  left: 5  },
          { glyph: '♫',  size: 200, color: '#ba9934', variant: 'b', dur: '22s', delay: '-1s',   op: 0.09, spinDur: '9s',  spinDir: 'reverse', left: 88, hideOnMobile: true },
          { glyph: '♩',  size: 127, color: '#9e1a3b', variant: 'c', dur: '22s', delay: '-2s',   op: 0.10, spinDur: '5s',  spinDir: 'normal',  left: 35 },
          { glyph: '𝄞', size: 237, color: '#ba9934', variant: 'a', dur: '22s', delay: '-3s',   op: 0.07, spinDur: '14s', spinDir: 'reverse', left: 72, hideOnMobile: true },
          { glyph: '♭',  size: 146, color: '#9e1a3b', variant: 'b', dur: '22s', delay: '-4s',   op: 0.09, spinDur: '6s',  spinDir: 'normal',  left: 15 },
          { glyph: '𝄢', size: 218, color: '#ba9934', variant: 'c', dur: '22s', delay: '-5s',   op: 0.08, spinDur: '12s', spinDir: 'reverse', left: 55, hideOnMobile: true },
          { glyph: '♯',  size: 173, color: '#9e1a3b', variant: 'a', dur: '22s', delay: '-6s',   op: 0.09, spinDur: '10s', spinDir: 'normal',  left: 92 },
          { glyph: '♮',  size: 155, color: '#ba9934', variant: 'b', dur: '22s', delay: '-7s',   op: 0.09, spinDur: '8s',  spinDir: 'reverse', left: 42, hideOnMobile: true },
          { glyph: '♬',  size: 182, color: '#9e1a3b', variant: 'c', dur: '22s', delay: '-8s',   op: 0.08, spinDur: '11s', spinDir: 'normal',  left: 8  },
          { glyph: '♪',  size: 137, color: '#ba9934', variant: 'a', dur: '22s', delay: '-9s',   op: 0.09, spinDur: '6s',  spinDir: 'reverse', left: 65, hideOnMobile: true },
          { glyph: '𝄞', size: 209, color: '#9e1a3b', variant: 'b', dur: '22s', delay: '-10s',  op: 0.07, spinDur: '13s', spinDir: 'normal',  left: 28 },
          { glyph: '♫',  size: 164, color: '#ba9934', variant: 'c', dur: '22s', delay: '-11s',  op: 0.09, spinDur: '7s',  spinDir: 'reverse', left: 80, hideOnMobile: true },
          { glyph: '♬',  size: 173, color: '#9e1a3b', variant: 'a', dur: '22s', delay: '-12s',  op: 0.08, spinDur: '9s',  spinDir: 'normal',  left: 48 },
          { glyph: '♭',  size: 146, color: '#ba9934', variant: 'b', dur: '22s', delay: '-13s',  op: 0.09, spinDur: '8s',  spinDir: 'normal',  left: 75, hideOnMobile: true },
          { glyph: '♩',  size: 155, color: '#9e1a3b', variant: 'c', dur: '22s', delay: '-14s',  op: 0.09, spinDur: '6s',  spinDir: 'reverse', left: 3  },
          { glyph: '♮',  size: 137, color: '#ba9934', variant: 'a', dur: '22s', delay: '-15s',  op: 0.09, spinDur: '7s',  spinDir: 'normal',  left: 58, hideOnMobile: true },
          { glyph: '𝄢', size: 191, color: '#9e1a3b', variant: 'b', dur: '22s', delay: '-16s',  op: 0.08, spinDur: '11s', spinDir: 'reverse', left: 90 },
          { glyph: '♪',  size: 127, color: '#ba9934', variant: 'c', dur: '22s', delay: '-17s',  op: 0.09, spinDur: '5s',  spinDir: 'normal',  left: 32, hideOnMobile: true },
          { glyph: '♯',  size: 146, color: '#9e1a3b', variant: 'a', dur: '22s', delay: '-18s',  op: 0.09, spinDur: '6s',  spinDir: 'reverse', left: 68 },
          { glyph: '♫',  size: 182, color: '#ba9934', variant: 'b', dur: '22s', delay: '-19s',  op: 0.08, spinDur: '8s',  spinDir: 'normal',  left: 12, hideOnMobile: true },
          { glyph: '♬',  size: 173, color: '#9e1a3b', variant: 'c', dur: '22s', delay: '-20s',  op: 0.08, spinDur: '10s', spinDir: 'reverse', left: 50 },
          { glyph: '𝄞', size: 195, color: '#ba9934', variant: 'a', dur: '22s', delay: '-21s',  op: 0.07, spinDur: '13s', spinDir: 'normal',  left: 22, hideOnMobile: true },
        ] as const).map((n, i) => (
          <FloatingNote key={i} {...n} />
        ))}
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        {/* ═══════ NAVBAR ═══════ */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'glass-nav shadow-sm' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-18 gap-2">
              <Link to="/" className="flex items-center shrink-0">
                <img src={`${import.meta.env.BASE_URL}brand/logo.png`} alt="Académie des Talents" decoding="async" className="h-[48px] sm:h-[60px] md:h-[66px] w-auto object-contain" />
              </Link>

              <div className="hidden lg:flex items-center gap-5">
                {navItems.map((item) => {
                  if ('children' in item && item.children) {
                    const isActive = item.children.some(c => location.pathname === c.href);
                    return (
                      <div
                        key={item.key}
                        className="relative z-50 group"
                      >
                        <button
                          className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive ? 'text-primary-700' : 'text-gray-600 hover:text-primary-700'}`}
                        >
                          {item.label}
                          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full left-0 pt-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                          <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className={`block px-4 py-2.5 text-sm font-medium transition-colors ${location.pathname === child.href ? 'text-primary-700 bg-primary-50' : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'}`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link key={item.href} to={item.href!}
                      className={`text-sm font-medium transition-colors ${location.pathname === item.href ? 'text-primary-700' : 'text-gray-600 hover:text-primary-700'}`}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-1.5 sm:gap-3">
                <div className="lang-toggle shrink-0">
                  <button onClick={() => setLang('de')} className={lang === 'de' ? 'active' : ''}>DE</button>
                  <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
                  <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'active' : ''}>RU</button>
                </div>
                <Link to="/book" className="btn-primary hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                  {t.nav.cta}
                </Link>
                <button onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu" className="lg:hidden p-2 text-gray-700 shrink-0">
                  {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {mobileMenu && (
            <div className="lg:hidden glass-nav border-t border-gray-100 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  if ('children' in item && item.children) {
                    const isExpanded = mobileExpanded === item.key;
                    const isActive = item.children.some(c => location.pathname === c.href);
                    return (
                      <div key={item.key}>
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : item.key!)}
                          className={`w-full flex items-center justify-between py-3 px-3 font-medium rounded-lg transition-colors ${isActive ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:bg-primary-50'}`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        {isExpanded && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-100 pl-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={() => { setMobileMenu(false); setMobileExpanded(null); }}
                                className={`block py-2.5 px-3 text-sm font-medium rounded-lg transition-colors ${location.pathname === child.href ? 'text-primary-700 bg-primary-50' : 'text-gray-500 hover:text-primary-700 hover:bg-primary-50'}`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <Link key={item.href} to={item.href!} onClick={() => setMobileMenu(false)}
                      className={`block py-3 px-3 font-medium rounded-lg transition-colors ${location.pathname === item.href ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:bg-primary-50'}`}>{item.label}</Link>
                  );
                })}
                <Link to="/book" onClick={() => setMobileMenu(false)}
                  className="btn-primary block text-center py-3 px-6 text-white font-semibold mt-3 w-full">{t.nav.cta}</Link>
              </div>
            </div>
          )}
        </nav>

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/adults" element={<AdultsPage lang={lang} />} />
            <Route path="/kids" element={<KidsPage lang={lang} />} />
            <Route path="/projects" element={<ProjectsPage lang={lang} />} />
            <Route path="/artist" element={<ArtistPage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/reviews" element={<ReviewsPage lang={lang} />} />
            <Route path="/book" element={<BookPage lang={lang} />} />
            <Route path="/impressum" element={<ImpressumPage lang={lang} />} />
            <Route path="/datenschutz" element={<DatenschutzPage lang={lang} />} />
          </Routes>
        </Suspense>

        {/* ═══════ FOOTER ═══════ */}
        <footer className="bg-white/75 backdrop-blur-md border-t border-primary-100/30 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
              <div className="col-span-2 lg:col-span-1">
                <div className="mb-4">
                  <img src={`${import.meta.env.BASE_URL}brand/logo.png`} alt="Académie des Talents" loading="lazy" decoding="async" className="h-[54px] sm:h-[60px] w-auto object-contain" />
                </div>
                <p className="text-sm text-gray-400">{t.footer.tagline}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">{t.nav.lessons}</h4>
                <div className="space-y-2">
                  <Link to="/adults" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.adults}</Link>
                  <Link to="/kids" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.kids}</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">{t.nav.stageCreative}</h4>
                <div className="space-y-2">
                  <Link to="/projects" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.projects}</Link>
                  <Link to="/artist" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.artist}</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">&nbsp;</h4>
                <div className="space-y-2">
                  <Link to="/about" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.about}</Link>
                  <Link to="/reviews" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.reviews}</Link>
                  <Link to="/book" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.book}</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">Legal</h4>
                <div className="space-y-2">
                  <Link to="/impressum" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.imprint}</Link>
                  <Link to="/datenschutz" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.privacy}</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6 text-center">
              <p className="text-xs sm:text-sm text-gray-400">© {new Date().getFullYear()} Académie des Talents. {t.footer.rights}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

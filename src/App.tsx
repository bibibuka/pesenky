import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { translations, type Lang } from './i18n';
import { Mic, Menu, X } from 'lucide-react';
import MouseWave from './components/MouseWave';

const HomePage = lazy(() => import('./pages/HomePage'));
const AdultsPage = lazy(() => import('./pages/AdultsPage'));
const KidsPage = lazy(() => import('./pages/KidsPage'));
const ArtistPage = lazy(() => import('./pages/ArtistPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const BookPage = lazy(() => import('./pages/BookPage'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));

export default function App() {
  const [lang, setLang] = useState<Lang>('de');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const t = translations[lang];

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

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.adults, href: '/adults' },
    { label: t.nav.kids, href: '/kids' },
    { label: t.nav.artist, href: '/artist' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.reviews, href: '/reviews' },
    { label: t.nav.contact, href: '/book' },
  ];

  return (
    <div className="min-h-screen relative">
      <MouseWave />

      {/* Lava Lamp Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 bg-[#faf8f6]" />
        <div className="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] blur-[80px] animate-lava-1" style={{ background: 'radial-gradient(circle, rgba(139,21,56,0.35) 0%, rgba(139,21,56,0) 65%)' }} />
        <div className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] blur-[70px] animate-lava-2" style={{ background: 'radial-gradient(circle, rgba(200,160,78,0.4) 0%, rgba(200,160,78,0) 65%)' }} />
        <div className="absolute bottom-[10%] left-[30%] w-[40vw] h-[40vw] blur-[90px] animate-lava-3" style={{ background: 'radial-gradient(circle, rgba(185,28,61,0.3) 0%, rgba(185,28,61,0) 65%)' }} />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        {/* ═══════ NAVBAR ═══════ */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-18">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 border border-primary-200 rounded-full flex items-center justify-center bg-gray-900 text-white">
                  <span className="text-xl font-serif">𝄞</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-lg font-bold text-gray-900 tracking-wider uppercase">Académie</span>
                  <span className="text-primary-700" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.1rem', marginTop: '2px' }}>des Talents</span>
                </div>
              </Link>

              <div className="hidden lg:flex items-center gap-6">
                {navLinks.map(l => (
                  <Link key={l.href} to={l.href} className={`text-sm font-medium transition-colors ${location.pathname === l.href ? 'text-primary-700' : 'text-gray-600 hover:text-primary-700'}`}>{l.label}</Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="lang-toggle">
                  <button onClick={() => setLang('de')} className={lang === 'de' ? 'active' : ''}>DE</button>
                  <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
                  <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'active' : ''}>RU</button>
                </div>
                <Link to="/book" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary-700 text-white text-sm font-semibold hover:bg-primary-800 transition-colors shadow-sm">
                  {t.nav.cta}
                </Link>
                <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 text-gray-700">
                  {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {mobileMenu && (
            <div className="lg:hidden glass-nav border-t border-gray-100 shadow-lg">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map(l => (
                  <Link key={l.href} to={l.href} onClick={() => setMobileMenu(false)}
                    className="block py-2.5 px-3 text-gray-700 font-medium rounded-lg hover:bg-primary-50 transition-colors">{l.label}</Link>
                ))}
                <Link to="/book" onClick={() => setMobileMenu(false)}
                  className="block py-2.5 px-3 text-primary-700 font-semibold mt-2">{t.nav.cta} →</Link>
              </div>
            </div>
          )}
        </nav>

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/adults" element={<AdultsPage lang={lang} />} />
            <Route path="/kids" element={<KidsPage lang={lang} />} />
            <Route path="/artist" element={<ArtistPage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/reviews" element={<ReviewsPage lang={lang} />} />
            <Route path="/book" element={<BookPage lang={lang} />} />
            <Route path="/impressum" element={<ImpressumPage lang={lang} />} />
            <Route path="/datenschutz" element={<DatenschutzPage lang={lang} />} />
          </Routes>
        </Suspense>

        {/* ═══════ FOOTER ═══════ */}
        <footer className="bg-white/60 backdrop-blur-md border-t border-primary-100/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 border border-primary-100 rounded-full flex items-center justify-center bg-gray-900 text-white">
                    <span className="text-sm">𝄞</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-display font-bold text-gray-900 text-sm tracking-wide uppercase">Académie</span>
                    <span className="text-primary-700" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '0.9rem' }}>des Talents</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{t.footer.tagline}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">Navigation</h4>
                <div className="space-y-2">
                  <Link to="/adults" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.adults}</Link>
                  <Link to="/kids" className="block text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.kids}</Link>
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
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Académie des Talents. {t.footer.rights}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

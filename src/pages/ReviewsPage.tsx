import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import { getMediaImages } from '../utils/media';

const pageT = {
  de: {
    hero: { title: 'Bewertungen', highlight: 'unserer Kunden', subtitle: '' },
    screenshots: { badge: 'Original-Nachrichten', title: 'Kunden-', highlight: 'stimmen' },
    social: { title: 'Noch mehr Stimmen', text: 'Weitere Bewertungen und Einblicke in unsere Arbeit finden Sie in unseren sozialen Netzwerken — Stimmen, Momente und Inspiration aus unserer Schule.' },
    cta: { title: 'Bereit für Ihre eigene Geschichte?', cta1: 'Termin buchen', cta2: 'Auftritt anfragen' },
  },
  en: {
    hero: { title: 'Client', highlight: 'Reviews', subtitle: '' },
    screenshots: { badge: 'Original Messages', title: 'Client', highlight: 'Feedback' },
    social: { title: 'Even More Voices', text: 'You can find more reviews and behind-the-scenes moments from our school on our social media — stories, voices and inspiration every day.' },
    cta: { title: 'Ready for your own story?', cta1: 'Book a Session', cta2: 'Request Performance' },
  },
  ru: {
    hero: { title: 'Отзывы', highlight: 'клиентов', subtitle: '' },
    screenshots: { badge: 'Оригинальные сообщения', title: 'Отзывы', highlight: 'клиентов' },
    social: { title: 'Ещё больше отзывов', text: 'Больше отзывов и закулисных моментов нашей школы вы найдёте в наших социальных сетях — истории, голоса и вдохновение каждый день.' },
    cta: { title: 'Готовы к своей истории?', cta1: 'Записаться', cta2: 'Запросить выступление' },
  },
};

export default function ReviewsPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Dynamically load all images from the reviews folder
  const screenshots = getMediaImages('reviews');

  return (
    <main className="relative z-10 min-h-screen">
      <HeroSection title={t.hero.title} titleHighlight={t.hero.highlight} subtitle={t.hero.subtitle}
        ctas={[{ label: t.cta.cta1, href: '/book', isRoute: true }]} />

      {/* SCREENSHOTS GRID */}
      <section className="py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionTitle badge={t.screenshots.badge} title={t.screenshots.title} highlight={t.screenshots.highlight} badgeIcon={<Quote className="w-3.5 h-3.5" />} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {screenshots.map((imgSrc, i) => (
              <Animated key={i} delay={i * 100}>
                <div
                  className="relative group w-full h-[260px] sm:h-[300px] md:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-white/40 bg-white/50 cursor-pointer flex justify-center items-center"
                  onClick={() => setSelectedImage(imgSrc)}
                >
                  <img 
                    src={imgSrc} 
                    alt={`Screenshot ${i + 1}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA BANNER */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animated>
            <div className="relative overflow-hidden rounded-3xl border border-primary-100/60 bg-gradient-to-br from-primary-50 via-white to-amber-50/50 p-6 sm:p-8 md:p-12 text-center">
              {/* Decorative accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-100/30 to-transparent rounded-tr-full pointer-events-none" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-200/50">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-balance">
                  {t.social.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                  {t.social.text}
                </p>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animated>
            <div className="featured-card rounded-3xl p-6 sm:p-10 md:p-14">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6 text-balance">{t.cta.title}</h2>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
                <Link to="/book" className="btn-primary text-base sm:text-lg justify-center">{t.cta.cta1}<ArrowRight className="w-5 h-5" /></Link>
                <Link to="/book" className="btn-secondary text-base sm:text-lg justify-center">{t.cta.cta2}<ArrowRight className="w-5 h-5" /></Link>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      <ImageModal 
        isOpen={!!selectedImage} 
        imageUrl={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </main>
  );
}

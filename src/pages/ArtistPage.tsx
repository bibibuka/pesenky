import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { type Lang } from '../i18n';
import { ArrowRight, CheckCircle2, Music, Star, Award, Play, Video, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import ImageModal from '../components/ImageModal';
import { getMediaImage, getMediaImages } from '../utils/media';

const pageT = {
  de: {
    hero: { title: 'Live-Auftritte', highlight: 'für Ihre Veranstaltung', subtitle: 'Live-Auftritte für kulturelle Veranstaltungen jeder Ebene sowie für private und kammermusikalische Formate.', cta1: 'Für Auftritt einladen', cta2: 'Anfrage senden' },
    about: {
      badge: 'Konzerttätigkeit', title: 'Über mich', highlight: 'auf der Bühne',
      p1: 'Als professionelle Sängerin und Viertelfinalistin bei "The Voice of Germany" bringe ich lebendige, emotionale Musik auf die Bühne — ob bei intimen Kammerevents, kulturellen Abenden oder festlichen Anlässen.',
      p2: 'Die Verbindung zwischen Bühne und Unterricht ist der Kern meiner Arbeit: Die Bühne nährt die Pädagogik, die Pädagogik vertieft die Bühnenpräsenz.',
    },
    media: {
      badge: 'Galerie', title: 'Eindrücke von', highlight: 'der Bühne',
    },
    reviews: {
      badge: 'Bewertungen', title: 'Stimmen unserer', highlight: 'Gäste',
    },
    whyInvite: {
      badge: 'Warum wir', title: 'Warum Veranstalter', highlight: 'einladen',
      items: ['Professionelle musikalische Qualität', 'Lebendige, emotionale Darbietung', 'Ästhetisches und stilvolles Format', 'Langjährige Bühnenerfahrung', 'Individuell angepasstes Programm'],
    },
    packages: {
      badge: 'Pakete', title: 'Event-', highlight: 'Pakete',
      items: [
        { title: 'Intimate', desc: 'Intimer Rahmen: Solo-Gesang, akustische Begleitung. Ideal für private Feiern, Dinner, Zeremonien.', price: 'ab 1000 CHF' },
        { title: 'Classic', desc: 'Professioneller Auftritt für mittelgroße Events: Hochzeiten, Vernissagen, Firmenanlässe.', price: 'ab 1500 CHF' },
        { title: 'Grand', desc: 'Große Veranstaltungen mit vollem Programm: Galas, Konzerte, Firmenfeiern.', price: 'ab 3000 CHF' },
      ],
      note: 'Alle Preise verstehen sich als Richtwerte. Genaue Konditionen werden individuell besprochen.',
    },
    cta: { title: 'Interesse an einem Auftritt?', subtitle: 'Lassen Sie uns über Ihr Event sprechen.', cta1: 'Auftritt anfragen', cta2: 'Format besprechen' },
  },
  en: {
    hero: { title: 'Live Performances', highlight: 'for Your Event', subtitle: 'Live performances for cultural events of any level, as well as for private and chamber formats.', cta1: 'Invite to Perform', cta2: 'Send Inquiry' },
    about: {
      badge: 'Concert Activity', title: 'About Me', highlight: 'on Stage',
      p1: 'As a professional vocalist and quarter-finalist of "The Voice of Germany", I bring vibrant, emotional music to the stage — whether at intimate chamber events, cultural evenings or festive occasions.',
      p2: 'The connection between stage and teaching is at the core of my work: the stage nourishes the teaching, and teaching deepens the stage presence.',
    },
    media: { badge: 'Gallery', title: 'Impressions from', highlight: 'the Stage' },
    reviews: {
      badge: 'Reviews', title: 'What Our', highlight: 'Guests Say',
    },
    whyInvite: {
      badge: 'Why Us', title: 'Why organizers', highlight: 'invite us',
      items: ['Professional musical quality', 'Vibrant, emotional delivery', 'Aesthetic and stylish format', 'Years of stage experience', 'Individually adapted program'],
    },
    packages: {
      badge: 'Packages', title: 'Event', highlight: 'Packages',
      items: [
        { title: 'Intimate', desc: 'Intimate setting: solo vocals, acoustic accompaniment. Ideal for private celebrations, dinners, ceremonies.', price: 'from 1000 CHF' },
        { title: 'Classic', desc: 'Professional performance for medium events: weddings, openings, corporate occasions.', price: 'from 1500 CHF' },
        { title: 'Grand', desc: 'Large events with full program: galas, concerts, corporate celebrations.', price: 'from 3000 CHF' },
      ],
      note: 'All prices are indicative. Exact terms are discussed individually.',
    },
    cta: { title: 'Interested in a performance?', subtitle: 'Let\'s talk about your event.', cta1: 'Request Performance', cta2: 'Discuss Format' },
  },
  ru: {
    hero: { title: 'Живые выступления', highlight: 'на Ваше мероприятие', subtitle: 'Живые выступления для культурных мероприятий любого уровня, а также для частных и камерных форматов.', cta1: 'Пригласить на выступление', cta2: 'Отправить запрос' },
    about: {
      badge: 'Концертная деятельность', title: 'Обо мне', highlight: 'на сцене',
      p1: 'Сцена — моя жизнь. С раннего детства я живу музыкой и сегодня с радостью делюсь этой любовью со зрителем.',
      p2: 'Я создаю атмосферу, которая наполняет любое мероприятие красотой, делая его особенным и запоминающимся.',
    },
    media: { badge: 'Галерея', title: 'Впечатления', highlight: 'со сцены' },
    interviews: { badge: 'Интервью', title: 'Интервью', highlight: 'и СМИ' },
    reviews: {
      badge: 'Отзывы', title: 'Отзывы', highlight: 'о концертах',
    },
    whyInvite: {
      badge: 'Почему мы', title: 'Почему организаторы', highlight: 'приглашают',
      items: ['Профессиональное музыкальное качество', 'Живая, эмоциональная подача', 'Эстетичный и стильный формат', 'Многолетний сценический опыт', 'Индивидуально адаптированная программа'],
    },
    packages: {
      badge: 'Пакеты', title: 'Пакеты для', highlight: 'мероприятий',
      items: [
        { title: 'Intimate', desc: 'Камерная обстановка: сольный вокал, акустическое сопровождение. Идеально для частных торжеств, ужинов, церемоний.', price: 'от 1000 CHF' },
        { title: 'Classic', desc: 'Профессиональное выступление для средних мероприятий: свадьбы, вернисажи, корпоративы.', price: 'от 1500 CHF' },
        { title: 'Grand', desc: 'Крупные мероприятия с полной программой: гала, концерты, корпоративные праздники.', price: 'от 3000 CHF' },
      ],
      note: 'Цены ориентировочные. Точные условия обсуждаются индивидуально.',
    },
    cta: { title: 'Заинтересованы в выступлении?', subtitle: 'Давайте обсудим Ваше мероприятие.', cta1: 'Запросить выступление', cta2: 'Обсудить формат' },
  },
};

const mediaImagesBackup = [
  "/images/placeholder.png"
];

export default function ArtistPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const reviewsScrollerRef = useRef<HTMLDivElement | null>(null);

  // Load hero and gallery images dynamically
  const heroImage = getMediaImage('artist/hero') || "/images/placeholder.png";
  const aboutImage = getMediaImage('artist/about/01') || getMediaImage('artist/about') || "/images/placeholder.png";
  
  // Get all images from artist/gallery, or fallback if empty
  const loadedGallery = getMediaImages('artist/gallery');
  const mediaImages = loadedGallery.length > 0 ? loadedGallery : mediaImagesBackup;

  // Load concert review images
  const concertReviews = getMediaImages('artist/reviews');

  const scrollReviews = (direction: 'left' | 'right') => {
    const scroller = reviewsScrollerRef.current;
    if (!scroller) return;
    const scrollAmount = Math.max(scroller.clientWidth * 0.78, 280);
    scroller.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <main className="relative z-10 min-h-screen">
      <HeroSection title={t.hero.title} titleHighlight={t.hero.highlight} subtitle={t.hero.subtitle}
        image={heroImage} imageAlt="Stage performance"
        ctas={[{ label: t.hero.cta1, href: '/book', isRoute: true }, { label: t.hero.cta2, href: '/book', variant: 'secondary', isRoute: true }]} />

      {/* ABOUT ON STAGE */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.about.badge} title={t.about.title} highlight={t.about.highlight} badgeIcon={<Music className="w-3.5 h-3.5" />} />
          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <Animated delay={200} className="order-1 md:order-1 flex justify-center">
              <div className="relative group w-full max-w-[290px] md:max-w-[380px]">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] w-full">
                  <img 
                    src={aboutImage} 
                    alt="Stage Performance" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      if(heroImage) {
                          target.src = heroImage;
                      } else {
                          target.src = 'https://images.unsplash.com/photo-1516280440502-86311e6ed53d?auto=format&fit=crop&q=80';
                      }
                    }}
                  />
                </div>
              </div>
            </Animated>
            <Animated delay={100} className="order-2 md:order-2">
              <div className="premium-card rounded-2xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5 h-full flex flex-col justify-center">
                <p className="text-gray-600 text-lg leading-relaxed">{t.about.p1}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{t.about.p2}</p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* MEDIA / VIDEO COLLAGE */}
      <section className="py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.media.badge} title={t.media.title} highlight={t.media.highlight} badgeIcon={<Video className="w-3.5 h-3.5" />} />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'csFD7qQay8o',
              'g7-1Nv3grEA',
              'Zb8qLHvaNqw',
              '9KdRWJUhNT0',
              'YD6jmpWy_Xk',
              'DZf1QGeDGf8',
              '5ViwjRErPww',
              'V3o03NjePrc'
            ].map((videoId, i) => (
              <Animated key={videoId} delay={i * 150} className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg premium-card p-2 relative group bg-white">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                  title={`YouTube video player - ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEWS */}
      {'interviews' in t && (
        <section className="py-5 md:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle badge={(t as any).interviews.badge} title={(t as any).interviews.title} highlight={(t as any).interviews.highlight} badgeIcon={<Play className="w-3.5 h-3.5" />} />
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {['Yh6FBPDpUW4', 'euz3rvlupeE', 'IXwiDea2Ssk'].map((videoId, i) => (
                <Animated key={videoId} delay={i * 150} className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg premium-card p-2 relative group bg-white">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title={`Interview - ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </Animated>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONCERT REVIEWS — horizontal scrollable carousel */}
      {concertReviews.length > 0 && (
        <section className="py-5 md:py-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <SectionTitle badge={t.reviews.badge} title={t.reviews.title} highlight={t.reviews.highlight} badgeIcon={<Quote className="w-3.5 h-3.5" />} />
          </div>

          <div
            ref={reviewsScrollerRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {concertReviews.map((imgSrc, i) => (
              <Animated key={i} delay={i * 100} className="snap-center shrink-0">
                <div 
                  className="relative group h-[200px] sm:h-[260px] md:h-[300px] w-auto rounded-3xl overflow-hidden shadow-lg border border-white/40 bg-white/50 cursor-pointer"
                  onClick={() => setSelectedImage(imgSrc)}
                >
                  <img 
                    src={imgSrc} 
                    alt={`Review ${i + 1}`}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Animated>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-2 mb-2 px-4">
            {concertReviews.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label={lang === 'de' ? 'Nach links scrollen' : lang === 'ru' ? 'Прокрутить влево' : 'Scroll left'}
                  onClick={() => scrollReviews('left')}
                  className="w-12 h-12 rounded-full border border-black/5 bg-white/80 backdrop-blur-md text-gray-700 flex items-center justify-center shadow-sm transition-all hover:-translate-x-0.5 hover:border-primary-200 hover:text-primary-600 hover:shadow-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  aria-label={lang === 'de' ? 'Nach rechts scrollen' : lang === 'ru' ? 'Прокрутить вправо' : 'Scroll right'}
                  onClick={() => scrollReviews('right')}
                  className="w-12 h-12 rounded-full border border-black/5 bg-white/80 backdrop-blur-md text-gray-700 flex items-center justify-center shadow-sm transition-all hover:translate-x-0.5 hover:border-primary-200 hover:text-primary-600 hover:shadow-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </section>
      )}

      {/* WHY INVITE */}
      <section className="py-5 md:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.whyInvite.badge} title={t.whyInvite.title} highlight={t.whyInvite.highlight} badgeIcon={<Award className="w-3.5 h-3.5" />} />
          <div className="space-y-4">
            {t.whyInvite.items.map((item, i) => (
              <Animated key={i} delay={i * 100}>
                <div className="premium-card rounded-xl p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
                  <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT PACKAGES */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.packages.badge} title={t.packages.title} highlight={t.packages.highlight} badgeIcon={<Star className="w-3.5 h-3.5" />} />
          <div className="grid md:grid-cols-3 gap-6">
            {t.packages.items.map((pkg, i) => (
              <Animated key={i} delay={i * 120}>
                <div className={`rounded-2xl p-5 sm:p-7 h-full flex flex-col ${i === 1 ? 'featured-card ring-2 ring-primary-200' : 'premium-card'}`}>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{pkg.desc}</p>
                  <div className="font-display text-xl sm:text-2xl font-bold gradient-text break-words">{pkg.price}</div>
                </div>
              </Animated>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">{t.packages.note}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animated>
            <div className="featured-card rounded-3xl p-6 sm:p-10 md:p-14">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">{t.cta.title}</h2>
              <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8">{t.cta.subtitle}</p>
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

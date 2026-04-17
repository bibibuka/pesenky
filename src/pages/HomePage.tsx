import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import {
  Mic, ArrowRight, Sparkles, Star, CheckCircle2, Users, Award,
  Music, Heart, MapPin, Mail, Phone, Quote, Briefcase, Baby, Volume2, ChevronLeft, ChevronRight
} from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import { useRef, useState } from 'react';
import ImageModal from '../components/ImageModal';
import { getMediaImage, getMediaImages } from '../utils/media';

const pageT = {
  de: {
    hero: {
      badge: 'Schaffhausen, Schweiz',
      title: 'Stimme, Bühne,',
      highlight: 'Selbstausdruck',
      subtitle: 'Vokalpädagogik und Stimmcoaching für Erwachsene, Kinder und künstlerische Projekte. Individuell, professionell, mit Herz.',
      cta1: 'Termin buchen',
      cta2: 'Richtung wählen',
    },
    about: {
      badge: 'Philosophie',
      title: 'Stimme als Instrument',
      highlight: 'des Selbstausdrucks',
      p1: 'Meine Arbeit dreht sich um die Stimme als Schlüssel zur Selbstentfaltung, Sicherheit und Präsenz. Ich glaube, dass jeder Mensch eine einzigartige stimmliche Identität besitzt — und dass es sich lohnt, sie zu entdecken.',
      p2: 'Ob Sie singen, sprechen oder auftreten möchten: Ich begleite Sie auf einer persönlichen Reise zu mehr Freiheit, Ausdruck und Selbstvertrauen. In einem ästhetischen, unterstützenden Umfeld mit individuellem Ansatz.',
    },
    directions: {
      badge: 'Drei Richtungen',
      title: 'Wählen Sie',
      highlight: 'Ihre Richtung',
      adults: { title: 'Für Erwachsene', desc: 'Stimme, Selbstsicherheit, Vokaltechnik, Auftritte. Individuell und in kleinen Gruppen.', cta: 'Mehr erfahren' },
      kids: { title: 'Für Kinder', desc: 'Stimmliche Entfaltung, Musikalität, Bühnenfreude. In einem geschützten, liebevollen Rahmen.', cta: 'Mehr erfahren' },
      artist: { title: 'Live & Bühne', desc: 'Auftritte, künstlerische Projekte, private und kulturelle Events.', cta: 'Mehr erfahren' },
    },
    adultsPreview: {
      badge: 'Für Erwachsene',
      title: 'Stimme, Präsenz',
      highlight: 'und Selbstvertrauen',
      text: 'Individuelle Stimmarbeit für Erwachsene, die freier, sicherer und ausdrucksstärker klingen möchten. Von der Diagnose bis zur Bühne — in verschiedenen Formaten.',
      items: ['Stimmdiagnostik und Atemarbeit', 'Lösung von Blockaden und Verspannungen', 'Ausdruck, Bühnenpräsenz und Sicherheit', 'Premium-Formate und kleine Gruppen'],
      cta: 'Zur Seite für Erwachsene',
    },
    kidsPreview: {
      badge: 'Für Kinder',
      title: 'Stimme, Freude',
      highlight: 'und Entfaltung',
      text: 'Behutsame Vokalarbeit für Kinder von 6 bis 16 Jahren. Musikalität, Selbstvertrauen und Spaß an der Bühne — ohne Druck und mit Respekt.',
      items: ['Stimmliche Entfaltung und Gehörbildung', 'Selbstsicherheit und Bühnenfreude', 'Individuelle und Kleingruppenformate', 'Kreative Vokalprojekte und Auftritte'],
      cta: 'Zur Seite für Kinder',
    },
    concertPreview: {
      badge: 'Live & Bühne',
      title: 'Konzerte',
      highlight: 'und Auftritte',
      text: 'Professionelle Livemusik für private, kulturelle und kammermusikalische Anlässe. Emotionale Tiefe, musikalische Qualität und ein ästhetisches Erlebnis.',
      cta: 'Zur Live-Seite',
    },
    whyUs: {
      badge: 'Warum wir',
      title: 'Warum Kunden',
      highlight: 'uns wählen',
      items: [
        'Individueller Ansatz — kein Schema, sondern echte persönliche Begleitung',
        'Erfahrung in Pädagogik und auf der Bühne',
        'Stimme als Teil der Persönlichkeit, nicht nur Technik',
        'Komfortables, ästhetisches und unterstützendes Format',
      ],
    },
    reviews: {
      badge: 'Bewertungen',
      title: 'Was unsere Kunden',
      highlight: 'sagen',
      items: [
        { name: 'Sarah M.', role: 'Unternehmerin', text: 'Nach wenigen Sitzungen habe ich meine Stimme völlig neu entdeckt. Ich spreche jetzt mit mehr Ruhe und Autorität.' },
        { name: 'Thomas K.', role: 'Vater', text: 'Unsere Tochter blüht dort regelrecht auf. Sie singt jetzt mit Freude und Selbstvertrauen.' },
        { name: 'Julia R.', role: 'Event-Organisatorin', text: 'Ein unvergesslicher Auftritt. Die Atmosphäre war magisch, die Stimme hat alle berührt.' },
        { name: 'Michael B.', role: 'Expat', text: 'Endlich ein Ort, wo ich mich traue zu singen. Professionell, warm und absolut erstklassig.' },
      ],
    },
    aboutMe: {
      badge: 'Coach',
      title: 'Über',
      highlight: 'mich',
      bio: 'Professionelle Sängerin, Vokalpädagogin und Stimmcoach mit über 15 Jahren Erfahrung. Ich arbeite mit Erwachsenen und Kindern und verbinde Pädagogik, Coaching und Bühne.',
      points: ['Professionelle Vokalistin und Stimmcoach', 'Arbeitet mit Erwachsenen und Kindern', 'Mehrsprachig: Deutsch / Englisch / Russisch', 'Erfahrung auf der Bühne und im Studio'],
      more: 'Mehr über mich',
    },
    finalCta: {
      title: 'Nicht sicher, wo Sie anfangen sollen?',
      subtitle: 'Schreiben Sie mir — gemeinsam finden wir das passende Format für Sie oder Ihr Kind.',
      cta: 'Beratung buchen',
      cta2: 'Kontakt aufnehmen',
    },
    contactInfo: {
      badge: 'Kontakt',
      title: 'So erreichen',
      highlight: 'Sie mich',
      location: 'Schaffhausen, Schweiz',
      locationSub: 'Nähe Zürich · auch online verfügbar',
      email: 'hello@voicelab-sh.ch',
      phone: '+41 79 585 95 61',
    },
  },
  en: {
    hero: {
      badge: 'Schaffhausen, Switzerland',
      title: 'Voice, Stage,',
      highlight: 'Self-Expression',
      subtitle: 'Vocal coaching for adults, children and artistic projects. Individual, professional, heartfelt.',
      cta1: 'Book a Session',
      cta2: 'Choose Direction',
    },
    about: {
      badge: 'Philosophy',
      title: 'Voice as an Instrument',
      highlight: 'of Self-Expression',
      p1: 'My work revolves around voice as a key to self-expression, confidence and presence. I believe every person has a unique vocal identity — and it\'s worth discovering.',
      p2: 'Whether you want to sing, speak or perform: I guide you on a personal journey toward more freedom, expression and self-confidence. In an aesthetic, supportive environment with an individual approach.',
    },
    directions: {
      badge: 'Three Directions',
      title: 'Choose',
      highlight: 'Your Direction',
      adults: { title: 'For Adults', desc: 'Voice, confidence, vocal technique, performances. Individually and in small groups.', cta: 'Learn More' },
      kids: { title: 'For Kids', desc: 'Vocal development, musicality, stage joy. In a safe, caring environment.', cta: 'Learn More' },
      artist: { title: 'Live & Stage', desc: 'Performances, artistic projects, private and cultural events.', cta: 'Learn More' },
    },
    adultsPreview: {
      badge: 'For Adults',
      title: 'Voice, Presence',
      highlight: 'and Confidence',
      text: 'Individual voice work for adults who want to sound freer, more confident and more expressive. From diagnostics to stage — in various formats.',
      items: ['Voice diagnostics and breathwork', 'Releasing blocks and tension', 'Expression, stage presence and confidence', 'Premium formats and small groups'],
      cta: 'Go to Adults Page',
    },
    kidsPreview: {
      badge: 'For Kids',
      title: 'Voice, Joy',
      highlight: 'and Growth',
      text: 'Gentle vocal work for children ages 6 to 16. Musicality, confidence and stage joy — without pressure and with respect.',
      items: ['Vocal development and ear training', 'Confidence and stage joy', 'Individual and small group formats', 'Creative vocal projects and performances'],
      cta: 'Go to Kids Page',
    },
    concertPreview: {
      badge: 'Live & Stage',
      title: 'Concerts',
      highlight: 'and Performances',
      text: 'Professional live music for private, cultural and chamber events. Emotional depth, musical quality and an aesthetic experience.',
      cta: 'Go to Live Page',
    },
    whyUs: {
      badge: 'Why Us',
      title: 'Why Clients',
      highlight: 'Choose Us',
      items: [
        'Individual approach — no templates, genuine personal guidance',
        'Experience in teaching and on stage',
        'Voice as part of personality, not just technique',
        'Comfortable, aesthetic and supportive format',
      ],
    },
    reviews: {
      badge: 'Reviews',
      title: 'What Our Clients',
      highlight: 'Say',
      items: [
        { name: 'Sarah M.', role: 'Entrepreneur', text: 'After just a few sessions, I completely rediscovered my voice. I now speak with more calm and authority.' },
        { name: 'Thomas K.', role: 'Parent', text: 'Our daughter truly blossoms there. She now sings with joy and confidence.' },
        { name: 'Julia R.', role: 'Event Organizer', text: 'An unforgettable performance. The atmosphere was magical, the voice touched everyone.' },
        { name: 'Michael B.', role: 'Expat', text: 'Finally a place where I dare to sing. Professional, warm and absolutely first-class.' },
      ],
    },
    aboutMe: {
      badge: 'Coach',
      title: 'About',
      highlight: 'Me',
      bio: 'Professional singer, vocal teacher and voice coach with over 15 years of experience. Quarter-finalist of "The Voice of Germany". I combine teaching, coaching and stage performance.',
      points: ['Professional vocalist and voice coach', 'Quarter-finalist of "The Voice of Germany"', 'Multilingual: DE / EN / RU', 'Stage and studio experience'],
      more: 'More about me',
    },
    finalCta: {
      title: 'Not sure where to start?',
      subtitle: 'Write to me — together we\'ll find the right format for you or your child.',
      cta: 'Book a Consultation',
      cta2: 'Get in Touch',
    },
    contactInfo: {
      badge: 'Contact',
      title: 'How to',
      highlight: 'Reach Me',
      location: 'Schaffhausen, Switzerland',
      locationSub: 'Near Zurich · also available online',
      email: 'hello@voicelab-sh.ch',
      phone: '+41 79 585 95 61',
    },
  },
  ru: {
    hero: {
      badge: 'Шаффхаузен, Швейцария',
      title: 'Голос, сцена,',
      highlight: 'самовыражение',
      subtitle: 'Вокальная педагогика и голосовой коучинг для взрослых, детей и артистических проектов. Индивидуально, профессионально, с душой.',
      cta1: 'Записаться',
      cta2: 'Выбрать направление',
    },
    about: {
      badge: 'Философия',
      title: 'Голос как инструмент',
      highlight: 'самовыражения',
      p1: 'Моя работа строится вокруг голоса как ключа к самовыражению, уверенности и присутствию. Я верю, что у каждого человека есть уникальная вокальная идентичность — и её стоит раскрыть.',
      p2: 'Хотите ли вы петь, говорить или выступать — я сопровождаю вас на личном пути к большей свободе, выразительности и уверенности. В эстетичной, поддерживающей среде с индивидуальным подходом.',
    },
    directions: {
      badge: 'Три направления',
      title: 'Выберите',
      highlight: 'своё направление',
      adults: { title: 'Для взрослых', desc: 'Голос, уверенность, вокальная техника, выступления. Индивидуально и в малых группах.', cta: 'Подробнее' },
      kids: { title: 'Для детей', desc: 'Раскрытие голоса, музыкальность, радость от сцены. В бережном, заботливом формате.', cta: 'Подробнее' },
      artist: { title: 'Концерты', desc: 'Выступления, артистические проекты, частные и культурные мероприятия.', cta: 'Подробнее' },
    },
    adultsPreview: {
      badge: 'Для взрослых',
      title: 'Голос, присутствие',
      highlight: 'и уверенность',
      text: 'Индивидуальная работа с голосом для взрослых, которые хотят звучать свободнее, увереннее и выразительнее. От диагностики до сцены — в различных форматах.',
      items: ['Диагностика голоса и работа с дыханием', 'Снятие зажимов и напряжения', 'Выразительность, сценическое присутствие', 'Премиальные форматы и малые группы'],
      cta: 'На страницу для взрослых',
    },
    kidsPreview: {
      badge: 'Для детей',
      title: 'Голос, радость',
      highlight: 'и раскрытие',
      text: 'Бережная вокальная работа для детей от 6 до 16 лет. Музыкальность, уверенность и радость от сцены — без давления и с уважением.',
      items: ['Раскрытие голоса и развитие слуха', 'Уверенность и радость от сцены', 'Индивидуальные и групповые форматы', 'Творческие вокальные проекты'],
      cta: 'На страницу для детей',
    },
    concertPreview: {
      badge: 'Концерты',
      title: 'Живые',
      highlight: 'выступления',
      text: 'Профессиональная живая музыка для частных, культурных и камерных событий. Эмоциональная глубина, качество исполнения и эстетический опыт.',
      cta: 'На страницу Live',
    },
    whyUs: {
      badge: 'Почему мы',
      title: 'Почему выбирают',
      highlight: 'нас',
      items: [
        'Индивидуальный подход — не шаблон, а настоящее сопровождение',
        'Опыт преподавания и сцены',
        'Голос как часть личности, а не только техника',
        'Комфортный, эстетичный и поддерживающий формат',
      ],
    },
    reviews: {
      badge: 'Отзывы',
      title: 'Что говорят',
      highlight: 'наши клиенты',
      items: [
        { name: 'Сара М.', role: 'Предприниматель', text: 'После нескольких занятий я заново открыла свой голос. Теперь я говорю спокойнее и увереннее.' },
        { name: 'Томас К.', role: 'Отец', text: 'Наша дочь расцветает на занятиях. Она поёт с радостью и уверенностью.' },
        { name: 'Юлия Р.', role: 'Организатор мероприятий', text: 'Незабываемое выступление. Атмосфера была волшебной, голос тронул всех.' },
        { name: 'Михаэль Б.', role: 'Экспат', text: 'Наконец-то место, где я решаюсь петь. Профессионально, тепло и первоклассно.' },
      ],
    },
    aboutMe: {
      badge: 'Коуч',
      title: 'Обо',
      highlight: 'мне',
      bio: 'Профессиональная певица, вокальный педагог и голосовой коуч с опытом более 15 лет. Четвертьфиналистка шоу «Голос Германии» (The Voice of Germany). Соединяю педагогику, коучинг и сцену.',
      points: ['Профессиональная вокалистка и коуч', 'Четвертьфиналистка «Голоса Германии»', 'Многоязычная: DE / EN / RU', 'Опыт на сцене и в студии'],
      more: 'Подробнее обо мне',
    },
    finalCta: {
      title: 'Не знаете, с чего начать?',
      subtitle: 'Напишите мне — вместе подберём подходящий формат для вас или вашего ребёнка.',
      cta: 'Записаться на консультацию',
      cta2: 'Связаться',
    },
    contactInfo: {
      badge: 'Контакты',
      title: 'Как со мной',
      highlight: 'связаться',
      location: 'Шаффхаузен, Швейцария',
      locationSub: 'Рядом с Цюрихом · онлайн тоже доступен',
      email: 'hello@voicelab-sh.ch',
      phone: '+41 79 585 95 61',
    },
  },
};

const HOME_IMAGES = {
  directions: [
    getMediaImage('home/directions/adults') || '/images/placeholder.png',
    getMediaImage('home/directions/kids') || '/images/placeholder.png',
    getMediaImage('home/directions/artist') || '/images/placeholder.png',
  ],
  adultsPreview: getMediaImage('home/previews/adults') || '/images/placeholder.png',
  kidsPreview: getMediaImage('home/previews/kids') || '/images/placeholder.png',
  concertPreview: getMediaImage('home/concert/artist') || '/images/placeholder.png',
  coachPortrait: getMediaImage('home/about/coach') || '/images/placeholder.png',
};

export default function HomePage({ lang }: { lang: Lang }) {
  const t = pageT[lang];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const reviewsScrollerRef = useRef<HTMLDivElement | null>(null);
  const directionIcons = [<Briefcase className="w-7 h-7" />, <Baby className="w-7 h-7" />, <Music className="w-7 h-7" />];
  const directionLinks = ['/adults', '/kids', '/artist'];
  const directions = [t.directions.adults, t.directions.kids, t.directions.artist];

  const reviewImages = getMediaImages('home/reviews');

  const scrollReviews = (direction: 'left' | 'right') => {
    const scroller = reviewsScrollerRef.current;

    if (!scroller) {
      return;
    }

    const scrollAmount = Math.max(scroller.clientWidth * 0.78, 280);

    scroller.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <main className="relative z-10 min-h-screen">
      {/* ═══════ 1. HERO ═══════ */}
      <section className="relative flex items-center min-h-[90vh] pt-24 pb-8 lg:pt-32 lg:pb-10 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={`${import.meta.env.BASE_URL}video/bg.mp4`}
          />
          {/* Bottom-only gradient for smooth transition into page content */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 75%, #F5F5F7 100%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <Animated><span className="badge mb-6 inline-flex shadow-sm bg-white/90 backdrop-blur-md border border-black/5"><Sparkles className="w-3.5 h-3.5" />{t.hero.badge}</span></Animated>
            <Animated delay={150}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1D1D1F] leading-tight mb-8 tracking-tight drop-shadow-sm text-outline-white">
                {t.hero.title}{' '}<span className="gradient-text">{t.hero.highlight}</span>
              </h1>
            </Animated>
            <Animated delay={300}>
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-sm text-outline-black">
                {t.hero.subtitle}
              </p>
            </Animated>
            <Animated delay={450}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/book" className="btn-primary text-lg px-8 py-4 shadow-lg shadow-primary-700/20">{t.hero.cta1}</Link>
                <a href="#directions" className="btn-secondary text-lg px-8 py-4 bg-white/20 backdrop-blur-md shadow-sm border-white/60 text-[#1D1D1F] text-outline-white hover:bg-white/30 transition-all">{t.hero.cta2}</a>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* ═══════ 2. ABOUT / WHO WE ARE ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.about.badge} title={t.about.title} highlight={t.about.highlight} badgeIcon={<Heart className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <div className="premium-card rounded-2xl p-8 md:p-10 space-y-5">
              <p className="text-gray-600 text-lg leading-relaxed">{t.about.p1}</p>
              <p className="text-gray-600 text-lg leading-relaxed">{t.about.p2}</p>
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ 3. THREE DIRECTIONS ═══════ */}
      <section id="directions" className="py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.directions.badge} title={t.directions.title} highlight={t.directions.highlight} badgeIcon={<Users className="w-3.5 h-3.5" />} />
          <div className="grid md:grid-cols-3 gap-8">
            {directions.map((dir, i) => (
              <Animated key={i} delay={i * 150}>
                <div className="premium-card rounded-3xl overflow-hidden h-full flex flex-col group">
                  <div className="h-52 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img src={HOME_IMAGES.directions[i]} alt={dir.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute bottom-4 left-4 z-20 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary-600 shadow-lg group-hover:-translate-y-1 transition-transform">
                      {directionIcons[i]}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{dir.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{dir.desc}</p>
                    <Link to={directionLinks[i]} className="btn-secondary text-sm inline-flex w-fit">{dir.cta}<ArrowRight className="w-4 h-4" /></Link>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4. ADULTS PREVIEW ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.adultsPreview.badge} title={t.adultsPreview.title} highlight={t.adultsPreview.highlight} badgeIcon={<Briefcase className="w-3.5 h-3.5" />} />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Animated delay={100}>
              <div className="premium-card rounded-2xl p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.adultsPreview.text}</p>
                <ul className="space-y-3 mb-6">
                  {t.adultsPreview.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
                <Link to="/adults" className="btn-primary inline-flex">{t.adultsPreview.cta}<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </Animated>
            <Animated delay={300} className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-xl group">
                <img src={HOME_IMAGES.adultsPreview} alt="Adults vocal" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* ═══════ 5. KIDS PREVIEW ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.kidsPreview.badge} title={t.kidsPreview.title} highlight={t.kidsPreview.highlight} badgeIcon={<Baby className="w-3.5 h-3.5" />} />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Animated delay={300} className="hidden lg:block order-1 lg:order-none">
              <div className="rounded-3xl overflow-hidden shadow-xl group">
                <img src={HOME_IMAGES.kidsPreview} alt="Kids vocal" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </Animated>
            <Animated delay={100}>
              <div className="premium-card rounded-2xl p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.kidsPreview.text}</p>
                <ul className="space-y-3 mb-6">
                  {t.kidsPreview.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
                <Link to="/kids" className="btn-primary inline-flex">{t.kidsPreview.cta}<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* ═══════ 6. CONCERT PREVIEW ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.concertPreview.badge} title={t.concertPreview.title} highlight={t.concertPreview.highlight} badgeIcon={<Volume2 className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl group h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 flex flex-col justify-end p-10">
                <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">{t.concertPreview.text}</p>
                <Link to="/artist" className="btn-gold inline-flex w-fit">{t.concertPreview.cta}<ArrowRight className="w-4 h-4" /></Link>
              </div>
              <img src={HOME_IMAGES.concertPreview} alt="Concert" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ 7. WHY CHOOSE US ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.whyUs.badge} title={t.whyUs.title} highlight={t.whyUs.highlight} badgeIcon={<Award className="w-3.5 h-3.5" />} />
          <div className="space-y-4">
            {t.whyUs.items.map((item, i) => (
              <Animated key={i} delay={i * 120}>
                <div className="premium-card rounded-xl p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 8. REVIEWS ═══════ */}
      <section className="py-5 md:py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <SectionTitle className="mb-0" badge={t.reviews.badge} title={t.reviews.title} highlight={t.reviews.highlight} badgeIcon={<Quote className="w-3.5 h-3.5" />} />
        </div>

        {/* Screenshot Carousel */}
        {reviewImages.length > 0 && (
          <>
            <div
              ref={reviewsScrollerRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reviewImages.map((imgSrc, i) => (
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

            {/* Slider Controls - Centered below carousel */}
            {reviewImages.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-2 mb-8">
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
              </div>
            )}
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animated delay={500}>
            <div className="text-center mt-4">
              <Link to="/reviews" className="btn-secondary inline-flex">{lang === 'de' ? 'Alle Bewertungen' : lang === 'ru' ? 'Все отзывы' : 'All Reviews'}<ArrowRight className="w-4 h-4" /></Link>
            </div>
          </Animated>
        </div>
      </section>

      <ImageModal 
        isOpen={!!selectedImage} 
        imageUrl={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

      {/* ═══════ 9. ABOUT ME ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.aboutMe.badge} title={t.aboutMe.title} highlight={t.aboutMe.highlight} badgeIcon={<Award className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <div className="premium-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
                <div className="relative shrink-0 group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-400 to-amber-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
                  <div className="w-[230px] h-[270px] md:w-[270px] md:h-[315px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src={HOME_IMAGES.coachPortrait} alt="Alina" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-xl animate-float"><Mic className="w-6 h-6 text-primary-500" /></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">{t.aboutMe.bio}</p>
                  <ul className="space-y-3 mb-6">
                    {t.aboutMe.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 justify-center md:justify-start"><CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" /><span className="font-medium">{p}</span></li>
                    ))}
                  </ul>
                  <Link to="/about" className="btn-secondary inline-flex">{t.aboutMe.more}<ArrowRight className="w-4 h-4 ml-2" /></Link>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ 10. FINAL CTA ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animated>
            <div className="featured-card rounded-3xl p-10 md:p-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.finalCta.title}</h2>
              <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">{t.finalCta.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/book" className="btn-primary text-lg">{t.finalCta.cta}<ArrowRight className="w-5 h-5" /></Link>
                <Link to="/book" className="btn-secondary text-lg">{t.finalCta.cta2}<ArrowRight className="w-5 h-5" /></Link>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ 11. CONTACTS ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.contactInfo.badge} title={t.contactInfo.title} highlight={t.contactInfo.highlight} badgeIcon={<MapPin className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <div className="premium-card rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3"><MapPin className="w-6 h-6 text-primary-500" /></div>
                <p className="font-semibold text-gray-800">{t.contactInfo.location}</p>
                <p className="text-sm text-gray-400 mt-1">{t.contactInfo.locationSub}</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3"><Mail className="w-6 h-6 text-primary-500" /></div>
                <p className="font-semibold text-gray-800">{t.contactInfo.email}</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3"><Phone className="w-6 h-6 text-primary-500" /></div>
                <p className="font-semibold text-gray-800">{t.contactInfo.phone}</p>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </main>
  );
}

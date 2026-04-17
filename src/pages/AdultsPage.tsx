import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import {
  ArrowRight, CheckCircle2, Gem, Heart, Target,
  Mic, Users, Sparkles, Award, Shield, Play,
  Zap, Brain, Volume2, Music, Camera, Headphones,
  Star, Gift, Clock, Tag, Baby
} from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import ReviewCarousel from '../components/ReviewCarousel';
import FaqItem from '../components/FaqItem';
import { getMediaImage } from '../utils/media';

/* ────── images ────── */
const IMG = {
  hero: getMediaImage('adults/hero') || '/images/placeholder.png',
  coaching: getMediaImage('adults/coaching') || '/images/placeholder.png',
  stage: getMediaImage('adults/stage') || '/images/placeholder.png',
  breathwork: getMediaImage('adults/breathwork') || '/images/placeholder.png',
};

/* ─── translations ─── */
const pageT = {
  de: {
    hero: {
      title: 'Ihre Stimme ist mehr als',
      highlight: 'Sie denken',
      subtitle: 'Die Stimme offenbart das, was sich nicht in Worte fassen lässt. Sie spiegelt den inneren Zustand wider — und kann ihn verändern.',
      cta1: 'Termin buchen',
      cta2: 'Beratung anfragen',
    },

    intro: {
      badge: 'Selbstpräsentation',
      title: 'Wo der gewöhnliche Gesangsunterricht endet,',
      highlight: 'beginnt meine Arbeit',
      text: 'Gestützt auf umfangreiche Bühnenerfahrung und die Ausbildung bei herausragenden Gesangsmeistern helfe ich, die Stimme als ganzheitlichen Ausdruck der Persönlichkeit zu entfalten — und innere Kraft und Freiheit zu finden.',
      text2: 'Auf der Bühne singen, frei sprechen oder einfach frei klingen — das ist der Weg zu Ihrer neuen Stimme.',
    },

    forWhom: {
      badge: 'Für wen',
      title: 'Für diejenigen, die',
      highlight: 'in sich investieren',
      cards: [
        {
          icon: 'target',
          title: 'Professionelles Niveau',
          desc: 'Kombinierte Kurse für alle, die sich verbessern und auftreten möchten. Schritt für Schritt zu Meisterschaft und Bühnenerfahrung.',
        },
        {
          icon: 'music',
          title: 'Erwachsene mit Interesse an Musik',
          desc: 'Singen ist ein echtes intellektuelles und ästhetisches Vergnügen. Entdecken Sie Ihre Stimme und verwandeln Sie sie in eine Quelle der Freude und Inspiration.',
        },
        {
          icon: 'baby',
          title: 'Kinder & Jugendliche',
          desc: 'Behutsame Stimmarbeit für Kinder von 6 bis 16 Jahren. Wir fördern Musikalität, Selbstbewusstsein und Bühnenfreude — spielerisch, geschützt und professionell.',
        },
      ],
    },

    /* ── pricing ── */
    pricing: {
      badge: 'Vokalkurse',
      title: 'Preise und',
      highlight: 'Abonnements',
      single: {
        title: 'Einzelstunde (individuell)',
        price: 'ab 130 CHF',
        duration: '60 Min. / offline und online',
      },
      subscriptions: {
        title: 'Abonnements',
        subtitle: 'Kursblöcke mit Rabatt, flexibler Zeitplan, Fortschrittskontrolle.',
        items: [
          { lessons: '5', price: '618 CHF', discount: '5%', perLesson: '123.50 CHF/Stunde', save: '32 CHF' },
          { lessons: '10', price: '1\'170 CHF', discount: '10%', perLesson: '117 CHF/Stunde', save: '130 CHF' },
          { lessons: '20', price: '2\'080 CHF', discount: '20%', perLesson: '104 CHF/Stunde', save: '520 CHF' },
        ],
        note: 'Monats- und Jahresabonnements verfügbar.',
      },
    },

    /* ── packages ── */
    packages: {
      badge: 'Pakete',
      title: 'Premium',
      highlight: 'Pakete',
      items: [
        {
          icon: 'stage',
          title: 'Bühnen- & Wettbewerbsvorbereitung',
          desc: 'Repertoireauswahl, Bühnenbewegung, Mikrofonarbeit, Image, psychologische Bühnenvorbereitung, Anmeldeformulare ausfüllen.',
          price: '300 CHF',
          bonus: 'Bei Kauf eines 10er-Abos: 50% Rabatt | Bei 20er-Abo: Bühnenpaket geschenkt',
        },
        {
          icon: 'headphones',
          title: 'Studioaufnahme',
          desc: 'Aufnahme-Vorbereitung und Begleitung bei der Session.',
          price: 'ab 200 CHF/Std.',
          bonus: 'Studiomiete wird separat berechnet',
        },
        {
          icon: 'camera',
          title: 'Musikvideo-Dreh',
          desc: 'Konzept, Video-/Fotoaufnahme, Basisschnitt und Studioaufnahme. Hilfe bei Location und Zeitplan.',
          price: 'ab 2\'000 CHF/Tag',
          bonus: 'Nachbearbeitung ab 400 CHF | Locations, Miete und Licht separat',
        },
      ],
      online: {
        title: 'Online-Kurs',
        desc: '5 Videolektionen — bald verfügbar',
        price: '99 CHF',
      },
    },

    /* ── philosophy blocks ── */
    whyDifferent: {
      badge: 'Unser Ansatz',
      title: 'Warum das nicht nur',
      highlight: 'Gesangsunterricht ist',
      blocks: [
        { title: 'Stimme = Persönlichkeit', text: 'Ihre Stimme ist ein Spiegel Ihrer Persönlichkeit, nicht nur Technik. Wir entwickeln die Stimme ganzheitlich — Emotionen, Charakter und Bühnenpräsenz vereint.' },
        { title: 'Sicherheit vor Technik', text: 'Technik ist wichtig, aber wahre Stimmtransformation beginnt mit innerer Sicherheit. Wir entwickeln Können und Selbstvertrauen — Schritt für Schritt.' },
        { title: 'Singen verändert das Leben', text: 'Wenn die Stimme frei ist, verändert sich das Selbstgefühl und die Welt um Sie herum. Ich teile gerne meine Bühnenerfahrung, damit Sie sich voll entfalten können.' },
      ],
    },

    reviews: {
      badge: 'Bewertungen',
      title: 'Was unsere Kunden',
      highlight: 'erzählen',
      items: [
        { name: 'Sarah M.', role: 'Unternehmerin', text: 'Nach wenigen Sitzungen habe ich meine Stimme völlig neu entdeckt. Es war wirklich eine Reise zu mir selbst — tiefgreifend und befreiend.' },
        { name: 'Andreas W.', role: 'Manager', text: 'Meine Kolleg:innen bemerken den Unterschied. Ich klinge selbstsicherer, ruhiger und präsenter — und fühle mich auch so.' },
        { name: 'Elena D.', role: 'Künstlerin', text: 'Die Mischung aus Technik, Emotion und Ästhetik ist einzigartig. Jede Stunde ist wertvoll und inspirierend.' },
        { name: 'Michael B.', role: 'Expat', text: 'Endlich fühle ich mich wohl beim Singen. Professionell, warm und absolut erstklassig — hier bin ich genau richtig.' },
      ],
    },

    faq: {
      badge: 'FAQ',
      title: 'Häufig gestellte',
      highlight: 'Fragen',
      items: [
        { q: 'Brauche ich musikalische Erfahrung?', a: 'Nein. Die Programme sind für Erwachsene ohne Gesangsausbildung konzipiert. Viele meiner Kunden haben noch nie Unterricht gehabt.' },
        { q: 'Kann ich mitmachen, ohne auf der Bühne stehen zu wollen?', a: 'Natürlich! Viele Kunden kommen, um ihre Sprech- oder Gesangsstimme für sich selbst zu entwickeln — ohne jeglichen Bühnenambition.' },
        { q: 'Gibt es Online-Formate?', a: 'Ja. Ein großer Teil der Programme ist im Hybrid-Format (online + offline) verfügbar. Online-Sitzungen funktionieren besonders gut für Atem- und Stimmarbeit.' },
        { q: 'In welcher Sprache finden die Kurse statt?', a: 'Auf Deutsch, Englisch und Russisch — je nach Ihren Bedürfnissen.' },
        { q: 'Gibt es eine Probesitzung?', a: 'Ja! Die Stimmdiagnostik ist der perfekte Einstieg — Sie lernen Ihre Stimme neu kennen und ich kann einen Plan erstellen.' },
      ],
    },

    cta: {
      title: 'Bereit, Ihre Stimme zu entdecken?',
      subtitle: 'Buchen Sie eine Stimmdiagnostik — und erleben Sie den Unterschied, den bewusste Stimmarbeit macht.',
      cta1: 'Erste Sitzung buchen',
      cta2: 'Format wählen',
    },
  },

  en: {
    hero: {
      title: 'Your voice is more than',
      highlight: 'you think',
      subtitle: 'The voice reveals what words cannot express. It reflects your inner state — and has the power to transform it.',
      cta1: 'Book a Session',
      cta2: 'Request Consultation',
    },

    intro: {
      badge: 'Self-presentation',
      title: 'Where the ordinary vocal lesson ends,',
      highlight: 'my work begins',
      text: 'Drawing on extensive stage experience and training with outstanding vocal masters, I help to reveal the voice as a holistic expression of personality — discovering inner strength and freedom.',
      text2: 'Singing on stage, speaking freely, or simply sounding free — this is the path to your new voice.',
    },

    forWhom: {
      badge: 'For Whom',
      title: 'For those who invest',
      highlight: 'in themselves',
      cards: [
        {
          icon: 'target',
          title: 'Professional Level',
          desc: 'Combined classes for those who want to improve and perform. Step by step toward mastery and stage experience.',
        },
        {
          icon: 'music',
          title: 'Adults with Interest in Music',
          desc: 'Singing is a genuine intellectual and aesthetic pleasure. Discover your voice and turn it into a source of joy and inspiration.',
        },
        {
          icon: 'baby',
          title: 'Children & Teens',
          desc: 'Gentle vocal work for children ages 6 to 16. We nurture musicality, confidence and stage joy — playfully, safely and professionally.',
        },
      ],
    },

    pricing: {
      badge: 'Vocal Lessons',
      title: 'Prices and',
      highlight: 'Subscriptions',
      single: {
        title: 'Single Session (individual)',
        price: 'from 130 CHF',
        duration: '60 min / offline and online',
      },
      subscriptions: {
        title: 'Subscriptions',
        subtitle: 'Block of classes with discount, flexible schedule, progress monitoring.',
        items: [
          { lessons: '5', price: '618 CHF', discount: '5%', perLesson: '123.50 CHF/session', save: '32 CHF' },
          { lessons: '10', price: '1,170 CHF', discount: '10%', perLesson: '117 CHF/session', save: '130 CHF' },
          { lessons: '20', price: '2,080 CHF', discount: '20%', perLesson: '104 CHF/session', save: '520 CHF' },
        ],
        note: 'Monthly and annual subscriptions available.',
      },
    },

    packages: {
      badge: 'Packages',
      title: 'Premium',
      highlight: 'Packages',
      items: [
        {
          icon: 'stage',
          title: 'Stage & Competition Prep',
          desc: 'Repertoire selection, stage movement, microphone work, image, psychological stage preparation, filling out application forms.',
          price: '300 CHF',
          bonus: 'With 10-lesson subscription: 50% off | With 20-lesson sub: stage prep free',
        },
        {
          icon: 'headphones',
          title: 'Studio Recording',
          desc: 'Recording preparation and session accompaniment.',
          price: 'from 200 CHF/hr',
          bonus: 'Studio rental charged separately',
        },
        {
          icon: 'camera',
          title: 'Music Video Shoot',
          desc: 'Concept, video/photo shooting, basic editing and studio recording. Help with location and schedule.',
          price: 'from 2,000 CHF/day',
          bonus: 'Post-production from 400 CHF | Locations, rental and lighting separate',
        },
      ],
      online: {
        title: 'Online Course',
        desc: '5 video lessons — coming soon',
        price: '99 CHF',
      },
    },

    whyDifferent: {
      badge: 'Our Approach',
      title: 'Why this is more than',
      highlight: 'vocal lessons',
      blocks: [
        { title: 'Voice = Personality', text: 'Your voice is a reflection of your personality, not just technique. We develop the voice holistically — emotions, character and stage presence combined.' },
        { title: 'Confidence before technique', text: 'Technique matters, but true vocal transformation starts with inner confidence. We develop both skill and assurance — step by step.' },
        { title: 'Singing that changes lives', text: 'When the voice is free, your sense of self changes and the world around you. I gladly share my stage experience so you can fully open up.' },
      ],
    },

    reviews: {
      badge: 'Reviews',
      title: 'What our clients',
      highlight: 'say',
      items: [
        { name: 'Sarah M.', role: 'Entrepreneur', text: 'After just a few sessions, I completely rediscovered my voice. It was truly a journey to myself — profound and liberating.' },
        { name: 'Andreas W.', role: 'Manager', text: 'My colleagues notice the difference. I sound more confident, calmer and more present — and I feel that way too.' },
        { name: 'Elena D.', role: 'Artist', text: 'The blend of technique, emotion and aesthetics is unique. Every session is valuable and inspiring.' },
        { name: 'Michael B.', role: 'Expat', text: 'Finally I feel comfortable singing. Professional, warm and absolutely first-class — this is exactly right for me.' },
      ],
    },

    faq: {
      badge: 'FAQ',
      title: 'Frequently asked',
      highlight: 'questions',
      items: [
        { q: 'Do I need musical experience?', a: 'No. Programs are designed for adults without vocal training. Many of my clients have never had lessons before.' },
        { q: 'Can I join without wanting to perform?', a: 'Of course! Many clients come to develop their speaking or singing voice for themselves — without any stage ambition.' },
        { q: 'Are online formats available?', a: 'Yes. A large part of programs is available in hybrid format (online + offline). Online sessions work especially well for breath and voice work.' },
        { q: 'What language are classes in?', a: 'German, English and Russian — depending on your needs.' },
        { q: 'Is there a trial session?', a: 'Yes! Voice diagnostics is the perfect starting point — you get to know your voice anew and I can create a plan.' },
      ],
    },

    cta: {
      title: 'Ready to discover your voice?',
      subtitle: 'Book a voice diagnostic session — and experience the difference that conscious voice work makes.',
      cta1: 'Book First Session',
      cta2: 'Choose Format',
    },
  },

  ru: {
    hero: {
      title: 'Ваш голос — это больше, чем',
      highlight: 'вы думаете',
      subtitle: 'Голос раскрывает то, что невозможно выразить словами. Он отражает внутреннее состояние — и способен на него влиять.',
      cta1: 'Записаться',
      cta2: 'Запросить консультацию',
    },

    intro: {
      badge: 'Самопрезентация',
      title: 'Там, где заканчивается привычный урок вокала,',
      highlight: 'начинается моя работа',
      text: 'Опираясь на большой сценический опыт и обучение у выдающихся вокальных мастеров, я помогаю раскрыть голос как целостное выражение личности — обрести силу и внутреннюю свободу.',
      text2: 'Петь на сцене, говорить или просто звучать свободно — это путь к вашему новому голосу.',
    },

    forWhom: {
      badge: 'Для кого',
      title: 'Для тех, кто привык',
      highlight: 'инвестировать в себя',
      cards: [
        {
          icon: 'target',
          title: 'Профессиональный уровень',
          desc: 'Комбинированные занятия для тех, кто хочет и совершенствоваться, и выступать. Шаг за шагом к мастерству и сценическому опыту.',
        },
        {
          icon: 'music',
          title: 'Взрослые с интересом к музыке',
          desc: 'Пение — настоящее интеллектуальное и эстетическое удовольствие. Откройте свой голос и превратите его в источник радости и вдохновения.',
        },
        {
          icon: 'baby',
          title: 'Дети и подростки',
          desc: 'Бережная работа с голосом для детей от 6 до 16 лет. Развиваем музыкальность, уверенность и радость от сцены — игрово, бережно и профессионально.',
        },
      ],
    },

    pricing: {
      badge: 'Вокал',
      title: 'Цены и',
      highlight: 'абонементы',
      single: {
        title: 'Разовое занятие (индивидуально)',
        price: 'от 130 CHF',
        duration: '60 мин. / офлайн и онлайн',
      },
      subscriptions: {
        title: 'Абонементы',
        subtitle: 'Блок занятий со скидкой, удобный график, мониторинг прогресса.',
        items: [
          { lessons: '5', price: '618 CHF', discount: '5%', perLesson: '123.50 CHF/занятие', save: '32 CHF' },
          { lessons: '10', price: '1 170 CHF', discount: '10%', perLesson: '117 CHF/занятие', save: '130 CHF' },
          { lessons: '20', price: '2 080 CHF', discount: '20%', perLesson: '104 CHF/занятие', save: '520 CHF' },
        ],
        note: 'Месячные и годовые абонементы доступны.',
      },
    },

    packages: {
      badge: 'Пакеты',
      title: 'Премиальные',
      highlight: 'пакеты',
      items: [
        {
          icon: 'stage',
          title: 'Подготовка к сцене и конкурсу',
          desc: 'Подбор репертуара, сценическое движение, работа с микрофоном, имидж, психологическая подготовка к сцене, заполнение анкет.',
          price: '300 CHF',
          bonus: 'При покупке 10 уроков — скидка 50% | При покупке 20 уроков — подготовка к сцене в подарок',
        },
        {
          icon: 'headphones',
          title: 'Запись в студии',
          desc: 'Подготовлю к записи и сопровожу на сессии.',
          price: 'от 200 CHF/час',
          bonus: 'Аренда студии оплачивается отдельно',
        },
        {
          icon: 'camera',
          title: 'Съёмка клипа',
          desc: 'Концепт, съёмка видео/фото, базовый монтаж и запись в студии. Помогу с локацией и расписанием.',
          price: 'от 2 000 CHF/день',
          bonus: 'Монтаж от 400 CHF | Локации, аренда и свет оплачиваются отдельно',
        },
      ],
      online: {
        title: 'Онлайн-курс',
        desc: '5 видеоуроков — скоро',
        price: '99 CHF',
      },
    },

    whyDifferent: {
      badge: 'Наш подход',
      title: 'Почему это не просто',
      highlight: 'уроки вокала',
      blocks: [
        { title: 'Голос = Личность', text: 'Ваш голос — это отражение вашей личности, а не просто техника. Мы развиваем голос целостно, соединяя эмоции, характер и сценическое присутствие.' },
        { title: 'Уверенность, а не только техника', text: 'Техника важна, но настоящая трансформация голоса начинается с внутренней уверенности. Мы развиваем и мастерство, и уверенность — шаг за шагом.' },
        { title: 'Пение, которое меняет жизнь', text: 'Когда голос раскрыт, меняется и самоощущение, и мир вокруг вас. Я с радостью делюсь своим сценическим опытом, чтобы вы могли раскрыться полностью.' },
      ],
    },

    reviews: {
      badge: 'Отзывы',
      title: 'Что говорят',
      highlight: 'наши клиенты',
      items: [
        { name: 'Сара М.', role: 'Предприниматель', text: 'После нескольких занятий я заново открыла свой голос. Это было настоящее путешествие к себе — глубокое и освобождающее.' },
        { name: 'Андреас В.', role: 'Менеджер', text: 'Коллеги замечают разницу. Я звучу увереннее, спокойнее и присутственнее — и чувствую себя так же.' },
        { name: 'Елена Д.', role: 'Художница', text: 'Сочетание техники, эмоций и эстетики уникально. Каждое занятие ценно и вдохновляет.' },
        { name: 'Михаэль Б.', role: 'Экспат', text: 'Наконец-то я чувствую себя комфортно при пении. Профессионально, душевно и абсолютно первоклассно — я на своём месте.' },
      ],
    },

    faq: {
      badge: 'FAQ',
      title: 'Часто задаваемые',
      highlight: 'вопросы',
      items: [
        { q: 'Нужен ли опыт?', a: 'Нет. Программы созданы для взрослых без вокальной подготовки. Многие мои клиенты никогда не занимались раньше.' },
        { q: 'Обязательно ли петь на сцене?', a: 'Нет! Многие приходят развивать голос для себя — без каких-либо сценических амбиций.' },
        { q: 'Есть ли онлайн-формат?', a: 'Да, большая часть программ доступна в гибридном формате (онлайн + офлайн).' },
        { q: 'На каком языке проходят занятия?', a: 'На немецком, английском и русском — в зависимости от ваших потребностей.' },
        { q: 'Есть ли пробное занятие?', a: 'Да! Диагностика голоса — идеальный старт.' },
      ],
    },

    cta: {
      title: 'Готовы раскрыть свой голос?',
      subtitle: 'Запишитесь на диагностику голоса — и почувствуйте разницу, которую даёт осознанная работа с голосом.',
      cta1: 'Записаться на встречу',
      cta2: 'Выбрать формат',
    },
  },
};

/* ─── icon maps ─── */
const cardIconMap: Record<string, React.ReactNode> = {
  target: <Target className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
  gem: <Gem className="w-6 h-6" />,
  mic: <Mic className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  baby: <Baby className="w-6 h-6" />,
};

const packageIconMap: Record<string, React.ReactNode> = {
  stage: <Award className="w-7 h-7" />,
  headphones: <Headphones className="w-7 h-7" />,
  camera: <Camera className="w-7 h-7" />,
};

/* ─── component ─── */
export default function AdultsPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];

  return (
    <main className="bg-white/20 backdrop-blur-sm relative z-10 min-h-screen">
      {/* ═══════ HERO ═══════ */}
      <HeroSection
        title={t.hero.title}
        titleHighlight={t.hero.highlight}
        subtitle={t.hero.subtitle}
        image={IMG.hero}
        imageAlt="Alina"
        ctas={[
          { label: t.hero.cta1, href: '/book', isRoute: true },
          { label: t.hero.cta2, href: '/book', variant: 'secondary', isRoute: true },
        ]}
      />

      {/* ═══════ INTRO: SELF-PRESENTATION ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.intro.badge} title={t.intro.title} highlight={t.intro.highlight} badgeIcon={<Heart className="w-3.5 h-3.5" />} />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* image */}
            <Animated delay={100} className="hidden lg:block">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-tr from-primary-200 to-amber-200 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                  <img
                    src={IMG.coaching}
                    alt="Vocal coaching"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Angular decoration */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-2 border-primary-200/50 rotate-45" />
              </div>
            </Animated>
            <Animated delay={200}>
              <div className="space-y-5">
                <p className="text-gray-600 text-lg leading-relaxed">{t.intro.text}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{t.intro.text2}</p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* ═══════ FOR WHOM: 3 RICH CARDS ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.forWhom.badge} title={t.forWhom.title} highlight={t.forWhom.highlight} badgeIcon={<Users className="w-3.5 h-3.5" />} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.forWhom.cards.map((card, i) => (
              <Animated key={i} delay={i * 150}>
                <div className="premium-card p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-amber-50 flex items-center justify-center text-primary-600 mb-5">
                    {cardIconMap[card.icon]}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{card.desc}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FULL-WIDTH QUOTE BREAK ═══════ */}
      <section className="py-3 md:py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animated>
            <div className="relative rounded-3xl overflow-hidden shadow-xl group h-64 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-900/40 to-transparent z-10" />
              <img src={IMG.stage} alt="Stage presence" className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-1/2 left-8 md:left-12 -translate-y-1/2 z-20 max-w-md">
                <p className="text-xl md:text-2xl font-display font-bold leading-snug" style={{ color: '#FFFFFF' }}>
                  {lang === 'de' ? '«Die Stimme verrät, wer wir wirklich sind.»' : lang === 'ru' ? '«Голос раскрывает то, что невозможно выразить словами.»' : '"The voice reveals what words cannot express."'}
                </p>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32 z-10" style={{ background: 'linear-gradient(315deg, rgba(200,160,78,0.3) 0%, transparent 60%)' }} />
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ PRICING SECTION ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.pricing.badge} title={t.pricing.title} highlight={t.pricing.highlight} badgeIcon={<Mic className="w-3.5 h-3.5" />} />

          {/* Single lesson — hero pricing card */}
          <Animated delay={50}>
            <div className="pricing-hero-card p-8 md:p-10 mb-10 max-w-4xl mx-auto">
              <div className="pricing-shimmer absolute inset-0 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center shrink-0">
                    <Mic className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">{t.pricing.single.title}</h3>
                    <p className="text-gray-400 text-sm">{t.pricing.single.duration}</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="pricing-number font-display text-4xl md:text-5xl font-extrabold text-primary-700">{t.pricing.single.price.replace(/[^\d]/g, '')}</span>
                  <span className="text-lg text-gray-400 font-medium ml-1">CHF</span>
                </div>
              </div>
            </div>
          </Animated>

          {/* Subscriptions header */}
          <Animated delay={100}>
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">{t.pricing.subscriptions.title}</h3>
              <p className="text-gray-400 max-w-xl mx-auto">{t.pricing.subscriptions.subtitle}</p>
            </div>
          </Animated>

          {/* Subscription cards */}
          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto mb-8">
            {t.pricing.subscriptions.items.map((sub, i) => (
              <Animated key={i} delay={150 + i * 100}>
                <div className={`${i === 2 ? 'pricing-card-featured' : 'pricing-card'} p-7 h-full flex flex-col relative`}>
                  {/* Discount floating badge */}
                  <div className="pricing-discount">-{sub.discount}</div>

                  {/* Lessons ring */}
                  <div className="pricing-lessons-ring mx-auto mb-5 mt-2">
                    <span className="ring-number">{sub.lessons}</span>
                  </div>
                  <p className="text-[0.65rem] uppercase tracking-[0.15em] text-gray-300 font-semibold text-center mb-4">
                    {lang === 'de' ? 'Stunden' : lang === 'ru' ? 'занятий' : 'lessons'}
                  </p>

                  {/* Price */}
                  <div className="text-center mb-1">
                    <span className="pricing-number font-display text-3xl font-extrabold text-gray-900">{sub.price.replace(' CHF', '')}</span>
                    <span className="text-sm text-gray-300 font-medium ml-1">CHF</span>
                  </div>
                  <p className="text-sm text-primary-500 font-medium text-center mb-4">{sub.perLesson}</p>

                  {/* Savings */}
                  <div className="mt-auto pt-4">
                    <div className="pricing-savings mx-auto w-fit">
                      <Gift className="w-3.5 h-3.5" />
                      <span>{lang === 'de' ? 'Sparen' : lang === 'ru' ? 'Экономия' : 'Save'} {sub.save}</span>
                    </div>
                  </div>
                </div>
              </Animated>
            ))}
          </div>

          <Animated delay={450}>
            <p className="text-center text-gray-300 text-sm">{t.pricing.subscriptions.note}</p>
          </Animated>
        </div>
      </section>

      {/* ═══════ PREMIUM PACKAGES ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.packages.badge} title={t.packages.title} highlight={t.packages.highlight} badgeIcon={<Award className="w-3.5 h-3.5" />} />

          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
            {t.packages.items.map((pkg, i) => (
              <Animated key={i} delay={i * 120}>
                <div className="package-card p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-amber-50 flex items-center justify-center text-primary-600 mb-5">
                    {packageIconMap[pkg.icon]}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{pkg.desc}</p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="pricing-number font-display text-2xl font-extrabold text-gray-900">{pkg.price.replace(' CHF', '').replace('/Std.', '').replace('/Tag', '')}</span>
                    <span className="text-sm text-gray-300 font-medium">CHF{pkg.price.includes('/') ? '/' + pkg.price.split('/').pop() : ''}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{pkg.bonus}</p>
                </div>
              </Animated>
            ))}
          </div>

          {/* Online course teaser */}
          <Animated delay={400}>
            <div className="coming-soon-card p-7 max-w-xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-xs uppercase tracking-[0.15em] font-semibold text-amber-600">
                  {lang === 'de' ? 'Demnächst' : lang === 'ru' ? 'Скоро' : 'Coming soon'}
                </span>
              </div>
              <h4 className="font-display text-lg font-bold text-gray-900 mb-1">{t.packages.online.title}</h4>
              <p className="text-gray-400 text-sm mb-3">{t.packages.online.desc}</p>
              <div className="inline-flex items-baseline gap-1 bg-amber-50 px-4 py-2 rounded-full">
                <span className="pricing-number font-display text-xl font-bold text-amber-700">{t.packages.online.price.replace(' CHF', '')}</span>
                <span className="text-xs text-amber-400 font-medium">CHF</span>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ BREATHWORK IMAGE BREAK ═══════ */}
      <section className="py-3 md:py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animated>
            <div className="relative rounded-3xl overflow-hidden shadow-xl group h-52">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent z-10" />
              <img src={IMG.breathwork} alt="Breathwork" className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-primary-700 shadow-lg">
                  <Volume2 className="w-4 h-4 inline mr-2" />
                  {lang === 'de' ? 'Atem & Klang' : lang === 'ru' ? 'Дыхание и звук' : 'Breath & Sound'}
                </span>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ WHY DIFFERENT: PHILOSOPHY BLOCKS ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.whyDifferent.badge} title={t.whyDifferent.title} highlight={t.whyDifferent.highlight} badgeIcon={<Shield className="w-3.5 h-3.5" />} />
          <div className="grid md:grid-cols-3 gap-6">
            {t.whyDifferent.blocks.map((block, i) => (
              <Animated key={i} delay={i * 120}>
                <div className="featured-card p-7 h-full text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-amber-100 flex items-center justify-center text-primary-600 mx-auto mb-5">
                    {i === 0 ? <Mic className="w-7 h-7" /> : i === 1 ? <Shield className="w-7 h-7" /> : <Heart className="w-7 h-7" />}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{block.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{block.text}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.faq.badge} title={t.faq.title} highlight={t.faq.highlight} />
          <div className="space-y-3">
            {t.faq.items.map((item, i) => (
              <Animated key={i} delay={i * 80}><FaqItem q={item.q} a={item.a} /></Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animated>
            <div className="featured-card p-10 md:p-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.cta.title}</h2>
              <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">{t.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/book" className="btn-primary text-lg">{t.cta.cta1}<ArrowRight className="w-5 h-5" /></Link>
                <Link to="/book" className="btn-secondary text-lg">{t.cta.cta2}<ArrowRight className="w-5 h-5" /></Link>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </main>
  );
}

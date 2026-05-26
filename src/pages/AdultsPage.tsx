import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import {
  ArrowRight, CheckCircle2, Gem, Heart, Target,
  Mic, Users, Sparkles, Award, Shield, Play,
  Zap, Brain, Music, Camera, Headphones,
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
          icon: 'mic',
          title: 'Führungskräfte & Redner',
          desc: 'Sie halten Vorträge, leiten Teams oder stehen vor Kunden. Ihre Stimme soll Kompetenz und Sicherheit ausstrahlen — ohne Anstrengung.',
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
        duration: '60 Min. / online oder vor Ort. Individueller 1:1 Gesangsunterricht – klassisch oder Pop/Crossover. Ziele definieren, Technik entwickeln, Repertoire aufbauen.',
      },
      subscriptions: {
        title: 'Abonnements',
        subtitle: 'Strukturierter Unterricht mit Fortschrittsbegleitung.',
        items: [
          { lessons: '5', price: '618 CHF', discount: '5%', perLesson: '123.60 CHF/Stunde', save: '32 CHF' },
          { lessons: '10', price: '1\'170 CHF', discount: '10%', perLesson: '117 CHF/Stunde', save: '130 CHF' },
          { lessons: '20', price: '2\'080 CHF', discount: '20%', perLesson: '104 CHF/Stunde', save: '520 CHF' },
        ],
        note: 'Monats- und Jahresabonnements verfügbar.',
      },
    },

    /* ── packages ── */
    packages: {
      badge: 'Pakete',
      title: 'Zusätzliche',
      highlight: 'Angebote',
      items: [
        {
          icon: 'stage',
          title: 'Vorbereitung Bühne & Wettbewerbe',
          desc: 'Repertoire, Bühnenpräsenz, Mikrofon, Image, mentale Vorbereitung.',
          price: '300 CHF',
          bonus: '10 Lektionen Abo – 50% Rabatt | 20 Lektionen Abo – kostenlos',
        },
        {
          icon: 'headphones',
          title: 'Studioaufnahme',
          desc: 'Songauswahl, Vorbereitung, Organisation + Begleitung.',
          price: 'ab 150 CHF/Stunde',
          bonus: '10 Lektionen Abo – 25% Rabatt | 20 Lektionen Abo – 50% Rabatt',
        },
        {
          icon: 'camera',
          title: 'Videoclip-Produktion',
          desc: 'Konzept, Dreh, Schnitt.',
          price: 'nach Vereinbarung',
          bonus: '',
        },
      ],
      online: {
        title: 'Gruppenunterricht',
        desc: '3–6 Personen, Vocaltherapie. Abo ab 320 CHF',
        price: '40–60 CHF / Person',
      },
      events: {
        title: 'Events / Auftritte',
        desc: 'Solo / Duo / Band',
        price: 'nach Vereinbarung',
        bonus: '',
      },
      vouchers: {
        title: 'Gutscheine',
        desc: 'Verschenken Sie Freude an der Musik',
        price: 'ab 130 CHF',
      }
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
        { name: 'Sarah M.', role: 'Unternehmerin', text: 'Ich kam mit Heiserkeit nach Meetings. Nach 8 Wochen Atem- und Stimmtraining spreche ich den ganzen Tag ohne Anstrengung — mein Team hört mir anders zu.' },
        { name: 'Andreas W.', role: 'Manager', text: 'Vor dem Coaching haben meine Hände bei Präsentationen gezittert. Jetzt halte ich Vorträge vor 100 Leuten — ruhig, klar und mit Freude daran.' },
        { name: 'Elena D.', role: 'Künstlerin', text: 'Meine Stimme brach bei hohen Tönen immer ab. Nach einem halben Jahr singe ich sauber über zwei Oktaven — und traue mich endlich auf die Bühne.' },
        { name: 'Michael B.', role: 'Expat', text: 'Ich kam ohne jede Gesangserfahrung. Nach 10 Stunden singe ich eigene Songs auf Open-Mic-Abenden — meine Frau hat geweint vor Freude.' },
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
          icon: 'mic',
          title: 'Leaders & Public Speakers',
          desc: 'You give presentations, lead teams or face clients. Your voice should project competence and confidence — effortlessly.',
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
        duration: '60 min / online or onsite. Individual 1:1 vocal lesson – classical or pop/crossover. Define goals, develop technique, build repertoire.',
      },
      subscriptions: {
        title: 'Subscriptions',
        subtitle: 'Structured lessons with progress monitoring.',
        items: [
          { lessons: '5', price: '618 CHF', discount: '5%', perLesson: '123.60 CHF/session', save: '32 CHF' },
          { lessons: '10', price: '1,170 CHF', discount: '10%', perLesson: '117 CHF/session', save: '130 CHF' },
          { lessons: '20', price: '2,080 CHF', discount: '20%', perLesson: '104 CHF/session', save: '520 CHF' },
        ],
        note: 'Monthly and annual subscriptions available.',
      },
    },

    packages: {
      badge: 'Packages',
      title: 'Additional',
      highlight: 'Offers',
      items: [
        {
          icon: 'stage',
          title: 'Stage & Competition Prep',
          desc: 'Repertoire, stage presence, microphone, image, mental preparation.',
          price: '300 CHF',
          bonus: '10 lessons sub – 50% discount | 20 lessons sub – free',
        },
        {
          icon: 'headphones',
          title: 'Studio Recording',
          desc: 'Song selection, preparation, organization + accompaniment.',
          price: 'from 150 CHF/hr',
          bonus: '10 lessons sub – 25% discount | 20 lessons sub – 50% discount',
        },
        {
          icon: 'camera',
          title: 'Music Video Shoot',
          desc: 'Concept, shooting, editing.',
          price: 'upon agreement',
          bonus: '',
        },
      ],
      online: {
        title: 'Group Lessons',
        desc: '3–6 people, vocal therapy. Sub from 320 CHF',
        price: '40–60 CHF / person',
      },
      events: {
        title: 'Events / Performances',
        desc: 'Solo / Duo / Band',
        price: 'upon agreement',
        bonus: '',
      },
      vouchers: {
        title: 'Vouchers',
        desc: 'Give the gift of music',
        price: 'from 130 CHF',
      }
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
        { name: 'Sarah M.', role: 'Entrepreneur', text: 'I came with hoarseness after meetings. After 8 weeks of breath and voice training, I speak all day without strain — my team listens to me differently now.' },
        { name: 'Andreas W.', role: 'Manager', text: 'Before coaching, my hands shook during presentations. Now I present to 100 people — calm, clear and actually enjoying it.' },
        { name: 'Elena D.', role: 'Artist', text: 'My voice used to break on high notes. After six months, I sing cleanly across two octaves — and finally dare to go on stage.' },
        { name: 'Michael B.', role: 'Expat', text: 'I came with zero singing experience. After 10 sessions, I perform my own songs at open-mic nights — my wife cried with joy.' },
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
      highlight: 'Вы думаете',
      subtitle: 'Голос раскрывает то, что невозможно выразить словами. Он отражает внутреннее состояние — и способен на него влиять.',
      cta1: 'Записаться',
      cta2: 'Запросить консультацию',
    },

    intro: {
      badge: 'Самопрезентация',
      title: 'Там, где заканчивается привычный урок вокала,',
      highlight: 'начинается моя работа',
      text: 'Опираясь на большой сценический опыт и обучение у выдающихся вокальных мастеров, я помогаю раскрыть голос как целостное выражение личности — обрести силу и внутреннюю свободу.',
      text2: 'Петь на сцене, говорить или просто звучать свободно — это путь к Вашему новому голосу.',
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
          icon: 'mic',
          title: 'Руководители и спикеры',
          desc: 'Вы выступаете, ведёте команды или работаете с клиентами. Ваш голос должен звучать уверенно и убедительно — без напряжения.',
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
        duration: '60 мин. / онлайн или офлайн. Индивидуальный 1:1 вокал – классика или поп/кроссовер. Постановка целей, развитие техники, подбор репертуара.',
      },
      subscriptions: {
        title: 'Абонементы',
        subtitle: 'Структурированные занятия с контролем прогресса.',
        items: [
          { lessons: '5', price: '618 CHF', discount: '5%', perLesson: '123.60 CHF/занятие', save: '32 CHF' },
          { lessons: '10', price: '1 170 CHF', discount: '10%', perLesson: '117 CHF/занятие', save: '130 CHF' },
          { lessons: '20', price: '2 080 CHF', discount: '20%', perLesson: '104 CHF/занятие', save: '520 CHF' },
        ],
        note: 'Месячные и годовые абонементы доступны.',
      },
    },

    packages: {
      badge: 'Пакеты',
      title: 'Дополнительные',
      highlight: 'предложения',
      items: [
        {
          icon: 'stage',
          title: 'Подготовка к сцене и конкурсам',
          desc: 'Подбор и подготовка репертуара, работа с микрофоном, сценическое мастерство, формирование артистического имиджа и уверенности на сцене.',
          price: '300 CHF',
          bonus: 'Абонемент на 10 уроков — скидка 50% | Абонемент на 20 уроков — бесплатно',
        },
        {
          icon: 'headphones',
          title: 'Запись в студии',
          desc: 'Выбор песни, подготовка, организация + сопровождение.',
          price: 'от 150 CHF/час',
          bonus: 'Абонемент на 10 уроков — скидка 25% | Абонемент на 20 уроков — скидка 50%',
        },
        {
          icon: 'camera',
          title: 'Съёмка видеоклипа',
          desc: 'Концепт, съёмка, монтаж.',
          price: 'по договоренности',
          bonus: '',
        },
      ],
      online: {
        title: 'Групповые занятия',
        desc: '3–6 человек, вокальная терапия. Абонемент от 320 CHF',
        price: '40–60 CHF / человек',
      },
      events: {
        title: 'Индивидуальные короткие видеоуроки',
        desc: 'Рекомендации для самостоятельных занятий дома и эффективной подготовки.',
        price: '3 урока — 300 CHF\n5 уроков — 500 CHF',
        bonus: 'Абонемент на 10 уроков — скидка 25% | Абонемент на 20 уроков — скидка 50%',
      },
      vouchers: {
        title: 'Подарочные сертификаты',
        desc: 'Подарите радость музыки',
        price: 'от 130 CHF',
      }
    },

    whyDifferent: {
      badge: 'Наш подход',
      title: 'Почему это не просто',
      highlight: 'уроки вокала',
      blocks: [
        { title: 'Голос = Личность', text: 'Ваш голос — это отражение Вашей личности. Вы развиваете голос целостно, в единстве с эмоциями, мягко раскрывая его потенциал и помогая обрести свободу самовыражения.' },
        { title: 'Уверенность и мастерство', text: 'Сильный голос рождается из уверенности и опоры. Мы помогаем обрести стабильность звучания, выразительность и свободу на сцене.' },
        { title: 'Пение, которое меняет жизнь', text: 'Когда голос раскрыт, меняется и самоощущение, и мир вокруг Вас. Я с радостью делюсь своим сценическим опытом, чтобы Вы могли раскрыться полностью.' },
      ],
    },

    reviews: {
      badge: 'Отзывы',
      title: 'Что говорят',
      highlight: 'наши клиенты',
      items: [
        { name: 'Сара М.', role: 'Предприниматель', text: 'Я пришла с хрипотой после совещаний. После 8 недель дыхательной и голосовой работы говорю весь день без усилий — команда слушает меня по-другому.' },
        { name: 'Андреас В.', role: 'Менеджер', text: 'До коучинга мои руки тряслись на презентациях. Теперь выступаю перед 100 людьми — спокойно, чётко и с удовольствием.' },
        { name: 'Елена Д.', role: 'Художница', text: 'Мой голос срывался на высоких нотах. Через полгода я чисто пою в диапазоне двух октав — и наконец выхожу на сцену.' },
        { name: 'Михаэль Б.', role: 'Экспат', text: 'Я пришёл без опыта пения. После 10 занятий пою свои песни на open-mic вечерах — жена плакала от радости.' },
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
        { q: 'На каком языке проходят занятия?', a: 'На немецком, английском и русском — в зависимости от Ваших потребностей.' },
        { q: 'Есть ли пробное занятие?', a: 'Да, идеально начать со знакомства с Вашим голосом и Вашими пожеланиями.' },
      ],
    },

    cta: {
      title: 'Готовы раскрыть свой голос?',
      subtitle: 'Запишитесь на первое пробное занятие — начните со знакомства с Вашим голосом и подходящим форматом работы.',
      cta1: 'Записаться на первое пробное занятие',
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
    <main className="relative z-10 min-h-screen">
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
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src={IMG.coaching}
                    alt="Vocal coaching"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
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
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3 min-h-[2lh] text-balance">{card.title}</h3>
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
              <img src={IMG.stage} alt="Stage presence" loading="lazy" decoding="async" className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-1000" />
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

      {/* ═══════ PRICING + PACKAGES (unified) ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.pricing.badge} title={t.pricing.title} highlight={t.pricing.highlight} badgeIcon={<Mic className="w-3.5 h-3.5" />} />

          {/* Row 1: Single + Online + Events */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Animated delay={100}>
              <div className="featured-card rounded-2xl p-7 h-full flex flex-col">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{t.pricing.single.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{t.pricing.single.duration}</p>
                <div className="font-display text-2xl font-bold gradient-text">{t.pricing.single.price}</div>
              </div>
            </Animated>
            <Animated delay={150}>
              <div className="premium-card rounded-2xl p-7 h-full flex flex-col">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{t.packages.online.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{t.packages.online.desc}</p>
                <div className="font-display text-2xl font-bold gradient-text">{t.packages.online.price}</div>
              </div>
            </Animated>
            <Animated delay={200}>
              <div className="premium-card rounded-2xl p-7 h-full flex flex-col">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{t.packages.events.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{t.packages.events.desc}</p>
                <div className="font-display text-2xl font-bold gradient-text whitespace-pre-line">{t.packages.events.price}</div>
                {t.packages.events.bonus && <p className="text-gray-400 text-xs leading-relaxed mt-2">{t.packages.events.bonus}</p>}
              </div>
            </Animated>
          </div>

          {/* Subscriptions header */}
          <Animated delay={100}>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">{t.pricing.subscriptions.title}</h3>
              <p className="text-gray-400 max-w-xl mx-auto">{t.pricing.subscriptions.subtitle}</p>
            </div>
          </Animated>

          {/* Row 2: Subscriptions */}
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {t.pricing.subscriptions.items.map((sub, i) => (
              <Animated key={i} delay={200 + i * 100}>
                <div className={`rounded-2xl p-7 h-full flex flex-col ${i === 2 ? 'featured-card ring-2 ring-primary-200' : 'premium-card'}`}>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{sub.lessons} {lang === 'de' ? 'Stunden' : lang === 'ru' ? 'занятий' : 'lessons'}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">{sub.perLesson}</p>
                  <div className="font-display text-2xl font-bold gradient-text">{sub.price}</div>
                  <p className="text-green-600 text-xs font-semibold mt-2">
                    {lang === 'de' ? 'Sparen' : lang === 'ru' ? 'Экономия' : 'Save'} {sub.save}
                  </p>
                </div>
              </Animated>
            ))}
          </div>

          <Animated delay={450}>
            <p className="text-center text-gray-400 text-sm mb-10">{t.pricing.subscriptions.note}</p>
          </Animated>

          {/* Row 3: Stage + Studio + Video */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {t.packages.items.map((pkg, i) => (
              <Animated key={i} delay={i * 120}>
                <div className="premium-card rounded-2xl p-7 h-full flex flex-col">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{pkg.desc}</p>
                  <div className="font-display text-2xl font-bold gradient-text">{pkg.price}</div>
                  {pkg.bonus && <p className="text-gray-400 text-xs leading-relaxed mt-2">{pkg.bonus}</p>}
                </div>
              </Animated>
            ))}
          </div>

          {/* Row 4: Vouchers */}
          <Animated delay={360}>
            <div className="premium-card rounded-2xl p-7 max-w-md mx-auto text-center">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{t.packages.vouchers.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.packages.vouchers.desc}</p>
              <div className="font-display text-2xl font-bold gradient-text">{t.packages.vouchers.price}</div>
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
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-3 min-h-[2lh] text-balance">{block.title}</h3>
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

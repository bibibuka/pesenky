import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import {
  ArrowRight, CheckCircle2, Heart, Baby, Music, Sparkles, Shield, Users, Star,
  Palette, Sun, Trophy, Mic, Eye, BookOpen
} from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import ReviewCarousel from '../components/ReviewCarousel';
import FaqItem from '../components/FaqItem';
import { getMediaImage } from '../utils/media';

/* ────── images ────── */
const IMG = {
  lesson: getMediaImage('kids/lesson') || '/images/placeholder.png',
  group: getMediaImage('kids/group') || '/images/placeholder.png',
  stage: getMediaImage('kids/stage') || '/images/placeholder.png',
};

/* ─── translations ─── */
const pageT = {
  de: {
    hero: {
      title: 'Vokale und kreative',
      highlight: 'Entwicklung für Kinder',
      subtitle: 'Behutsame Stimmarbeit, die Kindern hilft, ihre Stimme, Selbstsicherheit und Freude an der Musik zu entdecken.',
      cta1: 'Anfrage senden',
      cta2: 'Mehr erfahren',
    },

    /* ── section: intro story ── */
    intro: {
      badge: 'Unser Ansatz',
      title: 'Jede Stimme ist',
      highlight: 'einzigartig',
      text: 'Kinder haben eine natürliche Musikalität — sie summen, singen, spielen mit Klängen. Meine Aufgabe ist es, diesen natürlichen Impuls behutsam zu fördern und zu einer bewussten stimmlichen Fähigkeit zu entwickeln. Ohne Druck, ohne Leistungsdruck, aber mit klarer Methodik und viel Herz.',
      text2: 'In jeder Stunde verbinden wir spielerische Elemente mit professioneller Stimmarbeit. Das Ergebnis? Kinder, die sich trauen, ihre Stimme zu nutzen — auf der Bühne und im Alltag.',
    },

    /* ── section: who is it for (visual cards) ── */
    forWhom: {
      badge: 'Für wen',
      title: 'Für welche Kinder',
      highlight: 'das passt',
      cards: [
        {
          icon: 'baby',
          title: 'Kinder von 6 bis 16 Jahren',
          desc: 'Der Unterricht wird individuell an das Alter, die Entwicklung und das Temperament jedes Kindes angepasst.',
        },
        {
          icon: 'music',
          title: 'Kinder, die gerne singen',
          desc: 'Ob unter der Dusche, vor dem Spiegel oder einfach so — wenn Ihr Kind gerne singt, ist es hier richtig.',
        },
        {
          icon: 'eye',
          title: 'Schüchterne Kinder',
          desc: 'Gerade stille Kinder blühen hier auf. In einem sicheren Rahmen entdecken sie ihre Stärke.',
        },
        {
          icon: 'sparkles',
          title: 'Kreative Köpfe',
          desc: 'Kinder mit Fantasie und Freude am Ausdruck finden hier einen Raum, sich musikalisch zu entfalten.',
        },
      ],
    },

    /* ── section: what lessons give (image + text) ── */
    benefits: {
      badge: 'Vorteile',
      title: 'Was der Unterricht',
      highlight: 'Ihrem Kind gibt',
      items: [
        { icon: 'ear', title: 'Gehörbildung', desc: 'Die Kinder lernen, Töne zu unterscheiden, Melodien nachzusingen und ein feines Gespür für Rhythmus zu entwickeln.' },
        { icon: 'voice', title: 'Stimmliche Entfaltung', desc: 'Wir arbeiten sanft an Klangfarbe, Atem und Stütze — so, dass sich die Stimme frei und natürlich entwickeln kann.' },
        { icon: 'confidence', title: 'Selbstsicherheit', desc: 'Mit jeder Stunde wächst das Vertrauen in die eigene Stimme. Kinder lernen, sich auszudrücken — ohne Angst.' },
        { icon: 'calm', title: 'Ruhe bei Auftritten', desc: 'Lampenfieber wird zur Aufregung. Kinder lernen, Nervosität in positive Energie zu verwandeln.' },
        { icon: 'joy', title: 'Freude am Prozess', desc: 'Kein starrer Lehrplan, sondern lebendige Stunden mit Liedern, Spielen und kreativen Projekten.' },
      ],
    },

    /* ── section: how a lesson looks ── */
    lessonFlow: {
      badge: 'Eine Stunde',
      title: 'Wie eine Stunde',
      highlight: 'abläuft',
      intro: 'Jede Stunde ist eine kleine musikalische Reise — von der Vorbereitung des Körpers bis zum freudigen Abschluss.',
      steps: [
        { title: 'Ankommen & Aufwärmen', desc: 'Spielerische Atem- und Körperübungen, die Spannungen lösen und den Fokus schaffen.', time: '5–7 Min.' },
        { title: 'Stimmliche Arbeit', desc: 'Gezielte Übungen für Tonhöhe, Klangfarbe und Stütze — altersgerecht und mit Spaß.', time: '15–20 Min.' },
        { title: 'Lied & Ausdruck', desc: 'Arbeit an einem Lied: Text, Emotion, Bühnenpräsenz. Das Herzstück jeder Stunde.', time: '10–15 Min.' },
        { title: 'Kreatives Finale', desc: 'Improvisationsspiele, kleine Aufnahmen oder Arbeit an eigenen Songs.', time: '5–10 Min.' },
      ],
    },

    /* ── section: formats ── */
    formats: {
      badge: 'Formate',
      title: 'Unsere',
      highlight: 'Formate',
      items: [
        { title: 'Einzelunterricht', desc: 'Persönliche Stimmarbeit mit individuellem Fokus. Der Unterricht wird ganz auf das Kind abgestimmt: seine Ziele, sein Tempo, seine Lieblingslieder.', icon: 'mic', meta: '1:1 · 30–45 Min.' },
        { title: 'Mini-Gruppen', desc: 'Kleine Gruppen von 3–4 Kindern mit gemeinsamer Dynamik, gegenseitiger Motivation und jeder Menge Spaß.', icon: 'users', meta: '3–4 Kinder · 45 Min.' },
        { title: 'Auftrittsvorbereitung', desc: 'Gezielte Vorbereitung auf Bühnenauftritte: Mikrofon-Arbeit, Bühnenpräsenz, emotionaler Ausdruck und Umgang mit Lampenfieber.', icon: 'star', meta: 'Individuell' },
        { title: 'Kreative Vokalprojekte', desc: 'Eigene Songs schreiben, im Studio aufnehmen und als Erinnerung behalten — ein unvergessliches Erlebnis für jedes Kind.', icon: 'music', meta: 'Projekt-Format' },
        { title: 'Saisonale Masterclasses', desc: 'Kurze thematische Workshops in den Ferien: Musical, Filmmusik, Improvisation oder eigene Songs. Perfekt zum Reinschnuppern.', icon: 'sparkles', meta: 'Ferien-Workshops' },
      ],
    },

    /* ── section: pricing ── */
    pricing: {
      badge: 'Preise',
      title: 'Unsere',
      highlight: 'Preise',
      trial: { label: 'Kennenlern-Stunde', price: 'Kostenlos', desc: 'Erstes Treffen zum Kennenlernen, 20–30 Minuten' },
      single: { label: 'Einzelstunde', price: '90 CHF', desc: '30–45 Min. · individuell abgestimmt' },
      subscriptions: [
        { lessons: '5', price: '400 CHF', perLesson: '80 CHF / Stunde', badge: '', savings: '' },
        { lessons: '10', price: '750 CHF', perLesson: '75 CHF / Stunde', badge: 'Beliebt', savings: '' },
        { lessons: '20', price: '1\'400 CHF', perLesson: '70 CHF / Stunde', badge: 'Bester Preis', savings: '' },
      ],
      miniGroup: { label: 'Mini-Gruppe (3–4 Kinder)', price: '60 CHF', desc: 'pro Kind · 45 Min.' },
      note: 'Alle Preise inkl. MwSt. Geschwister-Rabatt verfügbar.',
    },

    /* ── section: for parents ── */
    forParents: {
      badge: 'Für Eltern',
      title: 'Was Eltern',
      highlight: 'wissen sollten',
      blocks: [
        {
          icon: 'shield',
          title: 'Sicherheit der Stimme',
          text: 'Die kindliche Stimme ist empfindlich. Deshalb arbeite ich ausschließlich mit Methoden, die die Stimme schützen und nie überlasten. Kein Schreien, kein Forcieren — nur sanfte, gesunde Stimmbildung.',
        },
        {
          icon: 'heart',
          title: 'Emotionale Entwicklung',
          text: 'Singen ist weit mehr als Technik. Kinder lernen, Emotionen auszudrücken, sich in einer Gruppe zu behaupten und stolz auf ihre Fortschritte zu sein. Viele Eltern bemerken eine positive Veränderung im Alltag.',
        },
        {
          icon: 'book',
          title: 'Transparenter Prozess',
          text: 'Sie erhalten regelmäßig Feedback und können den Fortschritt Ihres Kindes mitverfolgen. Bei Fragen bin ich immer erreichbar — eine offene Kommunikation ist mir wichtig.',
        },
      ],
      extras: ['Mehr Selbstvertrauen im Alltag', 'Bessere Konzentrationsfähigkeit', 'Emotionale Offenheit und Reife', 'Freude am kreativen Selbstausdruck'],
    },

    reviews: {
      badge: 'Eltern erzählen',
      title: 'Was Eltern',
      highlight: 'sagen',
      items: [
        { name: 'Anna K.', role: 'Mutter von Lena (9)', text: 'Lena war sehr schüchtern. Jetzt singt sie fröhlich vor der ganzen Familie. Eine wunderbare Veränderung, die weit über das Singen hinausgeht.' },
        { name: 'Marco S.', role: 'Vater von Tim (12)', text: 'Tim hat hier nicht nur Singen gelernt, sondern auch gelernt, vor anderen aufzutreten. Seine Schüchternheit hat sich in Bühnenpräsenz verwandelt.' },
        { name: 'Julia R.', role: 'Mutter von Sophia (7)', text: 'Der behutsame Ansatz hat mich überzeugt. Sophia liebt jede Stunde und freut sich die ganze Woche darauf. Endlich etwas, das ihr wirklich Spaß macht.' },
      ],
    },

    faq: {
      badge: 'FAQ',
      title: 'Häufig gestellte',
      highlight: 'Fragen',
      items: [
        { q: 'Ab welchem Alter kann man anfangen?', a: 'Ab 6 Jahren. Jüngere Kinder nach individueller Absprache — manchmal ist ein Kind mit 5 schon bereit, manchmal braucht es noch Zeit.' },
        { q: 'Braucht mein Kind Erfahrung?', a: 'Nein, absolute Anfänger:innen sind willkommen. Wir starten dort, wo das Kind steht, und bauen Schritt für Schritt auf.' },
        { q: 'Was, wenn mein Kind sehr schüchtern ist?', a: 'Gerade dann! Der geschützte Rahmen hilft Kindern, sich zu öffnen. Viele der schüchternsten Kinder blühen hier besonders auf.' },
        { q: 'Gibt es Auftritte?', a: 'Ja, aber nur wenn das Kind bereit ist und Freude daran hat. Kein Kind wird auf die Bühne gedrängt.' },
        { q: 'Wie lange dauert eine Stunde?', a: '30–45 Minuten, je nach Alter und Konzentrationsfähigkeit. Für die Kleinsten reichen oft 30 Minuten.' },
        { q: 'Gibt es eine Probestunde?', a: 'Ja! Die erste Kennenlern-Stunde ist der perfekte Einstieg. Dabei lernen wir uns kennen und ich kann einschätzen, was Ihr Kind braucht.' },
      ],
    },

    cta: {
      title: 'Möchten Sie Ihr Kind anmelden?',
      subtitle: 'Buchen Sie eine kostenlose Kennenlern-Stunde — und erleben Sie, wie Ihr Kind musikalisch aufblüht.',
      cta: 'Kind anmelden',
    },
  },

  en: {
    hero: {
      title: 'Vocal and creative',
      highlight: 'development for kids',
      subtitle: 'Gentle vocal work that helps children discover their voice, confidence and love of music.',
      cta1: 'Submit Inquiry',
      cta2: 'Learn More',
    },

    intro: {
      badge: 'Our Approach',
      title: 'Every voice is',
      highlight: 'unique',
      text: 'Children have a natural musicality — they hum, sing, play with sounds. My task is to gently nurture this natural impulse and develop it into a conscious vocal skill. Without pressure, without performance anxiety, but with clear methodology and a lot of heart.',
      text2: 'In every session, we combine playful elements with professional vocal work. The result? Children who dare to use their voice — on stage and in everyday life.',
    },

    forWhom: {
      badge: 'For Whom',
      title: 'Which children',
      highlight: 'this is for',
      cards: [
        { icon: 'baby', title: 'Children ages 6 to 16', desc: 'Lessons are individually adapted to each child\'s age, development and temperament.' },
        { icon: 'music', title: 'Kids who love to sing', desc: 'In the shower, in front of the mirror or just because — if your child loves to sing, this is the right place.' },
        { icon: 'eye', title: 'Shy children', desc: 'Especially quiet children bloom here. In a safe environment, they discover their inner strength.' },
        { icon: 'sparkles', title: 'Creative minds', desc: 'Children with imagination and a love of expression find a space here to unfold musically.' },
      ],
    },

    benefits: {
      badge: 'Benefits',
      title: 'What lessons',
      highlight: 'give your child',
      items: [
        { icon: 'ear', title: 'Ear training', desc: 'Children learn to distinguish tones, sing melodies and develop a fine sense of rhythm.' },
        { icon: 'voice', title: 'Vocal development', desc: 'We work gently on timbre, breath and support — so the voice can develop freely and naturally.' },
        { icon: 'confidence', title: 'Self-confidence', desc: 'With every session, trust in their own voice grows. Children learn to express themselves — without fear.' },
        { icon: 'calm', title: 'Composure on stage', desc: 'Stage fright becomes excitement. Children learn to transform nervousness into positive energy.' },
        { icon: 'joy', title: 'Joy in the process', desc: 'No rigid curriculum, but lively sessions with songs, games and creative projects.' },
      ],
    },

    lessonFlow: {
      badge: 'A Session',
      title: 'How a lesson',
      highlight: 'unfolds',
      intro: 'Every session is a small musical journey — from preparing the body to a joyful conclusion.',
      steps: [
        { title: 'Arrival & Warm-up', desc: 'Playful breathing and body exercises that release tension and create focus.', time: '5–7 min' },
        { title: 'Vocal Work', desc: 'Targeted exercises for pitch, timbre and support — age-appropriate and fun.', time: '15–20 min' },
        { title: 'Song & Expression', desc: 'Working on a song: lyrics, emotion, stage presence. The heart of every session.', time: '10–15 min' },
        { title: 'Creative Finale', desc: 'Improvisation games, small recordings or work on original songs.', time: '5–10 min' },
      ],
    },

    formats: {
      badge: 'Formats',
      title: 'Our',
      highlight: 'formats',
      items: [
        { title: 'Individual Lessons', desc: 'Personal voice work with individual focus. Each lesson is tailored to the child: their goals, pace and favorite songs.', icon: 'mic', meta: '1:1 · 30–45 min' },
        { title: 'Mini Groups', desc: 'Small groups of 3–4 children with shared dynamics, mutual motivation and lots of fun.', icon: 'users', meta: '3–4 kids · 45 min' },
        { title: 'Performance Prep', desc: 'Targeted preparation for stage performances: microphone work, stage presence, emotional expression and handling stage fright.', icon: 'star', meta: 'Individual' },
        { title: 'Creative Vocal Projects', desc: 'Write original songs, record them in a studio and keep them as a memory — an unforgettable experience for every child.', icon: 'music', meta: 'Project format' },
        { title: 'Seasonal Masterclasses', desc: 'Short themed workshops during school holidays: musical, film music, improvisation or original songs. Perfect for trying out.', icon: 'sparkles', meta: 'Holiday workshops' },
      ],
    },

    pricing: {
      badge: 'Pricing',
      title: 'Our',
      highlight: 'Prices',
      trial: { label: 'Introductory Session', price: 'Free', desc: 'First meeting to get to know each other, 20–30 minutes' },
      single: { label: 'Single Lesson', price: '90 CHF', desc: '30–45 min · individually tailored' },
      subscriptions: [
        { lessons: '5', price: '400 CHF', perLesson: '80 CHF / lesson', badge: '', savings: '' },
        { lessons: '10', price: '750 CHF', perLesson: '75 CHF / lesson', badge: 'Popular', savings: '' },
        { lessons: '20', price: '1\'400 CHF', perLesson: '70 CHF / lesson', badge: 'Best Value', savings: '' },
      ],
      miniGroup: { label: 'Mini Group (3–4 kids)', price: '60 CHF', desc: 'per child · 45 min' },
      note: 'All prices incl. VAT. Sibling discounts available.',
    },

    forParents: {
      badge: 'For Parents',
      title: 'What parents',
      highlight: 'should know',
      blocks: [
        { icon: 'shield', title: 'Voice safety', text: 'Children\'s voices are delicate. That\'s why I only use methods that protect the voice and never overload it. No shouting, no forcing — only gentle, healthy voice training.' },
        { icon: 'heart', title: 'Emotional development', text: 'Singing is so much more than technique. Children learn to express emotions, assert themselves in a group and be proud of their progress. Many parents notice positive changes in everyday life.' },
        { icon: 'book', title: 'Transparent process', text: 'You receive regular feedback and can follow your child\'s progress. I\'m always available for questions — open communication is important to me.' },
      ],
      extras: ['More self-confidence in daily life', 'Better concentration', 'Emotional openness and maturity', 'Joy of creative self-expression'],
    },

    reviews: {
      badge: 'Parents share',
      title: 'What parents',
      highlight: 'say',
      items: [
        { name: 'Anna K.', role: 'Mother of Lena (9)', text: 'Lena was very shy. Now she sings happily in front of the whole family. A wonderful transformation that goes far beyond singing.' },
        { name: 'Marco S.', role: 'Father of Tim (12)', text: 'Tim didn\'t just learn to sing here — he learned to perform in front of others. His shyness turned into stage presence.' },
        { name: 'Julia R.', role: 'Mother of Sophia (7)', text: 'The gentle approach won me over. Sophia loves every lesson and looks forward to it all week. Finally something she truly enjoys.' },
      ],
    },

    faq: {
      badge: 'FAQ',
      title: 'Frequently asked',
      highlight: 'questions',
      items: [
        { q: 'What age can children start?', a: 'From age 6. Younger children by individual arrangement — sometimes a child is ready at 5, sometimes they need more time.' },
        { q: 'Does my child need experience?', a: 'No, absolute beginners are welcome. We start where the child is and build up step by step.' },
        { q: 'What if my child is very shy?', a: 'Especially then! The safe environment helps children open up. Many of the shyest children bloom here the most.' },
        { q: 'Are there performances?', a: 'Yes, but only when the child is ready and enjoys it. No child is pushed onto the stage.' },
        { q: 'How long is a session?', a: '30–45 minutes, depending on age and concentration ability. For the youngest, 30 minutes is often enough.' },
        { q: 'Is there a trial lesson?', a: 'Yes! An introductory session is the perfect start. We get to know each other and I can assess what your child needs.' },
      ],
    },

    cta: {
      title: 'Want to enroll your child?',
      subtitle: 'Book a free introductory session — and watch your child blossom musically.',
      cta: 'Enroll Child',
    },
  },

  ru: {
    hero: {
      title: 'Вокал и творческое',
      highlight: 'развитие для детей',
      subtitle: 'Бережные занятия, которые помогают раскрыть голос, уверенность и любовь к музыке.',
      cta1: 'Оставить заявку',
      cta2: 'Узнать больше',
    },

    intro: {
      badge: 'Наш подход',
      title: 'Каждый голос',
      highlight: 'уникален',
      text: 'Дети от природы музыкальны — они напевают, играют со звуками, поют просто так. Моя задача — бережно развивать этот природный импульс и превращать его в осознанный навык. Без давления, без страха перед ошибками, но с чёткой методикой и большой любовью к процессу.',
      text2: 'На каждом занятии мы соединяем игровые элементы с профессиональной вокальной работой. Результат? Дети, которые не боятся владеть своим голосом — и на сцене, и в жизни.',
    },

    forWhom: {
      badge: 'Для кого',
      title: 'Каким детям',
      highlight: 'подходят занятия',
      cards: [
        { icon: 'baby', title: 'Дети от 6 до 16 лет', desc: 'Уроки адаптируются под возраст, развитие и темперамент каждого ребёнка индивидуально.' },
        { icon: 'music', title: 'Дети, которые любят петь', desc: 'Если Ваш ребенок часто поет про себя или перед зеркалом, мы с радостью поддержим его дальнейшее музыкальное развитие.' },
        { icon: 'eye', title: 'Застенчивые дети', desc: 'В дружелюбной атмосфере даже самые застенчивые дети начинают раскрываться. Через пение они обретают уверенность, радость, самовыражение и внутреннюю силу.' },
        { icon: 'sparkles', title: 'Творческие натуры', desc: 'Харизматичные дети и дети с ярким стремлением к самовыражению найдут пространство для раскрытия своего потенциала, творческой и сценической индивидуальности.' },
      ],
    },

    benefits: {
      badge: 'Польза',
      title: 'Что дают',
      highlight: 'занятия',
      items: [
        { icon: 'ear', title: 'Развитие музыкальности', desc: 'Дети развивают слух и чувство ритма.' },
        { icon: 'voice', title: 'Раскрытие голоса', desc: 'Бережная работа над тембром и дыханием так, чтобы голос развивался свободно и естественно.' },
        { icon: 'confidence', title: 'Уверенность', desc: 'С каждым занятием растет доверие к своему голосу, дети учатся выражать себя без страха.' },
        { icon: 'calm', title: 'Волнение превращается в потенциал', desc: 'Дети учатся управлять волнением и концентрироваться перед выступлением.' },
        { icon: 'joy', title: 'Радость от процесса', desc: 'Вдохновляющая творческая атмосфера, где каждый ребенок с радостью открывает для себя мир музыки.' },
      ],
    },

    lessonFlow: {
      badge: 'Занятие',
      title: 'Как проходит',
      highlight: 'урок',
      intro: 'Каждое занятие — это маленькое музыкальное путешествие.',
      steps: [
        { title: 'Разминка', desc: 'Упражнения для дыхания, дикции и красивого звучания голоса в игровой форме.', time: '5–7 мин.' },
        { title: 'Вокальная работа', desc: 'Подготовка к песне специальными вокальными упражнениями — по возрасту и с удовольствием.', time: '15–20 мин.' },
        { title: 'Репертуар', desc: 'Учимся проживать песню через текст, эмоцию, смысл и свое отношение и свое видение песни.', time: '10–15 мин.' },
        { title: 'Творческий финал', desc: 'Подведение итогов урока, повторение пройденного материала и небольшие творческие задания для самостоятельной практики.', time: '5–10 мин.' },
      ],
    },

    formats: {
      badge: 'Форматы',
      title: 'Наши',
      highlight: 'форматы',
      items: [
        { title: 'Индивидуальные уроки', desc: 'Персональная работа с голосом. Урок полностью подстроен под ребёнка: его цели, темп, любимые песни.', icon: 'mic', meta: '1:1 · 30–45 мин. и 1 час' },
        { title: 'Мини-группы', desc: 'Маленькие группы из 3–4 детей с общей динамикой, взаимной мотивацией и кучей веселья.', icon: 'users', meta: '3–4 ребёнка · 45 мин.' },
        { title: 'Культурные проекты', desc: 'Индивидуальные или групповые занятия, участие ребёнка в текущем творческом проекте.', icon: 'star', meta: 'Индивидуально / группа' },
        { title: 'Своя песня на память', desc: 'Написать свою песню, записать её в студии и оставить на память — незабываемый опыт для каждого ребёнка.', icon: 'music', meta: 'Проектный формат' },
        { title: 'Сезонные мастер-классы', desc: 'Короткие тематические воркшопы на каникулах.', icon: 'sparkles', meta: 'Каникулярные воркшопы' },
      ],
    },

    pricing: {
      badge: 'Цены',
      title: 'Наши',
      highlight: 'цены',
      trial: { label: 'Знакомство', price: 'Бесплатно', desc: 'Первая встреча, 20–30 минут' },
      single: { label: 'Разовое занятие', price: 'от 65 CHF', desc: '30–45 мин. · индивидуально' },
      subscriptions: [
        { lessons: '5', price: '450 CHF', perLesson: '90 CHF / занятие', badge: '', savings: 'Экономия 25 CHF (−5%)' },
        { lessons: '10', price: '855 CHF', perLesson: '85.50 CHF / занятие', badge: 'Популярно', savings: 'Экономия 95 CHF (−10%)' },
        { lessons: '20', price: '1\'520 CHF', perLesson: '76 CHF / занятие', badge: 'Лучшая цена', savings: 'Экономия 380 CHF (−20%)' },
      ],
      miniGroup: { label: 'Мини-группа (3–4 ребёнка)', price: '60 CHF', desc: 'за ребёнка · 45 мин.' },
      note: 'Все цены вкл. НДС. Для детей до 25 лет из кантона Шаффхаузен — занятия по специальным субвенционным ценам. Подробности уточняйте лично.',
    },

    forParents: {
      badge: 'Для родителей',
      title: 'Что важно знать',
      highlight: 'родителям',
      blocks: [
        { icon: 'shield', title: 'Безопасность голоса', text: 'Детский голос хрупок. Поэтому я использую только методы, которые защищают голос и никогда не перегружают его. Никакого крика, никакого форсирования — только бережная, здоровая постановка голоса.' },
        { icon: 'heart', title: 'Эмоциональное развитие', text: 'Пение — это гораздо больше, чем просто техника вокала. Дети учатся выражать эмоции, отстаивать своё мнение и гордиться своими успехами. Многие родители замечают позитивные изменения в повседневной жизни ребёнка.' },
        { icon: 'book', title: 'Прозрачный процесс', text: 'Вы будете получать регулярную обратную связь и сможете следить за прогрессом ребенка. Я всегда на связи для любых Ваших вопросов — в тандеме с родителями поддерживаю путь ребенка к его мечте.' },
      ],
      extras: ['Больше уверенности в жизни', 'Лучше концентрация', 'Эмоциональная открытость и зрелость', 'Радость от творческого самовыражения'],
    },

    reviews: {
      badge: 'Родители рассказывают',
      title: 'Что говорят',
      highlight: 'родители',
      items: [
        { name: 'Анна К.', role: 'Мама Лены (9 лет)', text: 'Лена была очень застенчивой. Теперь поёт перед всей семьёй. Чудесное преображение, которое выходит далеко за рамки пения.' },
        { name: 'Марко С.', role: 'Папа Тима (12 лет)', text: 'Тим научился не только петь, но и выступать перед другими. Его стеснительность превратилась в сценическое присутствие.' },
        { name: 'Юлия Р.', role: 'Мама Софии (7 лет)', text: 'Бережный подход покорил меня. София обожает каждое занятие и ждёт его всю неделю. Наконец-то что-то, что ей по-настоящему нравится.' },
      ],
    },

    faq: {
      badge: 'FAQ',
      title: 'Часто задаваемые',
      highlight: 'вопросы',
      items: [
        { q: 'С какого возраста можно начать?', a: 'С 6 лет. Младшие дети — по индивидуальной договорённости. Иногда ребёнок готов в 5, иногда нужно чуть подождать.' },
        { q: 'Нужен ли опыт?', a: 'Нет. Мы начинаем с того, что уже умеет ребенок, и шаг за шагом помогаем раскрыть его потенциал.' },
        { q: 'Если ребёнок стесняется?', a: 'Бережная и дружелюбная атмосфера помогает раскрыться каждому ребенку. Часто именно самые застенчивые дети особенно ярко расцветают в творчестве.' },
        { q: 'Есть ли выступления?', a: 'Да. Если ребенок сам готов и ему это в радость.' },
        { q: 'Сколько длится занятие?', a: '30–45 минут, 1 час. В зависимости от возраста. Для самых маленьких часто достаточно 30 минут.' },
        { q: 'Есть ли пробное занятие?', a: 'Первое знакомство — лучший старт. Здесь я знакомлюсь с ребенком, его желаниями и запросами, слушаю голос и подбираю индивидуальную программу.' },
      ],
    },

    cta: {
      title: 'Хотите записать ребёнка?',
      subtitle: 'Запишитесь на пробное занятие.',
      cta: 'Записать ребёнка',
    },
  },
};

/* ─── icon maps ─── */
const cardIcons: Record<string, React.ReactNode> = {
  baby: <Baby className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
  eye: <Eye className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
};

const benefitIcons: Record<string, React.ReactNode> = {
  ear: <Music className="w-6 h-6" />,
  voice: <Mic className="w-6 h-6" />,
  confidence: <Trophy className="w-6 h-6" />,
  calm: <Sun className="w-6 h-6" />,
  joy: <Heart className="w-6 h-6" />,
};

const formatIcons: Record<string, React.ReactNode> = {
  mic: <Mic className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
};

const parentIcons: Record<string, React.ReactNode> = {
  shield: <Shield className="w-7 h-7" />,
  heart: <Heart className="w-7 h-7" />,
  book: <BookOpen className="w-7 h-7" />,
};

/* ─── component ─── */
export default function KidsPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];

  return (
    <main className="relative z-10 min-h-screen">
      {/* ═══════ HERO ═══════ */}
      <HeroSection
        title={t.hero.title}
        titleHighlight={t.hero.highlight}
        subtitle={t.hero.subtitle}
        image={getMediaImage('kids/hero') || "/images/placeholder.png"}
        imageAlt="Kids vocal"
        ctas={[
          { label: t.hero.cta1, href: '/book', isRoute: true },
          { label: t.hero.cta2, href: '#formats', variant: 'secondary' },
        ]}
      />

      {/* ═══════ INTRO: STORY + IMAGE ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.intro.badge} title={t.intro.title} highlight={t.intro.highlight} badgeIcon={<Heart className="w-3.5 h-3.5" />} />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Animated delay={100}>
              <div className="space-y-5">
                <p className="text-gray-600 text-lg leading-relaxed">{t.intro.text}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{t.intro.text2}</p>
              </div>
            </Animated>
            <Animated delay={300} className="hidden lg:block">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src={IMG.lesson}
                    alt="Kids vocal lesson"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* ═══════ FOR WHOM: VISUAL CARDS ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.forWhom.badge} title={t.forWhom.title} highlight={t.forWhom.highlight} badgeIcon={<Baby className="w-3.5 h-3.5" />} />
          <div className="grid sm:grid-cols-2 gap-6">
            {t.forWhom.cards.map((card, i) => (
              <Animated key={i} delay={i * 120}>
                <div className="premium-card rounded-2xl p-7 h-full flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                    {cardIcons[card.icon]}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{card.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BENEFITS: IMAGE + ITEMS ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.benefits.badge} title={t.benefits.title} highlight={t.benefits.highlight} badgeIcon={<Sparkles className="w-3.5 h-3.5" />} />

          {/* full-width image banner */}
          <Animated delay={50}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl mb-10 group h-64 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <img src={IMG.group} alt="Kids singing group" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary-700 shadow-lg">
                  <Music className="w-4 h-4 inline mr-2" />
                  {lang === 'de' ? 'Gemeinsam wachsen' : lang === 'ru' ? 'Расти вместе' : 'Growing together'}
                </span>
              </div>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-6">
            {t.benefits.items.map((item, i) => (
              <Animated
                key={i}
                delay={i * 100}
                className={[
                  'sm:col-span-1 lg:col-span-4',
                  t.benefits.items.length % 3 === 2 && i === t.benefits.items.length - 2 ? 'lg:col-start-3' : '',
                  t.benefits.items.length % 3 === 2 && i === t.benefits.items.length - 1 ? 'lg:col-start-7' : '',
                ].join(' ')}
              >
                <div className="premium-card rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center text-green-500 mb-4">
                    {benefitIcons[item.icon]}
                  </div>
                  <h3 className="font-display text-base font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LESSON FLOW: TIMELINE ═══════ */}
      <section className="py-5 md:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.lessonFlow.badge} title={t.lessonFlow.title} highlight={t.lessonFlow.highlight} badgeIcon={<Sun className="w-3.5 h-3.5" />} />
          <Animated delay={50}>
            <p className="text-center text-gray-500 text-lg mb-10 -mt-8 max-w-2xl mx-auto">{t.lessonFlow.intro}</p>
          </Animated>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-pink-200 to-amber-200 hidden sm:block" />
            <div className="space-y-6">
              {t.lessonFlow.steps.map((step, i) => (
                <Animated key={i} delay={i * 120}>
                  <div className="flex gap-5 sm:gap-8 items-start">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-pink-400 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">
                      {i + 1}
                    </div>
                    <div className="premium-card rounded-2xl p-6 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-lg font-bold text-gray-900">{step.title}</h3>
                        <span className="text-xs text-primary-500 font-semibold bg-primary-50 px-3 py-1 rounded-full">{step.time}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FORMATS ═══════ */}
      <section id="formats" className="py-5 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.formats.badge} title={t.formats.title} highlight={t.formats.highlight} badgeIcon={<Palette className="w-3.5 h-3.5" />} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
            {t.formats.items.map((f, i) => (
              <Animated
                key={i}
                delay={i * 100}
                className={[
                  'sm:col-span-1 lg:col-span-4',
                  t.formats.items.length % 3 === 2 && i === t.formats.items.length - 2 ? 'lg:col-start-3' : '',
                  t.formats.items.length % 3 === 2 && i === t.formats.items.length - 1 ? 'lg:col-start-7' : '',
                ].join(' ')}
              >
                <div className="package-card p-7 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-pink-50 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-105 transition-transform">
                    {formatIcons[f.icon]}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-1 min-h-[2lh] text-balance">{f.title}</h3>
                  <span className="inline-flex w-fit items-center text-[0.65rem] text-primary-500 font-semibold uppercase tracking-[0.12em] bg-primary-50 px-3 py-1 rounded-full mb-3">{f.meta}</span>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{f.desc}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.pricing.badge} title={t.pricing.title} highlight={t.pricing.highlight} badgeIcon={<Star className="w-3.5 h-3.5" />} />

          {/* Trial + Single + Mini-group */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Animated delay={100}>
              <div className="featured-card rounded-2xl p-7 h-full flex flex-col">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{t.pricing.trial.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{t.pricing.trial.desc}</p>
                <div className="font-display text-2xl font-bold gradient-text">{t.pricing.trial.price}</div>
              </div>
            </Animated>
            <Animated delay={150}>
              <div className="premium-card rounded-2xl p-7 h-full flex flex-col">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{t.pricing.single.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{t.pricing.single.desc}</p>
                <div className="font-display text-2xl font-bold gradient-text">{t.pricing.single.price}</div>
              </div>
            </Animated>
            <Animated delay={200}>
              <div className="premium-card rounded-2xl p-7 h-full flex flex-col">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{t.pricing.miniGroup.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{t.pricing.miniGroup.desc}</p>
                <div className="font-display text-2xl font-bold gradient-text">{t.pricing.miniGroup.price}</div>
              </div>
            </Animated>
          </div>

          {/* Subscriptions */}
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {t.pricing.subscriptions.map((sub, i) => (
              <Animated key={i} delay={250 + i * 100}>
                <div className={`rounded-2xl p-7 h-full flex flex-col ${i === 1 ? 'featured-card ring-2 ring-primary-200' : 'premium-card'}`}>
                  {sub.badge && <span className="badge mb-3 inline-flex text-xs"><Sparkles className="w-3 h-3" />{sub.badge}</span>}
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{sub.lessons} {lang === 'de' ? 'Stunden' : lang === 'ru' ? 'занятий' : 'lessons'}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">{sub.perLesson}</p>
                  <div className="font-display text-2xl font-bold gradient-text">{sub.price}</div>
                  {'savings' in sub && sub.savings && <p className="text-green-500 text-xs font-semibold mt-2">{sub.savings}</p>}
                </div>
              </Animated>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm">{t.pricing.note}</p>
        </div>
      </section>

      {/* ═══════ FOR PARENTS: RICH SECTION ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.forParents.badge} title={t.forParents.title} highlight={t.forParents.highlight} badgeIcon={<Users className="w-3.5 h-3.5" />} />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: image + extras */}
            <Animated delay={100}>
              <div className="space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    src={IMG.stage}
                    alt="Kids on stage"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
                </div>
                <div className="featured-card rounded-2xl p-7">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-5">
                    {lang === 'de' ? 'Zusätzliche Ergebnisse' : lang === 'ru' ? 'Дополнительные результаты' : 'Additional Results'}
                  </h3>
                  <ul className="space-y-4">
                    {t.forParents.extras.map((e, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                        <span className="text-gray-700 font-medium">{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Animated>

            {/* Right: info cards */}
            <div className="space-y-6">
              {t.forParents.blocks.map((block, i) => (
                <Animated key={i}>
                  <div className="premium-card rounded-2xl p-7">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-pink-50 flex items-center justify-center text-primary-500 shrink-0">
                        {parentIcons[block.icon]}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{block.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{block.text}</p>
                      </div>
                    </div>
                  </div>
                </Animated>
              ))}
            </div>
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
            <div className="featured-card rounded-3xl p-10 md:p-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.cta.title}</h2>
              <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">{t.cta.subtitle}</p>
              <Link to="/book" className="btn-primary text-lg inline-flex">{t.cta.cta}<ArrowRight className="w-5 h-5" /></Link>
            </div>
          </Animated>
        </div>
      </section>
    </main>
  );
}

import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import { ArrowRight, CheckCircle2, Award, Heart, Users, Mic, Sparkles, Star, Music, Briefcase } from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import ReviewCarousel from '../components/ReviewCarousel';
import { getMediaImage } from '../utils/media';

const pageT = {
  de: {
    hero: { badge: 'Sängerin, Pädagogin, Vokal- & Musikcoach', title: 'Vocal Coaching', highlight: 'für innere Freiheit', subtitle: 'Ich helfe Erwachsenen und Kindern, ihre Stimme als Instrument der inneren Freiheit zu entdecken — durch professionelle Vokalarbeit, Coaching und Bühnenerfahrung.' },
    whoAmI: {
      badge: 'Wer ich bin', title: 'Über', highlight: 'mich',
      p1: 'Meine Arbeit dreht sich um die Stimme als Schlüssel zur Selbstentfaltung, Sicherheit und Präsenz. Ich verbinde Unterricht, Coaching und Bühnenerfahrung zu einem einzigen transformierenden Prozess.',
      p2: 'Neben der Gesangstechnik gewinnen Sie Klangfreiheit, Kontakt zu sich selbst, Vertrauen im Ausdruck und die Freude, gehört und gesehen zu werden.',
      p3: 'Ich arbeite sowohl mit Erwachsenen als auch mit Kindern, einschließlich eines sanften und aufmerksamen Ansatzes für Kinder mit besonderen Bedürfnissen. Ob Sie als Erwachsener Ihre Stimme stärken oder das kreative Potenzial eines Kindes entfalten möchten — ich begleite Sie mit Professionalität und Herz.',
      benefits: ['Freiheit des Klangs', 'Kontakt zu sich selbst', 'Sicherheit im Ausdruck', 'Freude, gehört und gesehen zu werden'],
    },
    experience: {
      badge: 'Erfahrung', title: 'Qualifikation und', highlight: 'Erfahrung',
      items: ['Musikalische Ausbildung im Bereich Vokalpädagogik', 'Viertelfinalistin bei "The Voice of Germany"', 'Über 15 Jahre Unterrichtserfahrung', 'Aktive Bühnenerfahrung als Sängerin', 'Arbeit mit Erwachsenen und Kindern jeder Altersgruppe', 'Internationaler und mehrsprachiger Kontext (DE/EN/RU)'],
    },
    approach: {
      badge: 'Mein Ansatz', title: 'Wie ich', highlight: 'arbeite',
      items: ['Stimme ist nicht nur Technik — sondern auch Körper, Atem und Emotion', 'Behutsam, aber professionell', 'Individuelles Format und Respekt vor der Persönlichkeit', 'Die Verbindung von Freude und Disziplin'],
    },
    whoIWorkWith: {
      badge: 'Klientel', title: 'Mit wem ich', highlight: 'arbeite',
      items: [
        { title: 'Erwachsene', desc: 'Unternehmer, Fachleute und alle, die ihre Stimme finden wollen.' },
        { title: 'Kinder', desc: 'Von 6 bis 16 Jahren — behutsam und kreativ.' },
        { title: 'Führungskräfte', desc: 'Executive Voice & Presence für Berufstätige.' },
        { title: 'Kreative', desc: 'Künstler, Musiker und Bühnenmenschen.' },
        { title: 'Auftrittssuchende', desc: 'Für alle, die auf die Bühne wollen oder sich einfach trauen möchten.' },
      ],
    },
    whyThree: {
      badge: 'Drei Richtungen', title: 'Warum drei Richtungen', highlight: 'zusammengehören',
      p1: 'Unterricht für Erwachsene, behutsame Arbeit mit Kindern und Konzertarbeit — all das verbindet sich natürlich.',
      p2: 'Die Bühne ist die lebendige Basis meines Könnens. Die Pädagogik gibt mir Tiefe. Und das Coaching bringt beides zusammen.',
      items: ['Erwachsenenunterricht — Stimme und Sicherheit', 'Kinderarbeit — Entfaltung und Freude', 'Bühne — lebendiges Fundament'],
    },
    achievements: {
      badge: 'Meilensteine', title: 'Wichtige', highlight: 'Stationen',
      items: [
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '500+', label: 'Schüler:innen' },
        { value: '100+', label: 'Auftritte' },
        { value: '3', label: 'Sprachen' },
      ],
    },
    reviews: {
      badge: 'Stimmen', title: 'Was andere', highlight: 'sagen',
      items: [
        { name: 'Sarah M.', role: 'Kundin', text: 'Elena hat mir geholfen, meine Stimme — und mich selbst — völlig neu zu entdecken.' },
        { name: 'Thomas K.', role: 'Vater', text: 'Unsere Kinder blühen auf. Professionell und dennoch liebevoll.' },
        { name: 'Claudia H.', role: 'Veranstalterin', text: 'Als Sängerin auf der Bühne: schlichtweg atemberaubend.' },
      ],
    },
    cta: { title: 'Lassen Sie uns arbeiten', cta1: 'Termin buchen', cta2: 'Angebote ansehen' },
  },
  en: {
    hero: { badge: 'Singer, Vocal Teacher & Music Coach', title: 'Vocal Coaching', highlight: 'for inner freedom', subtitle: 'I help adults and children discover their voice as an instrument of inner freedom — through professional vocal work, coaching and stage experience.' },
    whoAmI: {
      badge: 'Who I Am', title: 'About', highlight: 'Me',
      p1: 'My work revolves around the voice as a key to self-expression, confidence, and presence. I combine teaching, coaching, and stage experience into a single transformative process.',
      p2: 'In addition to vocal technique, you gain freedom of sound, connection with yourself, confidence in self-expression, and the joy of being heard and seen.',
      p3: 'I work with both adults and children, including a gentle and attentive approach to children with special needs. Whether you want to strengthen your voice as an adult or unlock a child\'s creative potential — I accompany you with professionalism and heart.',
      benefits: ['freedom of sound', 'connection with yourself', 'confidence in self-expression', 'joy of being heard and seen'],
    },
    experience: {
      badge: 'Experience', title: 'Qualifications and', highlight: 'Experience',
      items: ['Musical education in vocal pedagogy', 'Quarter-finalist of "The Voice of Germany"', 'Over 15 years of teaching experience', 'Active stage experience as a vocalist', 'Work with adults and children of all ages', 'International and multilingual context (DE/EN/RU)'],
    },
    approach: {
      badge: 'My Approach', title: 'How I', highlight: 'work',
      items: ['Voice is not just technique — it\'s body, breath and emotion', 'Gentle but professional', 'Individual format and respect for personality', 'Connecting joy and discipline'],
    },
    whoIWorkWith: {
      badge: 'Clients', title: 'Who I', highlight: 'work with',
      items: [
        { title: 'Adults', desc: 'Entrepreneurs, professionals and anyone wanting to find their voice.' },
        { title: 'Children', desc: 'Ages 6 to 16 — gentle and creative.' },
        { title: 'Executives', desc: 'Executive Voice & Presence for professionals.' },
        { title: 'Creatives', desc: 'Artists, musicians and stage people.' },
        { title: 'Aspiring Performers', desc: 'For anyone who wants to get on stage or simply dare to try.' },
      ],
    },
    whyThree: {
      badge: 'Three Directions', title: 'Why three directions', highlight: 'naturally connect',
      p1: 'Teaching adults, gentle work with children and concert work — all naturally connected.',
      p2: 'The stage is the living foundation of my craft. Teaching gives me depth. Coaching brings both together.',
      items: ['Adult teaching — voice and confidence', 'Children\'s work — growth and joy', 'Stage — living foundation'],
    },
    achievements: {
      badge: 'Milestones', title: 'Key', highlight: 'Achievements',
      items: [
        { value: '15+', label: 'Years Experience' },
        { value: '500+', label: 'Students' },
        { value: '100+', label: 'Performances' },
        { value: '3', label: 'Languages' },
      ],
    },
    reviews: {
      badge: 'Voices', title: 'What others', highlight: 'say',
      items: [
        { name: 'Sarah M.', role: 'Client', text: 'Elena helped me completely rediscover my voice — and myself.' },
        { name: 'Thomas K.', role: 'Parent', text: 'Our children blossom here. Professional yet loving.' },
        { name: 'Claudia H.', role: 'Event Organizer', text: 'As a singer on stage: simply breathtaking.' },
      ],
    },
    cta: { title: 'Let\'s work together', cta1: 'Book a Session', cta2: 'View Services' },
  },
  ru: {
    hero: { badge: 'Певица, педагог, вокальный и музыкальный коуч', title: 'Вокальный коучинг', highlight: 'для внутренней свободы', subtitle: 'Я помогаю взрослым и детям раскрыть голос как инструмент внутренней свободы — через профессиональную вокальную работу, коучинг и сценический опыт.' },
    whoAmI: {
      badge: 'Кто я', title: 'Обо', highlight: 'мне',
      p1: 'Моя работа строится вокруг голоса как ключа к самовыражению, уверенности и проявления себя. Я соединяю преподавание, коучинг и опыт сцены в единый трансформирующий процесс.',
      p2: 'Помимо знаний техники пения — вы получаете свободу звучания, контакт с собой, уверенность в проявлении и радость быть услышанным и увиденным.',
      p3: 'Работаю как со взрослыми, так и с детьми, включая мягкий и внимательный подход к детям с особыми потребностями. Хотите ли вы усилить свой голос как взрослый или раскрыть творческий потенциал ребёнка — я сопровождаю вас с профессионализмом и душой.',
      benefits: ['свободу звучания', 'контакт с собой', 'уверенность в проявлении', 'радость быть услышанным и увиденным'],
    },
    experience: {
      badge: 'Опыт', title: 'Квалификация и', highlight: 'опыт',
      items: ['Музыкальное образование в области вокала', 'Четвертьфиналистка шоу «Голос Германии» (The Voice of Germany)', 'Более 15 лет преподавания', 'Активная сценическая практика', 'Работа со взрослыми и детьми', 'Международный контекст (DE/EN/RU)'],
    },
    approach: {
      badge: 'Мой подход', title: 'Как я', highlight: 'работаю',
      items: ['Голос — это не только техника, но и тело, дыхание, эмоции', 'Бережный, но профессиональный стиль', 'Индивидуальный формат и уважение к личности', 'Соединение радости и дисциплины'],
    },
    whoIWorkWith: {
      badge: 'Клиенты', title: 'С кем я', highlight: 'работаю',
      items: [
        { title: 'Взрослые', desc: 'Предприниматели, специалисты и все, кто хочет найти свой голос.' },
        { title: 'Дети', desc: 'От 6 до 16 лет — бережно и творчески.' },
        { title: 'Руководители', desc: 'Executive Voice для профессионалов.' },
        { title: 'Творческие люди', desc: 'Артисты, музыканты и люди сцены.' },
        { title: 'Желающие на сцену', desc: 'Для тех, кто хочет выступать или просто решиться попробовать.' },
      ],
    },
    whyThree: {
      badge: 'Три направления', title: 'Почему три направления', highlight: 'соединяются',
      p1: 'Преподавание взрослым, бережная работа с детьми и концертная деятельность — всё соединяется естественно.',
      p2: 'Сцена — живая основа мастерства. Педагогика даёт глубину. Коучинг объединяет оба.',
      items: ['Взрослые — голос и уверенность', 'Дети — раскрытие и радость', 'Сцена — живое основание'],
    },
    achievements: {
      badge: 'Вехи', title: 'Важные', highlight: 'достижения',
      items: [
        { value: '15+', label: 'Лет опыта' },
        { value: '500+', label: 'Учеников' },
        { value: '100+', label: 'Выступлений' },
        { value: '3', label: 'Языка' },
      ],
    },
    reviews: {
      badge: 'Голоса', title: 'Что говорят', highlight: 'о нас',
      items: [
        { name: 'Сара М.', role: 'Клиент', text: 'Елена помогла мне заново открыть свой голос — и себя.' },
        { name: 'Томас К.', role: 'Отец', text: 'Наши дети расцветают. Профессионально и бережно.' },
        { name: 'Клаудия Х.', role: 'Организатор', text: 'Как певица на сцене — просто потрясающе.' },
      ],
    },
    cta: { title: 'Давайте работать вместе', cta1: 'Записаться', cta2: 'Смотреть услуги' },
  },
};

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];
  const heroImage = getMediaImage('coach/portrait') || "/images/placeholder.png";
  const aboutImage = getMediaImage('about/about/01') || heroImage; // Defaulting to heroImage if specific about image is missing

  return (
    <main className="bg-white/20 backdrop-blur-sm relative z-10 min-h-screen">
      <HeroSection badge={t.hero.badge} badgeIcon={<Mic className="w-3.5 h-3.5" />} title={t.hero.title} titleHighlight={t.hero.highlight} subtitle={t.hero.subtitle}
        image={heroImage} imageAlt="Alina" />

      {/* WHO AM I */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.whoAmI.badge} title={t.whoAmI.title} highlight={t.whoAmI.highlight} badgeIcon={<Heart className="w-3.5 h-3.5" />} />
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
            <Animated delay={200} className="order-1 lg:col-span-5 flex flex-col justify-center w-full max-w-[380px] md:max-w-full mx-auto">
              <div className="relative group w-full h-full min-h-[400px] lg:min-h-full">
                <div className="absolute inset-0 bg-primary-100 rounded-3xl -translate-x-4 translate-y-4 -z-10 blur-sm opacity-50 transition-transform duration-500 group-hover:-translate-x-5 group-hover:translate-y-5"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl w-full h-full transition-shadow duration-500 group-hover:shadow-primary-900/20">
                  <img 
                    src={aboutImage} 
                    alt="About Teacher" 
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
            <Animated delay={100} className="order-2 lg:col-span-7 flex">
              <div className="premium-card rounded-2xl p-8 md:p-10 lg:p-12 space-y-6 h-full w-full flex flex-col justify-center">
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">{t.whoAmI.p1}</p>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">{t.whoAmI.p2}</p>
                <ul className="space-y-3 mt-4">
                  {t.whoAmI.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 md:text-lg">
                      <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed pt-2">{t.whoAmI.p3}</p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-5 md:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.experience.badge} title={t.experience.title} highlight={t.experience.highlight} badgeIcon={<Award className="w-3.5 h-3.5" />} />
          <div className="space-y-4">
            {t.experience.items.map((item, i) => (
              <Animated key={i} delay={i * 100}>
                <div className="premium-card rounded-xl p-5 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-5 md:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.approach.badge} title={t.approach.title} highlight={t.approach.highlight} badgeIcon={<Sparkles className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <div className="featured-card rounded-2xl p-8 space-y-4">
              {t.approach.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center shrink-0"><Heart className="w-5 h-5 text-primary-600" /></div>
                  <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
                </div>
              ))}
            </div>
          </Animated>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="py-5 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.whoIWorkWith.badge} title={t.whoIWorkWith.title} highlight={t.whoIWorkWith.highlight} badgeIcon={<Users className="w-3.5 h-3.5" />} />
          <div className="flex flex-wrap justify-center gap-6">
            {t.whoIWorkWith.items.map((item, i) => (
              <Animated key={i} delay={i * 100} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
                <div className="premium-card rounded-2xl p-6 h-full w-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
                    {[<Briefcase className="w-6 h-6" />, <Star className="w-6 h-6" />, <Award className="w-6 h-6" />, <Music className="w-6 h-6" />, <Mic className="w-6 h-6" />][i]}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THREE DIRECTIONS */}
      <section className="py-5 md:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.whyThree.badge} title={t.whyThree.title} highlight={t.whyThree.highlight} badgeIcon={<Sparkles className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <div className="premium-card rounded-2xl p-8 space-y-5">
              <p className="text-gray-600 text-lg leading-relaxed">{t.whyThree.p1}</p>
              <p className="text-gray-600 text-lg leading-relaxed">{t.whyThree.p2}</p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {t.whyThree.items.map((item, i) => (
                  <div key={i} className="bg-primary-50/50 rounded-xl p-4 text-center">
                    <p className="text-primary-700 font-semibold text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animated>
            <div className="featured-card rounded-3xl p-10 md:p-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.cta.title}</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/book" className="btn-primary text-lg">{t.cta.cta1}<ArrowRight className="w-5 h-5" /></Link>
                <Link to="/adults" className="btn-secondary text-lg">{t.cta.cta2}<ArrowRight className="w-5 h-5" /></Link>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </main>
  );
}

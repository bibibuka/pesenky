{/* eslint-disable @typescript-eslint/no-unused-vars */}
import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import {
  ArrowRight, CheckCircle2, Award, Heart, Users, Mic, Sparkles, Star, Music, Briefcase, Globe, Baby, Play, FileText, ExternalLink
} from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import PdfViewer from '../components/PdfViewer';
import { getMediaImage, getDiplomaFiles } from '../utils/media';

const pageT = {
  de: {
    hero: {
      badge: 'Sängerin, Pädagogin, Vocal & Music Coach',
      title: 'Mein Leben ist Musik,',
      highlight: 'Bühne und Lehre',
      subtitle: 'Mit über 15 Auszeichnungen in der Musikbranche teile ich meine Erfahrung mit der nächsten Generation.',
    },
    qualifications: {
      badge: 'Qualifikationen',
      title: 'Qualifikation und',
      highlight: 'Erfahrung',
      intro: 'Mit über 15 internationalen Auszeichnungen in der Musikbranche teile ich meine Erfahrung mit der nächsten Generation.',
      items: [
        'Diplomierte Gesangspädagogin',
        'Diplomierte Sängerin, SMPV anerkannt',
        'Über 15 internationale Auszeichnungen',
        'Viertelfinalistin bei "The Voice of Germany"',
        'Über 20 Jahre Unterrichtserfahrung',
        'Auf der Bühne seit dem 5. Lebensjahr',
        'Arbeite in 3 Sprachen (DE / EN / RU)',
      ],
    },
    whoIWorkWith: {
      badge: 'Klientel',
      title: 'Mit wem ich',
      highlight: 'arbeite',
      items: [
        { title: 'Erwachsene', desc: 'Fachleute verschiedenster Berufe, die ihre Stimme entfalten und verbessern wollen.' },
        { title: 'Kinder 6–16', desc: 'Behutsame und kreative Stimmarbeit, die das Potenzial jedes Kindes entfaltet.' },
        { title: 'Führungskräfte', desc: 'Executive Voice — für professionelle Stimme und Präsenz.' },
        { title: 'Kreative Menschen', desc: 'Künstler, Musiker und Menschen der Bühne.' },
        { title: 'Auftrittssuchende', desc: 'Alle, die auftreten möchten oder sich einfach trauen wollen, es zu versuchen.' },
      ],
    },
    media: {
      badge: 'Medien',
      title: 'In den',
      highlight: 'Medien',
      items: [],
    },
    diplomas: {
      badge: 'Diplome & Urkunden',
      title: 'Diplome und',
      highlight: 'Auszeichnungen',
      intro: 'Eine Auswahl meiner Diplome, Zertifikate und Auszeichnungen aus über 20 Jahren Bühnen- und Lehrtätigkeit.',
      empty: 'Diplome werden bald hinzugefügt.',
      viewer: {
        page: 'Seite',
        of: 'von',
        prev: 'Vorherige Seite',
        next: 'Nächste Seite',
        open: 'Original-PDF öffnen',
        loading: 'PDF wird geladen…',
        error: 'PDF konnte nicht geladen werden.',
      },
    },
    cta: {
      title: 'Bereit für eine Probe-Stunde?',
      subtitle: 'Lernen Sie mich kennen und entdecken Sie, was Ihre Stimme kann.',
      cta: 'Probe-Stunde buchen',
    },
  },

  en: {
    hero: {
      badge: 'Singer, Vocal Teacher & Music Coach',
      title: 'My life is music,',
      highlight: 'stage and teaching',
      subtitle: 'With over 15 awards in the music industry, I share my experience with the next generation.',
    },
    qualifications: {
      badge: 'Qualifications',
      title: 'Qualifications and',
      highlight: 'Experience',
      intro: 'With over 15 international awards in the music industry, I share my experience with the next generation.',
      items: [
        'Certified vocal pedagogue',
        'Certified singer, SMPV recognized',
        'Over 15 international awards',
        'Quarter-finalist of "The Voice of Germany"',
        'Over 20 years of teaching experience',
        'On stage since age 5',
        'Work in 3 languages (DE / EN / RU)',
      ],
    },
    whoIWorkWith: {
      badge: 'Clients',
      title: 'Who I',
      highlight: 'work with',
      items: [
        { title: 'Adults', desc: 'Professionals from all fields who want to develop and improve their voice.' },
        { title: 'Children 6–16', desc: 'Gentle and creative voice work that unlocks each child\'s potential.' },
        { title: 'Executives', desc: 'Executive Voice — for professional voice and presence.' },
        { title: 'Creative People', desc: 'Artists, musicians and stage performers.' },
        { title: 'Aspiring Performers', desc: 'Anyone who wants to perform or simply dares to try.' },
      ],
    },
    media: {
      badge: 'Media',
      title: 'In the',
      highlight: 'Media',
      items: [],
    },
    diplomas: {
      badge: 'Diplomas & Certificates',
      title: 'Diplomas and',
      highlight: 'Awards',
      intro: 'A selection of my diplomas, certificates and awards from over 20 years on stage and teaching.',
      empty: 'Diplomas will be added soon.',
      viewer: {
        page: 'Page',
        of: 'of',
        prev: 'Previous page',
        next: 'Next page',
        open: 'Open original PDF',
        loading: 'Loading PDF…',
        error: 'Failed to load PDF.',
      },
    },
    cta: {
      title: 'Ready for a trial lesson?',
      subtitle: 'Get to know me and discover what your voice can do.',
      cta: 'Book a Trial Lesson',
    },
  },

  ru: {
    hero: {
      badge: 'Певица, педагог, вокальный и музыкальный коуч',
      title: 'Моя жизнь — это музыка,',
      highlight: 'сцена и преподавание',
      subtitle: 'Я на сцене с пяти лет и обладатель более 15 наград региональных и международных премий. Также в 2023 году я стала участницей «Голоса Германии», дойдя до четвертьфинала.',
    },
    qualifications: {
      badge: 'Обо мне',
      title: 'Квалификация и',
      highlight: 'опыт',
      intro: 'Театр и сцена — моя стихия, и сегодня я передаю свой опыт и знания молодому поколению. Моя работа строится вокруг голоса как ключа к самовыражению, уверенности и проявлению себя. Я соединяю преподавание, коучинг и свой сценический опыт в единый творческий процесс.',
      items: [
        'Дипломированный вокальный педагог',
        'Дипломированная певица, SMPV anerkannt',
        'Четвертьфиналистка шоу «Голос Германии» (The Voice of Germany, 2023)',
        'Более 15 международных и региональных премий',
        'На сцене с 5 лет',
        'Более 20 лет преподавания',
        'Вокальные техники от ведущих мировых коучей',
        'Мягкий подход к детям с особыми потребностями',
        'Говорю на 3 языках (DE / EN / RU)',
      ],
    },
    whoIWorkWith: {
      badge: 'Клиенты',
      title: 'С кем я',
      highlight: 'работаю',
      items: [
        { title: 'Взрослые', desc: 'Специалисты самых разных профессий, кто стремится раскрыть и улучшить свой голос.' },
        { title: 'Дети 6–16', desc: 'Бережная и творческая работа с голосом, раскрывающая потенциал каждого ребёнка.' },
        { title: 'Руководители', desc: 'Executive Voice — для профессионального голоса и присутствия.' },
        { title: 'Творческие люди', desc: 'Артисты, музыканты и люди сцены.' },
        { title: 'Желающие на сцену', desc: 'Те, кто хочет выступать или просто решиться попробовать.' },
      ],
    },
    media: {
      badge: 'Медиа',
      title: 'В',
      highlight: 'прессе',
      items: [],
    },
    diplomas: {
      badge: 'Дипломы и сертификаты',
      title: 'Дипломы и',
      highlight: 'награды',
      intro: 'Подборка моих дипломов, сертификатов и наград за более чем 20 лет сценической и педагогической деятельности.',
      empty: 'Дипломы скоро появятся.',
      viewer: {
        page: 'Страница',
        of: 'из',
        prev: 'Предыдущая страница',
        next: 'Следующая страница',
        open: 'Открыть оригинал PDF',
        loading: 'Загрузка PDF…',
        error: 'Не удалось загрузить PDF.',
      },
    },
    cta: {
      title: 'Готовы на пробный урок?',
      subtitle: 'Познакомьтесь со мной и узнайте, на что способен Ваш голос.',
      cta: 'Записаться на пробный урок',
    },
  },
};

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];
  const heroImage = getMediaImage('coach/portrait') || "/images/placeholder.png";
  const aboutImage = getMediaImage('about/about/01') || heroImage;
  const diplomas = getDiplomaFiles();

  return (
    <main className="relative z-10 min-h-screen">
      {/* ═══════ HERO ═══════ */}
      <HeroSection
        badge={t.hero.badge}
        badgeIcon={<Mic className="w-3.5 h-3.5" />}
        title={t.hero.title}
        titleHighlight={t.hero.highlight}
        subtitle={t.hero.subtitle}
        image={heroImage}
        imageAlt="Alina"
      />

      {/* ═══════ QUALIFICATIONS & EXPERIENCE ═══════ */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.qualifications.badge} title={t.qualifications.title} highlight={t.qualifications.highlight} badgeIcon={<Award className="w-3.5 h-3.5" />} />

          {/* Top: photo + intro */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-10">
            {/* Photo */}
            <Animated delay={100}>
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Alina"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = heroImage;
                    }}
                  />
                </div>
              </div>
            </Animated>

            {/* Intro paragraph */}
            <Animated delay={200}>
              <p className="text-gray-600 text-lg leading-relaxed">{t.qualifications.intro}</p>
            </Animated>
          </div>

          {/* Bottom: qualifications grid as a separate block */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {t.qualifications.items.map((item, i) => (
              <Animated key={i} delay={i * 60}>
                <div className="premium-card rounded-xl p-4 flex items-center gap-4 h-full">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-snug">{item}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHO I WORK WITH ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.whoIWorkWith.badge} title={t.whoIWorkWith.title} highlight={t.whoIWorkWith.highlight} badgeIcon={<Users className="w-3.5 h-3.5" />} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-8">
            {t.whoIWorkWith.items.map((item, i) => {
              const len = t.whoIWorkWith.items.length;
              const isLastOddSm = i === len - 1 && len % 2 === 1;
              // When the final lg row has exactly 2 items, shift the first of them
              // by one slot so the pair is centered under the row above.
              const startsTrailingPair = len % 3 === 2 && i === len - 2;
              const itemClasses = [
                'lg:col-span-2',
                isLastOddSm ? 'sm:col-span-2' : '',
                startsTrailingPair ? 'lg:col-start-2' : '',
              ].filter(Boolean).join(' ');
              return (
              <Animated key={i} delay={i * 100} className={itemClasses}>
                <div className="premium-card rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
                    {[<Briefcase key="b" className="w-6 h-6" />, <Baby key="ba" className="w-6 h-6" />, <Award key="a" className="w-6 h-6" />, <Music key="m" className="w-6 h-6" />, <Mic key="mi" className="w-6 h-6" />][i]}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Animated>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ DIPLOMAS / CERTIFICATES ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.diplomas.badge} title={t.diplomas.title} highlight={t.diplomas.highlight} badgeIcon={<FileText className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mt-4">{t.diplomas.intro}</p>
          </Animated>

          {diplomas.length === 0 ? (
            <Animated delay={150}>
              <div className="premium-card rounded-2xl p-10 mt-8 text-center text-gray-400 max-w-2xl mx-auto">
                <FileText className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                <p className="text-sm">{t.diplomas.empty}</p>
              </div>
            </Animated>
          ) : (
            <Animated delay={150}>
              <div className="mt-10">
                <PdfViewer url={diplomas[0].url} labels={t.diplomas.viewer} />
              </div>
            </Animated>
          )}
        </div>
      </section>

      {/* ═══════ MEDIA — видео и пресса ═══════ */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.media.badge} title={t.media.title} highlight={t.media.highlight} badgeIcon={<Sparkles className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <div className="premium-card rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-6">
                {/* YouTube video 1 */}
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/Yh6FBPDpUW4?rel=0"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                    loading="lazy"
                  />
                </div>
                {/* YouTube video 2 */}
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/euz3rvlupeE?rel=0"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                    loading="lazy"
                  />
                </div>
                {/* Press article — SHN */}
                <a
                  href="https://www.shn.ch/sn_video/deshalb-machen-alina-und-patrice-bei-the-voice-of-germany-mit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-amber-50 aspect-video flex items-center justify-center group cursor-pointer border border-primary-100/50 hover:shadow-lg transition-shadow"
                >
                  <div className="text-center p-4">
                    <div className="w-14 h-14 rounded-full bg-white/80 shadow-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Globe className="w-6 h-6 text-primary-500" />
                    </div>
                    <p className="text-primary-600 text-sm font-semibold mb-1">Schaffhauser Nachrichten</p>
                    <p className="text-gray-400 text-xs flex items-center justify-center gap-1">
                      {lang === 'de' ? 'Artikel lesen' : lang === 'ru' ? 'Читать статью' : 'Read article'}
                      <ExternalLink className="w-3 h-3" />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-8 md:py-12">
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
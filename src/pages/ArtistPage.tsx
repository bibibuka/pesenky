import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import { ArrowRight, CheckCircle2, Music, Star, Sparkles, Award, Play, Video } from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import ReviewCarousel from '../components/ReviewCarousel';
import { getMediaImage, getMediaImages } from '../utils/media';

const pageT = {
  de: {
    hero: { title: 'Live Performance &', highlight: 'Künstlerische Projekte', subtitle: 'Livemusik, Bühnenpräsenz und Auftritte für private, kulturelle und kammermusikalische Anlässe.', cta1: 'Für Auftritt einladen', cta2: 'Anfrage senden' },
    about: {
      badge: 'Konzertarbeit', title: 'Über die', highlight: 'Bühnenarbeit',
      p1: 'Als professionelle Sängerin und Viertelfinalistin bei "The Voice of Germany" bringe ich lebendige, emotionale Musik auf die Bühne — ob bei intimen Kammerevents, kulturellen Abenden oder festlichen Anlässen.',
      p2: 'Die Verbindung zwischen Bühne und Unterricht ist der Kern meiner Arbeit: Die Bühne nährt die Pädagogik, die Pädagogik vertieft die Bühnenpräsenz.',
    },
    projects: {
      badge: 'Projekte', title: 'Künstlerische', highlight: 'Projekte',
      p1: 'Seit der Eröffnung der Schule im Jahr 2022 habe ich mehrere bedeutende Projekte auf städtischer und regionaler Ebene durchgeführt, die Menschen durch Musik verbinden. Ich eröffne ständig neue Horizonte, und es ist mir wichtig, die junge Generation zu inspirieren.',
      p2: 'Ich unterstütze die junge Generation aufrichtig und vermittle ihnen die Liebe zur Musik — klassisch und modern. Es ist mir wichtig, Räume zu schaffen, in denen jeder arbeiten, Musik genießen und Freude mit anderen teilen kann.',
      p3: 'Jedes Projekt ist ein Schritt dahin, dass Musik uns verbindet, inspiriert und immer mehr Menschen Freude bereitet.',
      items: [
        { year: '2022', title: '«Musik in den Händen»', desc: 'Projekt für Kinder aus der Ukraine, unterstützt durch Presse und Interviews.' },
        { year: '2024', title: '«International Music Project»', desc: 'Verbindet Kinder verschiedener Nationalitäten durch die Kraft der Musik.' },
        { year: '2025', title: '«United by Music»', desc: 'In Kooperation mit dem Psychiatriezentrum Schaffhausen für Kinder der Region.' },
      ],
    },
    repertoire: {
      badge: 'Repertoire', title: 'Stil und', highlight: 'Repertoire',
      items: ['Zeitgenössische Musik und moderne Klassiker', 'Soulful und akustische Interpretationen', 'Emotionale und tiefgründige Performances', 'Individuell kuratierte Programme für Ihr Event'],
    },
    media: {
      badge: 'Galerie', title: 'Eindrücke von', highlight: 'der Bühne',
    },
    whyInvite: {
      badge: 'Warum wir', title: 'Warum Veranstalter', highlight: 'einladen',
      items: ['Professionelle musikalische Qualität', 'Lebendige, emotionale Darbietung', 'Ästhetisches und stilvolles Format', 'Langjährige Bühnenerfahrung', 'Individuell angepasstes Programm'],
    },
    reviews: {
      badge: 'Feedback', title: 'Was Partner', highlight: 'sagen',
      items: [
        { name: 'Claudia H.', role: 'Event-Managerin', text: 'Die Atmosphäre bei unserem Event war atemberaubend. Jeder Gast war berührt.' },
        { name: 'Stefan M.', role: 'Galerie-Besitzer', text: 'Eine perfekte Verbindung von Kunst und Musik. Das Publikum war begeistert.' },
        { name: 'Isabelle W.', role: 'Braut', text: 'Der schönste Moment unserer Hochzeit. Die Stimme hat alle zu Tränen gerührt.' },
      ],
    },
    cta: { title: 'Interesse an einem Auftritt?', subtitle: 'Lassen Sie uns über Ihr Event sprechen.', cta1: 'Auftritt anfragen', cta2: 'Format besprechen' },
  },
  en: {
    hero: { title: 'Live Performance &', highlight: 'Artistic Projects', subtitle: 'Live music, stage presence and performances for private, cultural and chamber events.', cta1: 'Invite to Perform', cta2: 'Send Inquiry' },
    about: {
      badge: 'Concert Work', title: 'About', highlight: 'Stage Work',
      p1: 'As a professional vocalist and quarter-finalist of "The Voice of Germany", I bring vibrant, emotional music to the stage — whether at intimate chamber events, cultural evenings or festive occasions.',
      p2: 'The connection between stage and teaching is at the core of my work: the stage nourishes the teaching, and teaching deepens the stage presence.',
    },
    projects: {
      badge: 'Projects', title: 'Artistic', highlight: 'Projects',
      p1: 'Since opening the school in 2022, I have conducted several significant projects at city and regional levels, uniting people through music. I am constantly opening new horizons, and it is important for me to inspire the younger generation.',
      p2: 'I sincerely support the younger generation, instilling in them a love for music — both classical and modern. It is important to me to create spaces where everyone can work, enjoy music, and share joy with others.',
      p3: 'Each project is a step towards music uniting us, inspiring us, and bringing joy to more and more people.',
      items: [
        { year: '2022', title: '“Music in Palms”', desc: 'Project for children of Ukraine, supported by local media and interviews.' },
        { year: '2024', title: '“International Music Project”', desc: 'Uniting children of different nationalities through creative expression.' },
        { year: '2025', title: '“United by Music”', desc: 'In partnership with the Psychiatry Center Schaffhausen for children of the region.' },
      ],
    },
    repertoire: {
      badge: 'Repertoire', title: 'Style and', highlight: 'Repertoire',
      items: ['Contemporary music and modern classics', 'Soulful and acoustic interpretations', 'Emotional and profound performances', 'Individually curated programs for your event'],
    },
    media: { badge: 'Gallery', title: 'Impressions from', highlight: 'the Stage' },
    whyInvite: {
      badge: 'Why Us', title: 'Why organizers', highlight: 'invite us',
      items: ['Professional musical quality', 'Vibrant, emotional delivery', 'Aesthetic and stylish format', 'Years of stage experience', 'Individually adapted program'],
    },
    reviews: {
      badge: 'Feedback', title: 'What partners', highlight: 'say',
      items: [
        { name: 'Claudia H.', role: 'Event Manager', text: 'The atmosphere at our event was breathtaking. Every guest was moved.' },
        { name: 'Stefan M.', role: 'Gallery Owner', text: 'A perfect blend of art and music. The audience was thrilled.' },
        { name: 'Isabelle W.', role: 'Bride', text: 'The most beautiful moment of our wedding. The voice moved everyone to tears.' },
      ],
    },
    cta: { title: 'Interested in a performance?', subtitle: 'Let\'s talk about your event.', cta1: 'Request Performance', cta2: 'Discuss Format' },
  },
  ru: {
    hero: { title: 'Живые выступления и', highlight: 'артистические проекты', subtitle: 'Живая музыка, сценическое присутствие и выступления для частных, культурных и камерных событий.', cta1: 'Пригласить на выступление', cta2: 'Отправить запрос' },
    about: {
      badge: 'Концертная деятельность', title: 'О', highlight: 'сценической работе',
      p1: 'Как профессиональная певица и четвертьфиналистка шоу «Голос Германии» (The Voice of Germany), я привношу живую, эмоциональную музыку на сцену — будь то камерные вечера, культурные мероприятия или праздники.',
      p2: 'Связь между сценой и преподаванием — основа моей работы: сцена питает педагогику, а педагогика углубляет присутствие на сцене.',
    },
    projects: {
      badge: 'Проекты', title: 'Творческие', highlight: 'проекты',
      p1: 'С открытия школы в 2022 я провела несколько значимых проектов на городском и региональном уровне, объединяя людей через музыку. Я постоянно открываю новые горизонты, и для меня важно вдохновлять молодое поколение.',
      p2: 'Я искренне поддерживаю молодое поколение, прививая им любовь к музыке — классической и современной. Мне важно создавать пространства, где каждый может работать, наслаждаться музыкой и делиться радостью с окружающими.',
      p3: 'Каждый проект — это шаг к тому, чтобы музыка объединяла нас, вдохновляла и приносила радость всё большему количеству людей.',
      items: [
        { year: '2022', title: '«Музыка в ладошках»', desc: 'Проект для детей Украины, при поддержке прессы и ТВ.' },
        { year: '2024', title: '«International Music Project»', desc: 'Объединяющий детей разных национальностей.' },
        { year: '2025', title: '«United by Music»', desc: 'Совместно с психиатрическим центром Шаффхаузена для детей региона.' },
      ],
    },
    repertoire: {
      badge: 'Репертуар', title: 'Стиль и', highlight: 'репертуар',
      items: ['Современная музыка и модерн-классика', 'Soulful и акустические интерпретации', 'Эмоциональные и глубокие перформансы', 'Индивидуально подобранные программы'],
    },
    media: { badge: 'Галерея', title: 'Впечатления', highlight: 'со сцены' },
    whyInvite: {
      badge: 'Почему мы', title: 'Почему организаторы', highlight: 'приглашают',
      items: ['Профессиональное музыкальное качество', 'Живая, эмоциональная подача', 'Эстетичный и стильный формат', 'Многолетний сценический опыт', 'Индивидуально адаптированная программа'],
    },
    reviews: {
      badge: 'Отклики', title: 'Что говорят', highlight: 'заказчики',
      items: [
        { name: 'Клаудия Х.', role: 'Организатор событий', text: 'Атмосфера на нашем мероприятии была потрясающей. Каждый гость был тронут.' },
        { name: 'Штефан М.', role: 'Владелец галереи', text: 'Идеальное соединение искусства и музыки. Публика в восторге.' },
        { name: 'Изабэль В.', role: 'Невеста', text: 'Самый красивый момент нашей свадьбы. Голос тронул всех до слёз.' },
      ],
    },
    cta: { title: 'Заинтересованы в выступлении?', subtitle: 'Давайте обсудим ваше мероприятие.', cta1: 'Запросить выступление', cta2: 'Обсудить формат' },
  },
};

const mediaImagesBackup = [
  "/images/placeholder.png"
];

export default function ArtistPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];

  // Load hero and gallery images dynamically
  const heroImage = getMediaImage('artist/hero') || "/images/placeholder.png";
  const aboutImage = getMediaImage('artist/about/01') || getMediaImage('artist/about') || "/images/artist/hero/01/IMG_5694.JPG";
  
  // Get all images from artist/gallery, or fallback if empty
  const loadedGallery = getMediaImages('artist/gallery');
  const mediaImages = loadedGallery.length > 0 ? loadedGallery : mediaImagesBackup;

  return (
    <main className="bg-white/20 backdrop-blur-sm relative z-10 min-h-screen">
      <HeroSection title={t.hero.title} titleHighlight={t.hero.highlight} subtitle={t.hero.subtitle}
        image={heroImage} imageAlt="Stage performance"
        ctas={[{ label: t.hero.cta1, href: '/book', isRoute: true }, { label: t.hero.cta2, href: '/book', variant: 'secondary', isRoute: true }]} />

      {/* ABOUT */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.about.badge} title={t.about.title} highlight={t.about.highlight} badgeIcon={<Music className="w-3.5 h-3.5" />} />
          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <Animated delay={200} className="order-1 md:order-1 flex justify-center">
              <div className="relative group w-full max-w-[290px] md:max-w-[380px]">
                <div className="absolute inset-0 bg-primary-100 rounded-3xl -translate-x-4 translate-y-4 -z-10 blur-sm opacity-50 transition-transform duration-500 group-hover:-translate-x-5 group-hover:translate-y-5"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] w-full transition-shadow duration-500 group-hover:shadow-primary-900/20">
                  <img 
                    src={aboutImage} 
                    alt="Stage Performance" 
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
              <div className="premium-card rounded-2xl p-8 md:p-10 space-y-5 h-full flex flex-col justify-center">
                <p className="text-gray-600 text-lg leading-relaxed">{t.about.p1}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{t.about.p2}</p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.projects.badge} title={t.projects.title} highlight={t.projects.highlight} badgeIcon={<Star className="w-3.5 h-3.5" />} />
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <Animated delay={100}>
              <div className="premium-card rounded-3xl p-8 md:p-10 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">{t.projects.p1}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{t.projects.p2}</p>
                <p className="text-primary-700 font-medium text-lg leading-relaxed italic">{t.projects.p3}</p>
              </div>
            </Animated>
            <div className="space-y-6">
              {t.projects.items.map((project, i) => (
                <Animated key={i} delay={200 + i * 100}>
                  <div className="premium-card rounded-2xl p-6 flex gap-5 group hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl font-display font-bold text-primary-200 group-hover:text-primary-500 transition-colors shrink-0">
                      {project.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{project.desc}</p>
                    </div>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REPERTOIRE */}
      <section className="py-5 md:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.repertoire.badge} title={t.repertoire.title} highlight={t.repertoire.highlight} badgeIcon={<Sparkles className="w-3.5 h-3.5" />} />
          <div className="space-y-4">
            {t.repertoire.items.map((item, i) => (
              <Animated key={i} delay={i * 100}>
                <div className="premium-card rounded-xl p-5 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0"><Music className="w-5 h-5 text-amber-500" /></div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </Animated>
            ))}
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
              '9KdRWJUhNT0'
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

      {/* CTA */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animated>
            <div className="featured-card rounded-3xl p-10 md:p-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.cta.title}</h2>
              <p className="text-gray-500 text-lg mb-8">{t.cta.subtitle}</p>
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

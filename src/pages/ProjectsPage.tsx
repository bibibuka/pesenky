{/* eslint-disable @typescript-eslint/no-unused-vars */}
import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import {
  ArrowRight, Heart, Music, Sparkles, Star, Calendar, ExternalLink, Newspaper, Video
} from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import { getMediaImage } from '../utils/media';

/* ─── translations ─── */
const pageT = {
  de: {
    hero: {
      title: 'Kreative',
      highlight: 'Projekte',
      subtitle: 'Seit der Gründung im Jahr 2022 habe ich mehrere bedeutende Projekte auf lokaler und regionaler Ebene durchgeführt, die Menschen durch Musik verbinden.',
      cta1: 'Kontakt aufnehmen',
      cta2: 'Mehr erfahren',
    },
    mission: {
      badge: 'Meine Mission',
      text: 'Auf meinem kreativen Weg ist es mir sehr wichtig, die junge Generation zu inspirieren. Ich freue mich, junge Talente zu unterstützen und ihnen die Liebe zur Musik — klassisch und modern — zu vermitteln.',
      quote: 'Jedes Projekt ist endlose kreative Energie, wo Musik uns verbindet, inspiriert und immer mehr Menschen Freude bringt.',
    },
    projects: {
      badge: 'Projekte',
      title: 'Meine',
      highlight: 'Projekte',
      items: [
        {
          year: '2022',
          title: 'Musik in den Händen',
          desc: 'Ein einzigartiges Musikprojekt, das Kinder und Familien in Schaffhausen zusammenbrachte und durch gemeinsames Musizieren verband.',
          image: '/images/placeholder.png',
          youtubeUrls: [],
          pressReviews: [],
        },
        {
          year: '2024',
          title: 'Internationales Musikprojekt',
          desc: 'Ein grenzüberschreitendes Projekt, das Musiker aus verschiedenen Ländern vereinte und kulturelle Brücken durch die Kraft der Musik baute.',
          image: '/images/placeholder.png',
          youtubeUrls: [],
          pressReviews: [],
        },
        {
          year: '2025',
          title: 'Projekt mit dem psychiatrischen Zentrum',
          desc: 'Ein besonderes Projekt in Zusammenarbeit mit einem psychiatrischen Zentrum, das die heilende Kraft der Musik für das Wohlbefinden der Teilnehmer erforschte.',
          image: '/images/placeholder.png',
          youtubeUrls: [],
          pressReviews: [],
        },
      ],
    },
    cta: {
      title: 'Möchten Sie an einem Projekt teilnehmen?',
      subtitle: 'Kontaktieren Sie mich und erfahren Sie mehr über aktuelle und zukünftige Projekte.',
      cta: 'Nachricht senden',
    },
  },

  en: {
    hero: {
      title: 'Creative',
      highlight: 'Projects',
      subtitle: 'Since opening in 2022, I have organized several significant projects at the city and regional level, bringing people together through music.',
      cta1: 'Get in Touch',
      cta2: 'Learn More',
    },
    mission: {
      badge: 'My Mission',
      text: 'On my creative journey, it is very important to me to inspire the younger generation. I am happy to support young talents, instilling in them a love of music — both classical and modern.',
      quote: 'Each project is endless creative energy, where music unites us, inspires and brings joy to more and more people.',
    },
    projects: {
      badge: 'Projects',
      title: 'My',
      highlight: 'Projects',
      items: [
        {
          year: '2022',
          title: 'Music in Hands',
          desc: 'A unique music project that brought children and families together in Schaffhausen, connecting them through shared music-making.',
          image: '/images/placeholder.png',
          youtubeUrls: [],
          pressReviews: [],
        },
        {
          year: '2024',
          title: 'International Music Project',
          desc: 'A cross-border project that united musicians from different countries, building cultural bridges through the power of music.',
          image: '/images/placeholder.png',
          youtubeUrls: [],
          pressReviews: [],
        },
        {
          year: '2025',
          title: 'Project with the Psychiatric Center',
          desc: 'A special project in collaboration with a psychiatric center, exploring the healing power of music for the well-being of participants.',
          image: '/images/placeholder.png',
          youtubeUrls: [],
          pressReviews: [],
        },
      ],
    },
    cta: {
      title: 'Want to participate in a project?',
      subtitle: 'Contact me to learn more about current and future projects.',
      cta: 'Send Message',
    },
  },

  ru: {
    hero: {
      title: 'Творческие',
      highlight: 'проекты',
      subtitle: 'С открытия школы в 2022 году я провела несколько значимых проектов на городском и региональном уровне, объединяя людей через музыку.',
      cta1: 'Связаться',
      cta2: 'Узнать больше',
    },
    mission: {
      badge: 'Моя миссия',
      text: 'На своём творческом пути для меня очень важно вдохновлять молодое поколение. Я рада поддерживать юные таланты, прививая им любовь к музыке — классической и современной.',
      quote: 'Каждый проект — нескончаемая творческая энергия, где музыка объединяет нас, вдохновляет и приносит радость всё большему количеству людей.',
    },
    projects: {
      badge: 'Проекты',
      title: 'Мои',
      highlight: 'проекты',
      items: [
        {
          year: '2022',
          title: 'Музыка в ладошках',
          desc: 'Благотворительный проект «Музыка в ладошках» при поддержке спонсоров региона объединил большое количество людей. Было проведено два грандиозных концерта с посещением более 300 человек, которые стали настоящим вдохновением в сложное время. Проект был создан для поддержки украинских детей, а также для вовлечения взрослых в творчество, помогая каждому найти опору в музыке. В проекте участвовало 50 человек — детей, музыкантов и взрослых без музыкального образования.',
          image: '/images/placeholder.png',
          youtubeUrls: [
            'https://youtube.com/shorts/4UIwY1uonOk',
            'https://youtube.com/shorts/F256PlmYpt0',
            'https://youtu.be/waL6In2QFSw',
          ],
          pressReviews: [],
        },
        {
          year: '2024',
          title: 'Интернациональный музыкальный проект',
          desc: 'Проект был создан с целью объединить детей разных национальностей через универсальный язык музыки. Он помогал создавать пространство общения, творчества и взаимопонимания, где дети могли чувствовать себя частью единого сообщества. Участники проекта не только занимались музыкой, но и принимали активное участие в концертах и мероприятиях городского уровня, представляя результаты своей творческой работы широкой публике.',
          image: '/images/placeholder.png',
          youtubeUrls: [
            'https://youtube.com/shorts/MsiIoITAJSQ',
          ],
          pressReviews: [],
        },
        {
          year: '2025',
          title: 'Объединённые музыкой',
          desc: 'Проект, реализованный при поддержке психиатрического центра города Шаффхаузен, был создан для творческой и социальной поддержки детей региона. Более 20 участников получили возможность раскрыть свой потенциал через музыку, сценическое движение и элементы актёрского мастерства. В рамках проекта дети представили несколько концертов в городе Шаффхаузен, став частью культурной жизни региона. Особую ценность проекту придала атмосфера принятия, творчества и поддержки, где каждый ребёнок мог почувствовать себя уверенно и свободно проявить свои способности.',
          image: '/images/placeholder.png',
          youtubeUrls: [
            'https://youtube.com/shorts/RI2UhOT-ncQ',
          ],
          pressReviews: [],
        },
      ],
    },
    cta: {
      title: 'Хотите участвовать в проекте?',
      subtitle: 'Свяжитесь со мной, чтобы узнать больше о текущих и будущих проектах.',
      cta: 'Написать',
    },
  },
};

/* ─── component ─── */
export default function ProjectsPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];
  const heroImage = getMediaImage('projects/hero') || "/images/placeholder.png";

  return (
    <main className="relative z-10 min-h-screen">
      {/* ═══════ HERO ═══════ */}
      <HeroSection
        title={t.hero.title}
        titleHighlight={t.hero.highlight}
        subtitle={t.hero.subtitle}
        image={heroImage}
        imageAlt="Creative projects"
        ctas={[
          { label: t.hero.cta1, href: '/book', isRoute: true },
          { label: t.hero.cta2, href: '#projects', variant: 'secondary' },
        ]}
      />

      {/* ═══════ MISSION ═══════ */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animated delay={100}>
            <div className="featured-card rounded-3xl p-8 md:p-12 text-center">
              <SectionTitle badge={t.mission.badge} title="" highlight="" badgeIcon={<Heart className="w-3.5 h-3.5" />} />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.mission.text}</p>
              <blockquote className="text-xl md:text-2xl font-display font-bold gradient-text italic leading-relaxed">
                «{t.mission.quote}»
              </blockquote>
            </div>
          </Animated>
        </div>
      </section>

      {/* ═══════ PROJECTS TIMELINE ═══════ */}
      <section id="projects" className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.projects.badge} title={t.projects.title} highlight={t.projects.highlight} badgeIcon={<Sparkles className="w-3.5 h-3.5" />} />

          <div className="relative mt-10">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-pink-200 to-amber-200 hidden sm:block" />

            <div className="space-y-10">
              {t.projects.items.map((project, i) => (
                <Animated key={i} delay={i * 150}>
                  <div className="flex gap-5 sm:gap-8 items-start">
                    {/* Year badge */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-pink-400 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">
                      {project.year}
                    </div>

                    {/* Project card */}
                    <div className="premium-card rounded-2xl p-6 md:p-8 flex-1">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left: info */}
                        <div>
                          <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                          <p className="text-gray-500 leading-relaxed mb-4">{project.desc}</p>

                          <div className="flex flex-wrap gap-3">
                            {project.youtubeUrls.length > 0 && project.youtubeUrls.map((url: string, vi: number) => (
                              <a
                                key={vi}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium hover:bg-red-100 transition-colors"
                              >
                                <Video className="w-4 h-4" />
                                YouTube {project.youtubeUrls.length > 1 ? vi + 1 : ''}
                              </a>
                            ))}
                            {project.pressReviews.length > 0 && (
                              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                                <Newspaper className="w-4 h-4" />
                                {lang === 'de' ? 'Presse' : lang === 'ru' ? 'Пресса' : 'Press'}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                          <img
                            src={getMediaImage(`projects/${project.year}`) || '/images/placeholder.png'}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-48 md:h-full min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="w-full h-48 md:h-full min-h-[200px] bg-gradient-to-br from-primary-50 to-pink-50 flex items-center justify-center"><div class="text-center"><svg class="w-10 h-10 text-primary-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg></div><p class="text-primary-400 text-sm">${lang === 'de' ? 'Foto kommt bald' : lang === 'ru' ? 'Фото скоро появится' : 'Photo coming soon'}</p></div>`;
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      </div>

                      {/* Press reviews section (placeholder) */}
                      {project.pressReviews.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Newspaper className="w-4 h-4" />
                            {lang === 'de' ? 'Pressestimmen' : lang === 'ru' ? 'Газетные вырезки' : 'Press Reviews'}
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {project.pressReviews.map((review: { image: string; caption: string }, ri: number) => (
                              <div key={ri} className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <img src={review.image} alt={review.caption} loading="lazy" decoding="async" className="w-full h-40 object-cover" />
                                {review.caption && <p className="text-xs text-gray-400 p-2">{review.caption}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
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
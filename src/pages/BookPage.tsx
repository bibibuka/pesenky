import { Link } from 'react-router-dom';
import { type Lang } from '../i18n';
import { ArrowRight, MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import Animated from '../components/Animated';
import SectionTitle from '../components/SectionTitle';
import HeroSection from '../components/HeroSection';
import FaqItem from '../components/FaqItem';

const pageT = {
  de: {
    hero: { title: 'Anfrage und', highlight: 'Kontakt', subtitle: 'Wählen Sie Ihre Richtung — wir helfen Ihnen, das passende Format zu finden.' },
    directionCards: [
      { title: 'Für Erwachsene', desc: 'Einzelstunden, Abos ab 5 Stunden.', link: '/adults' },
      { title: 'Für Kinder (6–16)', desc: 'Einzel- und Mini-Gruppen ab 30 Min. Kostenlose Probestunde.', link: '/kids' },
      { title: 'Konzertauftritt', desc: 'Professionelle Livemusik für Veranstaltungen.', link: '/artist' },
      { title: 'Beratungsgespräch', desc: 'Unverbindliches Gespräch (15 Min.), um Ihr Ziel und das passende Format zu klären — kostenlos.' },
    ],
    explanation: {
      badge: 'Anmeldung', title: 'Sie können sich', highlight: 'anmelden für',
    },
    form: {
      name: 'Name', email: 'E-Mail', phone: 'Telefon', city: 'Stadt',
      direction: 'Richtung', directionOptions: ['Erwachsene', 'Kinder', 'Auftritt', 'Beratung'],
      message: 'Nachricht / Ziel der Anfrage', submit: 'Absenden',
    },
    contactOptions: {
      badge: 'Kontaktwege', title: 'Weitere', highlight: 'Kontaktwege',
      email: 'hello@voicelab-sh.ch', phone: '+41 79 585 95 61',
      whatsapp: 'WhatsApp verfügbar', social: 'Instagram: @voicelab_sh',
    },
    location: {
      badge: 'Standort', title: 'Wo Sie', highlight: 'uns finden',
      city: 'Schaffhausen, Schweiz', near: 'Nähe Zürich · auch Online verfügbar',
      address: 'Genaue Adresse nach Anmeldung',
    },
    hours: {
      badge: 'Öffnungszeiten', title: 'Wann wir', highlight: 'arbeiten',
      text: 'Termine nach Vereinbarung. Flexible Zeiten unter der Woche und an ausgewählten Wochenenden.',
    },
    faq: {
      badge: 'Kurz-FAQ', title: 'Häufig', highlight: 'gefragt',
      items: [
        { q: 'Wie schnell antworten Sie?', a: 'In der Regel innerhalb von 24 Stunden.' },
        { q: 'Kann ich online teilnehmen?', a: 'Ja, Online-Formate sind verfügbar.' },
        { q: 'In welcher Sprache?', a: 'Deutsch, Englisch und Russisch.' },
        { q: 'Gibt es Geschenkgutscheine?', a: 'Ja! Perfektes Premium-Geschenk für jeden Anlass.' },
      ],
    },
  },
  en: {
    hero: { title: 'Booking and', highlight: 'Contact', subtitle: 'Choose your direction — we\'ll help you find the right format.' },
    directionCards: [
      { title: 'For Adults', desc: 'Individual sessions, subscriptions from 5 sessions.', link: '/adults' },
      { title: 'For Kids (6–16)', desc: 'Individual and mini-groups from 30 min. Free trial lesson.', link: '/kids' },
      { title: 'Concert Performance', desc: 'Professional live music for events.', link: '/artist' },
      { title: 'Consultation', desc: 'Non-binding call (15 min) to discuss your goals and find the right format — free of charge.' },
    ],
    explanation: {
      badge: 'Registration', title: 'You can sign up', highlight: 'for',
    },
    form: {
      name: 'Name', email: 'Email', phone: 'Phone', city: 'City',
      direction: 'Direction', directionOptions: ['Adults', 'Kids', 'Performance', 'Consultation'],
      message: 'Message / Purpose of inquiry', submit: 'Submit',
    },
    contactOptions: {
      badge: 'Contact Options', title: 'Other', highlight: 'Ways to Reach Us',
      email: 'hello@voicelab-sh.ch', phone: '+41 79 585 95 61',
      whatsapp: 'WhatsApp available', social: 'Instagram: @voicelab_sh',
    },
    location: {
      badge: 'Location', title: 'Where to', highlight: 'Find Us',
      city: 'Schaffhausen, Switzerland', near: 'Near Zurich · also available online',
      address: 'Exact address provided after registration',
    },
    hours: {
      badge: 'Working Hours', title: 'When we', highlight: 'work',
      text: 'By appointment. Flexible times on weekdays and select weekends.',
    },
    faq: {
      badge: 'Quick FAQ', title: 'Frequently', highlight: 'Asked',
      items: [
        { q: 'How quickly do you respond?', a: 'Usually within 24 hours.' },
        { q: 'Can I participate online?', a: 'Yes, online formats are available.' },
        { q: 'In what language?', a: 'German, English and Russian.' },
        { q: 'Are gift certificates available?', a: 'Yes! A perfect premium gift for any occasion.' },
      ],
    },
  },
  ru: {
    hero: { title: 'Запись и', highlight: 'контакты', subtitle: 'Выберите направление — мы поможем подобрать подходящий формат.' },
    directionCards: [
      { title: 'Для взрослых', desc: 'Индивидуальные занятия, абонементы от 5 занятий.', link: '/adults' },
      { title: 'Для детей (6–16)', desc: 'Индивидуальные и минигруппы от 30 мин. Бесплатное пробное занятие.', link: '/kids' },
      { title: 'Концертное выступление', desc: 'Профессиональная живая музыка для мероприятий.', link: '/artist' },
      { title: 'Консультация', desc: 'Бесплатный звонок (15 мин.), чтобы обсудить цель и подобрать формат.' },
    ],
    explanation: {
      badge: 'Запись', title: 'Вы можете записаться', highlight: 'на',
    },
    form: {
      name: 'Имя', email: 'Email', phone: 'Телефон', city: 'Город',
      direction: 'Направление', directionOptions: ['Взрослые', 'Дети', 'Выступление', 'Консультация'],
      message: 'Сообщение / цель запроса', submit: 'Отправить',
    },
    contactOptions: {
      badge: 'Способы связи', title: 'Другие', highlight: 'способы связи',
      email: 'hello@voicelab-sh.ch', phone: '+41 79 585 95 61',
      whatsapp: 'WhatsApp доступен', social: 'Instagram: @voicelab_sh',
    },
    location: {
      badge: 'Локация', title: 'Где нас', highlight: 'найти',
      city: 'Шаффхаузен, Швейцария', near: 'Рядом с Цюрихом · онлайн тоже доступен',
      address: 'Точный адрес после записи',
    },
    hours: {
      badge: 'Часы работы', title: 'Когда мы', highlight: 'работаем',
      text: 'По записи. Гибкий график в будни и отдельные выходные.',
    },
    faq: {
      badge: 'Мини-FAQ', title: 'Часто', highlight: 'спрашивают',
      items: [
        { q: 'Как быстро Вы отвечаете?', a: 'Обычно в течение 24 часов.' },
        { q: 'Можно ли онлайн?', a: 'Да, онлайн-форматы доступны.' },
        { q: 'На каком языке?', a: 'Немецкий, английский и русский.' },
        { q: 'Есть ли подарочные сертификаты?', a: 'Да! Идеальный премиальный подарок.' },
      ],
    },
  },
};

export default function BookPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];
  return (
    <main className="relative z-10 min-h-screen">
      <HeroSection title={t.hero.title} titleHighlight={t.hero.highlight} subtitle={t.hero.subtitle} compact />

      {/* DIRECTION CARDS */}
      <section className="py-5 md:py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.directionCards.map((card, i) => (
              <Animated key={i} delay={i * 80}>
                <div className="premium-card rounded-2xl p-5 h-full flex flex-col">
                  <h3 className="font-display text-base font-bold text-gray-900 mb-2 min-h-[2lh] text-balance">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.desc}</p>
                  {card.link && (
                    <Link to={card.link} className="text-primary-600 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:text-primary-700 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-5 md:py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={t.explanation.badge} title={t.explanation.title} highlight={t.explanation.highlight} badgeIcon={<Mail className="w-3.5 h-3.5" />} />
          <Animated delay={100}>
            <div className="premium-card rounded-2xl p-5 sm:p-8">
              <form action="mailto:hello@voicelab-sh.ch" method="POST" encType="text/plain" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="text-sm font-medium text-gray-700 mb-1.5 block">{t.form.name}</label><input type="text" className="form-input" /></div>
                  <div><label className="text-sm font-medium text-gray-700 mb-1.5 block">{t.form.email}</label><input type="email" className="form-input" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="text-sm font-medium text-gray-700 mb-1.5 block">{t.form.phone}</label><input type="tel" className="form-input" /></div>
                  <div><label className="text-sm font-medium text-gray-700 mb-1.5 block">{t.form.city}</label><input type="text" className="form-input" /></div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">{t.form.direction}</label>
                  <select className="form-input cursor-pointer">
                    {t.form.directionOptions.map((opt, i) => (<option key={i}>{opt}</option>))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">{t.form.message}</label>
                  <textarea className="form-input min-h-[120px] resize-none" rows={4} />
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-lg">{t.form.submit}<ArrowRight className="w-5 h-5" /></button>
              </form>
            </div>
          </Animated>
        </div>
      </section>

      {/* CONTACT OPTIONS + LOCATION + HOURS */}
      <section className="py-5 md:py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Animated delay={100}>
              <div className="premium-card rounded-2xl p-5 sm:p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4"><MessageCircle className="w-6 h-6 text-primary-500" /></div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{t.contactOptions.badge}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-400" />{t.contactOptions.email}</p>
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-400" />{t.contactOptions.phone}</p>
                  <p className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary-400" />{t.contactOptions.whatsapp}</p>
                  <p className="text-gray-400 mt-2">{t.contactOptions.social}</p>
                </div>
              </div>
            </Animated>
            <Animated delay={200}>
              <div className="premium-card rounded-2xl p-5 sm:p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4"><MapPin className="w-6 h-6 text-primary-500" /></div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{t.location.badge}</h3>
                <p className="font-semibold text-gray-800">{t.location.city}</p>
                <p className="text-sm text-gray-500 mt-1">{t.location.near}</p>
                <p className="text-sm text-gray-400 mt-2">{t.location.address}</p>
              </div>
            </Animated>
            <Animated delay={300}>
              <div className="premium-card rounded-2xl p-5 sm:p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4"><Clock className="w-6 h-6 text-primary-500" /></div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{t.hours.badge}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.hours.text}</p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
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
    </main>
  );
}

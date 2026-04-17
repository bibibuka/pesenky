import { type Lang } from '../i18n';
import Animated from '../components/Animated';

const pageT = {
  de: {
    title: 'Impressum',
    sections: [
      { title: 'Angaben gemäss Art. 3 UWG', content: 'Académie des Talents — Stimmcoaching & Vokalpädagogik\nElena Voronova\nMusterstrasse 1\n8200 Schaffhausen\nSchweiz' },
      { title: 'Kontakt', content: 'Telefon: +41 79 585 95 61\nE-Mail: hello@voicelab-sh.ch' },
      { title: 'Verantwortlich für den Inhalt', content: 'Elena Voronova\nMusterstrasse 1\n8200 Schaffhausen' },
      { title: 'Haftungsausschluss', content: 'Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.' },
      { title: 'Haftung für Links', content: 'Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.' },
      { title: 'Urheberrechte', content: 'Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich Elena Voronova oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.' },
    ],
  },
  en: {
    title: 'Imprint',
    sections: [
      { title: 'Information according to Art. 3 UWG', content: 'Académie des Talents — Voice Coaching & Vocal Pedagogy\nElena Voronova\nMusterstrasse 1\n8200 Schaffhausen\nSwitzerland' },
      { title: 'Contact', content: 'Phone: +41 79 585 95 61\nEmail: hello@voicelab-sh.ch' },
      { title: 'Responsible for Content', content: 'Elena Voronova\nMusterstrasse 1\n8200 Schaffhausen' },
      { title: 'Disclaimer', content: 'The author assumes no liability for the correctness, accuracy, timeliness, reliability and completeness of the information. Liability claims against the author for material or immaterial damages resulting from access to, use or non-use of the published information, misuse of the connection or technical malfunctions are excluded.' },
      { title: 'Liability for Links', content: 'References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is declined. Access to and use of such websites is at the user\'s own risk.' },
      { title: 'Copyright', content: 'The copyright and all other rights to content, images, photos or other files on this website belong exclusively to Elena Voronova or the specifically named rights holders. Written consent of the copyright holder must be obtained in advance for the reproduction of any elements.' },
    ],
  },
  ru: {
    title: 'Импринт',
    sections: [
      { title: 'Информация согласно ст. 3 UWG', content: 'Académie des Talents — Голосовой коучинг и вокальная педагогика\nЕлена Воронова\nMusterstrasse 1\n8200 Шаффхаузен\nШвейцария' },
      { title: 'Контакт', content: 'Телефон: +41 79 585 95 61\nEmail: hello@voicelab-sh.ch' },
      { title: 'Ответственный за содержание', content: 'Елена Воронова\nMusterstrasse 1\n8200 Шаффхаузен' },
      { title: 'Отказ от ответственности', content: 'Автор не несёт ответственности за правильность, точность, актуальность, надёжность и полноту информации. Претензии к автору за ущерб материального или нематериального характера, возникший в результате доступа или использования опубликованной информации, исключаются.' },
      { title: 'Ответственность за ссылки', content: 'Ссылки на сторонние сайты находятся за пределами нашей зоны ответственности. Любая ответственность за такие сайты отклоняется.' },
      { title: 'Авторские права', content: 'Авторские и все другие права на содержание, изображения, фотографии и файлы на этом сайте принадлежат исключительно Елене Вороновой. Для воспроизведения любых элементов требуется предварительное письменное согласие правообладателя.' },
    ],
  },
};

export default function ImpressumPage({ lang }: { lang: Lang }) {
  const t = pageT[lang];
  return (
    <main className="bg-white/20 backdrop-blur-sm relative z-10 min-h-screen pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animated>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">{t.title}</h1>
        </Animated>
        <div className="space-y-8">
          {t.sections.map((s, i) => (
            <Animated key={i} delay={i * 80}>
              <div className="premium-card rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-gray-900 mb-4">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{s.content}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </main>
  );
}

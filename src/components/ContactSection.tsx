import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import Animated from './Animated';
import SectionTitle from './SectionTitle';

interface ContactSectionProps {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    phone: string;
    format: string;
    formatOptions: string[];
    comment: string;
    submit: string;
  };
  info: {
    location: string;
    email: string;
    phone: string;
  };
  phoneLabel: string;
  badgeIcon?: React.ReactNode;
}

export default function ContactSection({ badge, title, highlight, subtitle, form, info, phoneLabel, badgeIcon }: ContactSectionProps) {
  return (
    <section id="contact" className="py-5 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle badge={badge} title={title} highlight={highlight} badgeIcon={badgeIcon || <Mail className="w-3.5 h-3.5" />} />
        <Animated delay={100}>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">{subtitle}</p>
        </Animated>
        <div className="grid lg:grid-cols-5 gap-10">
          <Animated delay={200} className="lg:col-span-3 h-full">
            <div className="premium-card rounded-2xl p-8 h-full">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5 h-full flex flex-col">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">{form.name}</label>
                    <input type="text" className="form-input" placeholder="Max Mustermann" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">{form.email}</label>
                    <input type="email" className="form-input" placeholder="max@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">{form.phone}</label>
                  <input type="tel" className="form-input" placeholder="+41 79 585 95 61" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">{form.format}</label>
                  <select className="form-input cursor-pointer">
                    {form.formatOptions.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 flex flex-col pb-2">
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">{form.comment}</label>
                  <textarea className="form-input flex-1 min-h-[120px] resize-none" rows={4} />
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-lg mt-auto">
                  {form.submit}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </Animated>
          <Animated delay={350} className="lg:col-span-2 h-full">
            <div className="flex flex-col h-full gap-6">
              <div className="premium-card rounded-2xl p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Location</p>
                    <p className="text-gray-800 font-semibold">{info.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Email</p>
                    <p className="text-gray-800 font-semibold">{info.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">{phoneLabel}</p>
                    <p className="text-gray-800 font-semibold">{info.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}

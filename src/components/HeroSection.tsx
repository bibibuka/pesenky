import { type ReactNode } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Animated from './Animated';

interface HeroCta {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'gold';
  isRoute?: boolean;
}

interface HeroSectionProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctas?: HeroCta[];
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  compact?: boolean;
}

export default function HeroSection({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  subtitle,
  ctas = [],
  image,
  imageAlt = '',
  children,
  compact = false,
}: HeroSectionProps) {
  const btnClass = (variant: string) => {
    if (variant === 'gold') return 'btn-gold text-lg group';
    if (variant === 'secondary') return 'btn-secondary text-lg group';
    return 'btn-primary text-lg group';
  };

  return (
    <section className={`relative flex items-center ${compact ? 'pt-20 pb-4 lg:pt-24 lg:pb-5' : 'pt-20 pb-5 lg:pt-24 lg:pb-6'} overflow-hidden`}>
      {/* Angular Decoratives */}
      <div className="absolute top-16 left-8 w-32 h-32 border-2 border-primary-100/40 rotate-45 hidden lg:block" />
      <div className="absolute bottom-12 right-16 w-20 h-20 border-2 border-amber-200/30 rotate-45 hidden lg:block" />
      <div className="absolute top-1/3 right-[10%] w-px h-40 bg-gradient-to-b from-transparent via-primary-200/40 to-transparent hidden lg:block" />

      {/* Diagonal line decoration */}
      <div className="absolute top-[20%] left-[5%] w-40 h-[2px] bg-gradient-to-r from-transparent via-primary-200/30 to-transparent -rotate-30 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 w-full">
        <div className={`grid ${image ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-8 items-center`}>
          {/* Text Content */}
          <div className={`max-w-3xl mx-auto text-center ${image ? 'lg:mx-0 lg:text-left' : ''}`}>
            {badge && (
              <Animated>
                <span className="badge mb-6 inline-flex">
                  {badgeIcon || <Sparkles className="w-3.5 h-3.5" />}
                  {badge}
                </span>
              </Animated>
            )}

            <Animated delay={150}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                {title}{' '}
                <span className="gradient-text">{titleHighlight}</span>
              </h1>
            </Animated>

            <Animated delay={300}>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            </Animated>

            {ctas.length > 0 && (
              <Animated delay={450}>
                <div className={`flex flex-col sm:flex-row items-center ${image ? 'lg:justify-start' : ''} justify-center gap-4`}>
                  {ctas.map((cta, i) =>
                    cta.isRoute ? (
                      <Link key={i} to={cta.href} className={btnClass(cta.variant || 'primary')}>
                        {cta.label}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <a key={i} href={cta.href} className={btnClass(cta.variant || 'primary')}>
                        {cta.label}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )
                  )}
                </div>
              </Animated>
            )}

            {children && <Animated delay={550}>{children}</Animated>}
          </div>

          {/* Image — angular frame */}
          {image && (
            <Animated delay={600} className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/5] max-w-lg mx-auto group">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/30 to-amber-300/30 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                {/* Image with angular frame */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 z-10">
                  <img src={image} alt={imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  {/* Diagonal accent line */}
                  <div className="absolute top-0 right-0 w-24 h-24" style={{ background: 'linear-gradient(135deg, rgba(200,160,78,0.4) 0%, transparent 60%)' }} />
                </div>
              </div>
            </Animated>
          )}
        </div>
      </div>
    </section>
  );
}

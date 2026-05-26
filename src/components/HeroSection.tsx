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
    if (variant === 'gold') return 'btn-gold text-base sm:text-lg group w-full sm:w-auto';
    if (variant === 'secondary') return 'btn-secondary text-base sm:text-lg group w-full sm:w-auto';
    return 'btn-primary text-base sm:text-lg group w-full sm:w-auto';
  };

  return (
    <section className={`relative flex items-center ${compact ? 'pt-20 pb-4 sm:pt-24 lg:pt-[60px] lg:pb-5' : 'pt-20 pb-5 sm:pt-24 lg:pt-[60px] lg:pb-6'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 w-full">
        <div className={`grid ${image ? 'lg:grid-cols-2' : ''} gap-8 sm:gap-12 lg:gap-8 items-center`}>
          {/* Text Content */}
          <div className={`max-w-3xl mx-auto text-center ${image ? 'lg:mx-0 lg:text-left' : ''}`}>
            {badge && (
              <Animated>
                <span className="badge mb-4 sm:mb-6 inline-flex">
                  {badgeIcon || <Sparkles className="w-3.5 h-3.5" />}
                  {badge}
                </span>
              </Animated>
            )}

            <Animated delay={150}>
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 text-balance">
                {title}{' '}
                <span className="gradient-text">{titleHighlight}</span>
              </h1>
            </Animated>

            <Animated delay={300}>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            </Animated>

            {ctas.length > 0 && (
              <Animated delay={450}>
                <div className={`flex flex-col sm:flex-row items-stretch sm:items-center ${image ? 'lg:justify-start' : ''} justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto`}>
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
                <div className="relative w-full h-full rounded-3xl overflow-hidden z-10">
                  <img src={image} alt={imageAlt} loading="eager" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>
            </Animated>
          )}
        </div>
      </div>
    </section>
  );
}

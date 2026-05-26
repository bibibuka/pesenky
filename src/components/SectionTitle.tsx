import { type ReactNode } from 'react';
import { cn } from '../utils/cn';
import Animated from './Animated';

interface SectionTitleProps {
  badge: string;
  title: string;
  highlight: string;
  badgeIcon?: ReactNode;
  className?: string;
}

export default function SectionTitle({ badge, title, highlight, badgeIcon, className }: SectionTitleProps) {
  return (
    <div className={cn('text-center mb-6', className)}>
      {badge && (
        <Animated>
          <span className="badge mb-3 inline-flex">{badgeIcon}{badge}</span>
        </Animated>
      )}
      <Animated delay={100}>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 text-balance leading-tight">
          {title} <span className="gradient-text">{highlight}</span>
        </h2>
      </Animated>
    </div>
  );
}

import { Star, Quote } from 'lucide-react';
import Animated from './Animated';

interface ReviewCardProps {
  name: string;
  role?: string;
  text: string;
  rating?: number;
  delay?: number;
  variant?: 'default' | 'compact' | 'featured';
}

export default function ReviewCard({ name, role, text, rating = 5, delay = 0, variant = 'default' }: ReviewCardProps) {
  if (variant === 'compact') {
    return (
      <Animated delay={delay}>
        <div className="premium-card rounded-xl p-5 h-full flex flex-col">
          <Quote className="w-5 h-5 text-primary-300 mb-3 shrink-0" />
          <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-3">"{text}"</p>
          <div className="flex items-center gap-2 mt-auto">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-amber-400 flex items-center justify-center text-white text-xs font-bold">
              {name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{name}</p>
              {role && <p className="text-xs text-gray-400">{role}</p>}
            </div>
          </div>
        </div>
      </Animated>
    );
  }

  if (variant === 'featured') {
    return (
      <Animated delay={delay}>
        <div className="featured-card rounded-2xl p-8 h-full flex flex-col">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-primary-300 mb-4" />
          <p className="text-gray-700 leading-relaxed italic text-lg flex-1 mb-6">"{text}"</p>
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-primary-200/30">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-amber-400 flex items-center justify-center text-white font-bold text-lg">
              {name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              {role && <p className="text-sm text-gray-500">{role}</p>}
            </div>
          </div>
        </div>
      </Animated>
    );
  }

  return (
    <Animated delay={delay}>
      <div className="premium-card rounded-2xl p-6 h-full flex flex-col">
        <div className="flex gap-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
          ))}
        </div>
        <Quote className="w-5 h-5 text-primary-300 mb-3" />
        <p className="text-gray-600 leading-relaxed italic flex-1 mb-4">"{text}"</p>
        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-amber-400 flex items-center justify-center text-white text-sm font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            {role && <p className="text-xs text-gray-400">{role}</p>}
          </div>
        </div>
      </div>
    </Animated>
  );
}

import ReviewCard from './ReviewCard';

interface ReviewCarouselItem {
  name: string;
  role?: string;
  text: string;
  rating?: number;
}

interface ReviewCarouselProps {
  items: ReviewCarouselItem[];
  variant?: 'default' | 'compact' | 'featured';
  delayStep?: number;
}

export default function ReviewCarousel({
  items,
  variant = 'default',
  delayStep = 100,
}: ReviewCarouselProps) {
  const cardWidthClass =
    variant === 'featured'
      ? 'w-[85vw] sm:w-[24rem] lg:w-[22rem]'
      : variant === 'compact'
        ? 'w-[80vw] sm:w-[21rem] lg:w-[19rem]'
        : 'w-[82vw] sm:w-[21rem] lg:w-[18rem]';

  return (
    <div
      className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {items.map((item, index) => (
        <div key={`${item.name}-${index}`} className={`snap-start shrink-0 ${cardWidthClass}`}>
          <ReviewCard
            name={item.name}
            role={item.role}
            text={item.text}
            rating={item.rating}
            delay={index * delayStep}
            variant={variant}
          />
        </div>
      ))}
    </div>
  );
}

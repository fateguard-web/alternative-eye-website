'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExpertShowcase } from '@/components/ui/ExpertShowcase';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { CarouselDots } from '@/components/ui/CarouselDots';
import { FEATURED_EXPERTS } from '@/lib/data/experts';

export function ExpertsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', updateCurrent);

    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <section className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center gap-4"
        >
          <h2 className="text-5xl font-heading">FEATURED EXPERTS</h2>
          <p className="text-xl text-gray-400 max-w-[700px] leading-relaxed font-body">
            Watch this space! We&apos;ll be revealing our distinguished experts
            as their featured episodes roll out. Each brings unique expertise to
            help us uncover the truth.
          </p>
        </motion.div>

        <div className="relative px-2 sm:px-0">
          <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {FEATURED_EXPERTS.map((expert) => (
                <CarouselItem key={expert.id}>
                  <ExpertShowcase
                    name={expert.name}
                    title={expert.title}
                    description={expert.description}
                    imageSrc={expert.imageSrc}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-8 sm:-left-12" />
            <CarouselNext className="-right-8 sm:-right-12" />
          </Carousel>
          <CarouselDots
            totalSlides={FEATURED_EXPERTS.length}
            currentSlide={current}
            onDotClick={(index) => api?.scrollTo(index)}
          />
        </div>
      </div>
    </section>
  );
}


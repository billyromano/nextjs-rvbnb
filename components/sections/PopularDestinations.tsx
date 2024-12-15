"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { destinations } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function PopularDestinations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.destination-card', {
      scrollTrigger: {
        trigger: '.destinations-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section id="destinations" className="destinations-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most sought-after RV destinations across America
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="destination-card group cursor-pointer"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{destination.rating}</span>
                <span className="text-gray-600">
                  ({destination.reviewCount} reviews)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
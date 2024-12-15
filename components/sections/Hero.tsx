"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline();
    
    tl.from('.hero-content', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });

    tl.from('.search-box', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5');

  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="hero-content text-center text-white max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Adventure Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            Discover the freedom of the open road with our handpicked RV rentals
          </p>

          <div className="search-box bg-white rounded-lg p-4 md:p-6 shadow-xl max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" /> Search RVs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
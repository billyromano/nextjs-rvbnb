"use client";

import { useEffect } from 'react';
import { Search, Calendar, MapPin, Key } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    icon: Search,
    title: "Search & Compare",
    description: "Browse through our extensive collection of RVs and find your perfect match."
  },
  {
    icon: Calendar,
    title: "Book Your Dates",
    description: "Select your travel dates and book instantly with our secure platform."
  },
  {
    icon: MapPin,
    title: "Plan Your Route",
    description: "Get personalized trip planning assistance and campground recommendations."
  },
  {
    icon: Key,
    title: "Hit the Road",
    description: "Pick up your RV and start your adventure with our 24/7 roadside support."
  }
];

export default function HowItWorks() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.step-card', {
      scrollTrigger: {
        trigger: '.how-it-works',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section id="how-it-works" className="how-it-works py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Renting an RV has never been easier. Follow these simple steps to start your adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
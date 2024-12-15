"use client";

import { useEffect } from 'react';
import { Shield, Clock, Truck, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
  {
    icon: Shield,
    title: 'Verified RVs',
    description: 'Every RV in our fleet is thoroughly inspected and verified for quality and safety.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and roadside assistance for peace of mind.',
  },
  {
    icon: Truck,
    title: 'Flexible Pickup',
    description: 'Convenient pickup locations and flexible scheduling to suit your travel plans.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Community',
    description: 'Join our community of passionate RV travelers and experienced hosts.',
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.why-choose-section',
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
    <section className="why-choose-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose RVbnb?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make RV rentals simple, safe, and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
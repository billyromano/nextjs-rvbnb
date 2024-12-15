"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Compass, Menu, X, User, CaravanIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <CaravanIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">RVbnb</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary">
              How It Works
            </Link>
            <Link href="#destinations" className="text-gray-700 hover:text-primary">
              Destinations
            </Link>
            <Link href="#experiences" className="text-gray-700 hover:text-primary">
              Experiences
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary">
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">
              <User className="mr-2 h-4 w-4" /> Sign In
            </Button>
            <Button>
              <Compass className="mr-2 h-4 w-4" /> List Your RV
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="#how-it-works" className="text-gray-700 hover:text-primary">
                How It Works
              </Link>
              <Link href="#destinations" className="text-gray-700 hover:text-primary">
                Destinations
              </Link>
              <Link href="#experiences" className="text-gray-700 hover:text-primary">
                Experiences
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-primary">
                Pricing
              </Link>
              <Button variant="ghost" className="justify-start">
                <User className="mr-2 h-4 w-4" /> Sign In
              </Button>
              <Button className="justify-start">
                <Compass className="mr-2 h-4 w-4" /> List Your RV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
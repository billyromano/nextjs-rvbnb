import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import ExploreRV from '@/components/sections/ExploreRV';
import PopularDestinations from '@/components/sections/PopularDestinations';
import RVExperiences from '@/components/sections/RVExperiences';
import RoadStories from '@/components/sections/RoadStories';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <HowItWorks />
      <ExploreRV />
      <PopularDestinations />
      <RVExperiences />
      <RoadStories />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
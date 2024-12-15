"use client";

import { useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Stars,
  Html,
  useProgress,
} from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import AirstreamModel from '@/components/3d/AirstreamModel';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-lg">
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

function Scene() {
  return (
    <>
      <Environment preset="sunset" />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
        castShadow
      />
      <spotLight
        position={[-10, 5, -10]}
        angle={0.15}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
      <Suspense fallback={<Loader />}>
        <AirstreamModel />
      </Suspense>
    </>
  );
}

export default function ExploreRV() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Experience Your Next RV in 3D
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Take a virtual tour of our premium RVs. Explore every detail
              and feature before you book your adventure.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">360°</span>
                </div>
                <div>
                  <h3 className="font-semibold">Interactive 3D View</h3>
                  <p className="text-gray-400">Rotate and zoom to explore details</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">HD</span>
                </div>
                <div>
                  <h3 className="font-semibold">High-Definition Details</h3>
                  <p className="text-gray-400">See every feature in crystal clear quality</p>
                </div>
              </div>
            </div>
            <Button className="mt-8" size="lg">
              View All Models
            </Button>
          </div>

          <div className="h-[600px] bg-gray-900 rounded-xl overflow-hidden">
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[5, 2, 5]} />
              <OrbitControls
                enableZoom={true}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
                minDistance={3}
                maxDistance={10}
              />
              <Scene />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
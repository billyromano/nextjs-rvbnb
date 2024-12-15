"use client";

import { useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export default function AirstreamModel() {
  // Using a more reliable model source
  const gltf = useLoader(
    GLTFLoader,
    'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMilkTruck/glTF/CesiumMilkTruck.gltf'
  );

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // Enhance materials for better visual quality
          if (child.material) {
            child.material.roughness = 0.7;
            child.material.metalness = 0.3;
          }
        }
      });
    }
  }, [gltf]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gltf.scene) {
      // Smoother rotation animation
      gltf.scene.rotation.y = Math.sin(time * 0.15) * 0.1;
      // Gentle floating animation
      gltf.scene.position.y = Math.sin(time * 0.5) * 0.05 - 1;
    }
  });

  return <primitive object={gltf.scene} scale={0.8} />;
}
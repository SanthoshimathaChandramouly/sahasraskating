"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export default function FloatingImage({ url, position = [0, 0, 0], scale = [4, 5, 1] }: { url: string, position?: [number, number, number], scale?: [number, number, number] }) {
  const texture = useLoader(THREE.TextureLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle rotation follow mouse
      const x = (state.mouse.x * Math.PI) / 10;
      const y = (state.mouse.y * Math.PI) / 10;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x, 0.05);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <planeGeometry args={[1, 1]} />
        <meshPhysicalMaterial 
          map={texture} 
          transparent 
          opacity={0.6} 
          roughness={0.1}
          metalness={0.2}
          transmission={0.3}
          thickness={0.5}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}

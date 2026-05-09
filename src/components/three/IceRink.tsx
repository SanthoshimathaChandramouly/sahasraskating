"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshReflectorMaterial, Sparkles, Float, Stars, Environment } from "@react-three/drei";
import * as THREE from "three";

export default function IceRink() {
  const lightRef = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    if (lightRef.current) {
      // Create an elegant figure-8 motion for the spotlight
      const t = clock.elapsedTime * 0.5;
      lightRef.current.position.x = Math.sin(t) * 8;
      lightRef.current.position.z = Math.sin(t) * Math.cos(t) * 8;
    }
  });

  return (
    <>
      <color attach="background" args={["#02010a"]} />
      <fog attach="fog" args={["#02010a", 10, 30]} />
      
      {/* Ambient Lighting */}
      <ambientLight intensity={0.5} color="#d100ff" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00d2ff" />
      <directionalLight position={[-10, 5, -5]} intensity={1.2} color="#ff007f" />
      
      {/* Moving Spotlight */}
      <spotLight
        ref={lightRef}
        position={[0, 15, 0]}
        angle={0.4}
        penumbra={1}
        intensity={8}
        color="#ffffff"
        castShadow
      />

      {/* Atmospheric Particles (Snow / Ice Crystals) */}
      <Sparkles count={800} scale={15} size={3} speed={0.5} color="#00d2ff" opacity={0.8} />
      <Sparkles count={400} scale={20} size={2} speed={0.3} color="#ff007f" opacity={0.6} />

      {/* Reflective Ice Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={100}
          roughness={0.15}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0a1128"
          metalness={0.5}
          mirror={0.8}
        />
      </mesh>

      {/* A central elegant 3D crystal (Placeholder for Skater/Skate) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 1, 0]} castShadow>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            transmission={0.9} 
            opacity={1} 
            metalness={0.1} 
            roughness={0} 
            ior={1.5} 
            thickness={2}
          />
        </mesh>
      </Float>
      
      {/* Environment map for reflections */}
      <Environment preset="night" />
    </>
  );
}

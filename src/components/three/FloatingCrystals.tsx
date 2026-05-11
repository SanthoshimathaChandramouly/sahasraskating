"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function Crystal({ position, color, speed = 1, scale = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * speed * 0.4;
      meshRef.current.rotation.y = clock.elapsedTime * speed * 0.6;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={color}
          transmission={0.85}
          opacity={1}
          metalness={0.1}
          roughness={0.05}
          ior={1.8}
          thickness={1}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function FloatingImageSub({ url, position = [0, 0, 0], scale = [4, 5, 1] }: { url: string, position?: [number, number, number], scale?: [number, number, number] }) {
  const texture = useLoader(THREE.TextureLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const x = (state.mouse.x * Math.PI) / 20;
      const y = (state.mouse.y * Math.PI) / 20;
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
          opacity={0.4} 
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

function OlympicRing() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.2;
    }
  });

  const ringColors = ["#87ceeb", "#ffd700", "#d100ff", "#ff8fab", "#ffffff"];

  return (
    <group ref={groupRef}>
      {ringColors.map((color, i) => (
        <mesh key={i} position={[(i - 2) * 1.2, Math.sin(i * 1.2) * 0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.5, 0.06, 16, 100]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.8} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function SkaterSilhouette() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.elapsedTime;
      groupRef.current.rotation.y = t * 1.2; // spin
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.25, 1.2, 8]} />
        <meshStandardMaterial color="#ff8fab" emissive="#ff8fab" emissiveIntensity={0.3} metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.85, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.4} />
      </mesh>
      {/* Arms out — spiral position */}
      <mesh position={[0.6, 0.1, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#87ceeb" emissive="#87ceeb" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[-0.6, 0.1, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#87ceeb" emissive="#87ceeb" emissiveIntensity={0.4} />
      </mesh>
      {/* Leg extended */}
      <mesh position={[0.2, -0.9, 0.3]} rotation={[0.5, 0, 0.3]}>
        <cylinderGeometry args={[0.06, 0.06, 0.9, 8]} />
        <meshStandardMaterial color="#ff8fab" emissive="#ff8fab" emissiveIntensity={0.2} />
      </mesh>
      {/* Standing leg */}
      <mesh position={[0, -1.0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.7, 8]} />
        <meshStandardMaterial color="#ff8fab" emissive="#ff8fab" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export function CoachesBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <Suspense fallback={null}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#87ceeb" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d100ff" />
        <Stars radius={80} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />
        
        {/* Large 3D Floating Action Photo in background */}
        <FloatingImageSub url="/photos/action1.JPG" position={[0, 0, -8]} scale={[12, 15, 1]} />
        
        <Crystal position={[-6, 3, -3]} color="#87ceeb" speed={0.8} scale={0.4} />
        <Crystal position={[6, -2, -2]} color="#d100ff" speed={1.2} scale={0.6} />
        <Crystal position={[-4, -3, -4]} color="#ffd700" speed={0.6} scale={0.5} />
        <Crystal position={[5, 4, -5]} color="#ff8fab" speed={1.0} scale={0.3} />
        <Crystal position={[0, -4, -3]} color="#87ceeb" speed={0.9} scale={0.45} />
        <Crystal position={[-7, 0, -6]} color="#ffd700" speed={0.7} scale={0.35} />
        <Crystal position={[7, 1, -4]} color="#e0e5ec" speed={1.1} scale={0.4} />
      </Suspense>
    </Canvas>
  );
}

export function FutureDreamBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <Suspense fallback={null}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={2} color="#d100ff" />
        <pointLight position={[5, 5, 5]} intensity={1} color="#87ceeb" />
        <Stars radius={60} depth={40} count={3000} factor={4} saturation={0} fade speed={1} />
        <OlympicRing />
        <Crystal position={[-5, 2, -3]} color="#ffd700" speed={0.5} scale={0.3} />
        <Crystal position={[5, -2, -3]} color="#87ceeb" speed={0.7} scale={0.3} />
      </Suspense>
    </Canvas>
  );
}

export function HeroSkater() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <Suspense fallback={null}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#87ceeb" />
        <pointLight position={[-3, -3, 3]} intensity={1} color="#d100ff" />
        <SkaterSilhouette />
      </Suspense>
    </Canvas>
  );
}

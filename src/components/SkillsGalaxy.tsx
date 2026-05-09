"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_CATEGORIES = [
  { id: "jumps", name: "Jumps", color: "#87ceeb", desc: "Axel, Lutz, Flip, Loop, Salchow, Toe Loop — Sahasra completed the Axel at age 8 and the Double Axel at age 10!", videoUrl: "" },
  { id: "spins", name: "Spins", color: "#e0e5ec", desc: "Camel, Sit, Upright, Biellmann, Layback", videoUrl: "" },
  { id: "footwork", name: "Footwork", color: "#a89f91", desc: "Step sequences, turns, brackets, counters, rockers", videoUrl: "" },
  { id: "edges", name: "Edge Quality", color: "#87ceeb", desc: "Deep, clean, and silent edges with effortless flow", videoUrl: "" },
  { id: "flexibility", name: "Flexibility", color: "#e0e5ec", desc: "Extensions, spirals, and intricate positions", videoUrl: "" },
  { id: "artistry", name: "Artistry", color: "#ffd700", desc: "Musicality, expression, and emotional connection", videoUrl: "" },
  { id: "dance", name: "Dance", color: "#a89f91", desc: "Choreographic sequences and rhythm", videoUrl: "" },
  { id: "programs", name: "Programs", color: "#87ceeb", desc: "Short program and Free skate choreography", videoUrl: "https://www.youtube.com/embed/ksVSK5e-ZDU" },
];

function SkillNodes({ onSelect }: { onSelect: (index: number) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {SKILL_CATEGORIES.map((category, i) => {
        const angle = (i / SKILL_CATEGORIES.length) * Math.PI * 2;
        const radius = 6;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle * 3) * 1.5;

        return (
          <Float key={category.id} speed={2} rotationIntensity={1} floatIntensity={2} position={[x, y, z]}>
            <mesh 
              onClick={(e) => {
                e.stopPropagation();
                onSelect(i);
              }}
              onPointerOver={(e) => {
                document.body.style.cursor = 'pointer';
                const mesh = e.object as THREE.Mesh;
                const material = mesh.material as THREE.MeshPhysicalMaterial;
                material.emissiveIntensity = 1;
              }}
              onPointerOut={(e) => {
                document.body.style.cursor = 'auto';
                const mesh = e.object as THREE.Mesh;
                const material = mesh.material as THREE.MeshPhysicalMaterial;
                material.emissiveIntensity = 0.2;
              }}
            >
              <icosahedronGeometry args={[0.8, 0]} />
              <meshPhysicalMaterial 
                color={category.color} 
                transmission={0.8}
                opacity={1}
                metalness={0.2}
                roughness={0.1}
                ior={1.5}
                thickness={1}
                emissive={category.color}
                emissiveIntensity={0.2}
              />
            </mesh>
            <Text
              position={[0, -1.2, 0]}
              fontSize={0.4}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {category.name}
            </Text>
          </Float>
        );
      })}
    </group>
  );
}

export default function SkillsGalaxy() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="explore-skills" style={{ position: 'relative', width: '100%', height: '100vh', background: 'var(--color-bg-dark)', overflow: 'hidden' }}>
      
      {/* 3D Canvas */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Canvas camera={{ position: [0, 5, 12], fov: 60 }}>
          <Suspense fallback={null}>
            <color attach="background" args={["#050814"]} />
            <fog attach="fog" args={["#050814", 10, 25]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            
            <SkillNodes onSelect={(idx) => setSelectedIndex(idx)} />
            <OrbitControls 
              enablePan={false} 
              enableZoom={false} 
              minPolarAngle={Math.PI / 4} 
              maxPolarAngle={Math.PI / 2} 
              autoRotate 
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div style={{ position: 'absolute', top: '10%', left: '0', width: '100%', textAlign: 'center', pointerEvents: 'none' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
          color: 'var(--color-ice-white)',
          letterSpacing: '0.1em',
          textShadow: '0 0 20px rgba(135, 206, 235, 0.5)'
        }}>
          Skill Galaxy
        </h2>
        <p style={{ color: 'var(--color-silver-shimmer)', marginTop: '1rem', letterSpacing: '0.05em' }}>
          Drag to rotate. Click a crystal to explore.
        </p>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="glass-panel"
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '800px',
              padding: '2.5rem',
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: 'rgba(5, 8, 20, 0.8)'
            }}
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-ice-white)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                opacity: 0.7
              }}
            >
              &times;
            </button>

            <div>
              <h3 style={{ fontSize: '2rem', color: SKILL_CATEGORIES[selectedIndex].color, marginBottom: '0.5rem' }}>
                {SKILL_CATEGORIES[selectedIndex].name}
              </h3>
              <p style={{ color: 'var(--color-silver-shimmer)', fontSize: '1.1rem', fontWeight: 300 }}>
                {SKILL_CATEGORIES[selectedIndex].desc}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--color-ice-white)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Technical Notes</h4>
                <p style={{ color: 'var(--color-silver-shimmer)', fontSize: '0.85rem' }}>Content coming soon. Admins can upload specific technical breakdowns here.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--color-ice-white)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Coach Feedback</h4>
                <p style={{ color: 'var(--color-silver-shimmer)', fontSize: '0.85rem' }}>Awaiting coach reviews and performance metric logs.</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              {SKILL_CATEGORIES[selectedIndex].videoUrl ? (
                <div style={{ aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={SKILL_CATEGORIES[selectedIndex].videoUrl}
                    title={`${SKILL_CATEGORIES[selectedIndex].name} video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: 'block' }}
                  />
                </div>
              ) : (
                <div style={{ 
                  padding: '2rem', 
                  textAlign: 'center', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderRadius: '12px',
                  border: '1px dashed rgba(135, 206, 235, 0.3)'
                }}>
                  <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎬</p>
                  <p style={{ color: 'var(--color-crystal-blue)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    No video yet for {SKILL_CATEGORIES[selectedIndex].name}
                  </p>
                  <p style={{ color: 'var(--color-silver-shimmer)', fontSize: '0.8rem' }}>
                    Share a YouTube link for this skill and it will appear here!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

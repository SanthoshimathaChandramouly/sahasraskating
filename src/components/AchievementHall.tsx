"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Box, MeshTransmissionMaterial, Image as DreiImage } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function TrophyCases() {
  return (
    <>
      <ambientLight intensity={0.2} color="#ffd700" />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      
      {[-4, 0, 4].map((x, i) => (
        <group key={i} position={[x, -2, -5]}>
          {/* Pedestal */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[1, 1.2, 2, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
          </mesh>
          
          {/* Glass Case */}
          <mesh position={[0, 2.5, 0]}>
            <boxGeometry args={[1.8, 3, 1.8]} />
            <MeshTransmissionMaterial 
              transmission={0.9} 
              opacity={1} 
              roughness={0} 
              ior={1.5} 
              thickness={0.1}
              color="#ffffff"
            />
          </mesh>

          {/* Floating Element inside */}
          {i === 1 ? (
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <mesh position={[0, 2.5, 0]}>
                <DreiImage url="/photos/5 year medals.jpg" scale={[1.2, 1.8]} />
              </mesh>
            </Float>
          ) : (
            <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
              <mesh position={[0, 2.5, 0]}>
                <octahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.5} metalness={1} roughness={0.1} />
              </mesh>
            </Float>
          )}
          
          {/* Spotlight pointing at the element */}
          <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={2} color="#ffd700" castShadow />
        </group>
      ))}
    </>
  );
}

const Counter = ({ end, label }: { end: number, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <motion.h3 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", damping: 12 }}
        style={{ fontSize: '3.5rem', color: 'var(--color-gold-accent)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}
      >
        {count}+
      </motion.h3>
      <p style={{ color: 'var(--color-ice-white)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
        {label}
      </p>
    </div>
  );
};

export default function AchievementHall() {
  return (
    <section id="view-achievements" style={{ position: 'relative', width: '100%', minHeight: '100vh', background: 'var(--color-bg-dark)', overflow: 'hidden' }}>
      
      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
          <color attach="background" args={["#020202"]} />
          <fog attach="fog" args={["#020202", 5, 15]} />
          <TrophyCases />
        </Canvas>
      </div>

      <div style={{ position: 'relative', zIndex: 10, padding: '8rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--color-ice-white)',
            marginBottom: '4rem',
            textAlign: 'center',
            textShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
          }}
        >
          Hall of Achievements
        </motion.h2>

        <div className="glass-panel" style={{ 
          width: '100%', 
          maxWidth: '1000px', 
          padding: '3rem', 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-around',
          gap: '2rem',
          background: 'rgba(5, 8, 20, 0.6)'
        }}>
          <Counter end={6} label="Years Competing" />
          <Counter end={10} label="Podium Finishes" />
          <Counter end={2} label="Silver Tests Passed" />
          <Counter end={1} label="Best Overall 2026" />
          <Counter end={2} label="Axels Mastered" />
        </div>
        
        <div style={{ marginTop: '4rem', width: '100%', maxWidth: '800px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              "🏅 Podium Finishes — 10+ times across competitions",
              "🏆 Best Overall Performer — 2026",
              "⛸️ Completed Silver in Moves in the Field",
              "💃 Completed Silver in Ice Dance",
              "🌟 Double Axel — Landed in 2026",
              "🔥 Single Axel — Mastered at age 8"
            ].map((milestone, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderLeft: '2px solid var(--color-gold-accent)'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold-accent)' }} />
                <span style={{ color: 'var(--color-silver-shimmer)', fontSize: '1.1rem' }}>{milestone}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

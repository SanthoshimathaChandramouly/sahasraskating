"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import IceRink from "./three/IceRink";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-container" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* 3D Canvas Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas shadows camera={{ position: [0, 2, 10], fov: 45 }}>
          <Suspense fallback={null}>
            <IceRink />
          </Suspense>
        </Canvas>
      </div>



      {/* Typography Overlay */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'radial-gradient(circle at center, transparent 0%, rgba(5, 8, 20, 0.6) 100%)',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          style={{ 
            marginBottom: '2rem', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            width: '250px', 
            height: '250px', 
            border: '4px solid var(--color-gold-accent)', 
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)' 
          }}
        >
          <Image src="/photos/trophy.JPG" alt="Sahasra Trophy" width={250} height={250} style={{ objectFit: 'cover', objectPosition: 'top' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          {/* Creative animated name */}
          <h1 style={{ marginBottom: '0.25rem', lineHeight: 1 }}>
            {/* SAHASRA — big gradient letters */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.05em' }}>
              {"SAHASRA".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.08, ease: "easeOut" }}
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    background: `linear-gradient(180deg, #ffffff ${i * 10}%, #87ceeb 50%, #d100ff 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 8px rgba(135,206,235,0.6))',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Decorative divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #ffd700, #d100ff, #87ceeb, transparent)',
                margin: '0.3rem auto',
                maxWidth: '500px',
                borderRadius: '2px',
              }}
            />

            {/* RAMASAMY — elegant smaller letters */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.08em' }}>
              {"RAMASAMY".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + i * 0.07, ease: "easeOut" }}
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                    fontWeight: 300,
                    textTransform: 'uppercase',
                    letterSpacing: '0.35em',
                    background: `linear-gradient(180deg, #ffd700, #ffaa00)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.5))',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </h1>

          <h2 style={{
            fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)',
            color: 'var(--color-crystal-blue)',
            fontWeight: 300,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            marginTop: '1rem'
          }}>
            Grace &bull; Discipline &bull; Flight on Ice
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          style={{
            maxWidth: '600px',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'var(--color-silver-shimmer)',
            marginBottom: '3rem',
            fontWeight: 300
          }}
        >
          A journey built on hard work, passion, resilience, and artistry — from first steps on ice at age 5 to landing the Double Axel in 2026.
        </motion.p>

        <motion.div 
          className="cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {['Watch Journey', 'View Achievements', 'Explore Skills', 'Contact'].map((text, i) => (
            <a 
              key={text}
              href={`#${text.toLowerCase().replace(' ', '-')}`}
              className="glass-panel"
              style={{
                padding: '0.8rem 1.5rem',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--glass-bg)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {text}
            </a>
          ))}
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: 0.6
          }}
        >
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--color-ice-white), transparent)' }} />
        </motion.div>
      </div>
    </section>
  );
}

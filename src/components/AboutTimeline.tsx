"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const timelineEvents = [
  {
    age: "Age 5",
    year: "2019",
    title: "First Steps on Ice",
    description: "Sahasra's journey began with her very first steps on the ice, discovering a lifelong passion."
  },
  {
    age: "Age 6",
    year: "2020",
    title: "Building the Foundation",
    description: "Developing fundamental skills, balance, and edge control while falling in love with the sport."
  },
  {
    age: "Age 8",
    year: "2022",
    title: "Completed Axel",
    description: "A major milestone achieved! Mastered the single Axel jump, demonstrating exceptional athletic progression."
  },
  {
    age: "Age 9",
    year: "2023",
    title: "Competitive Excellence",
    description: "Participating in competitions and performing routines with increasing artistic expression and technical difficulty."
  },
  {
    age: "Age 11",
    year: "2026",
    title: "Double Axel Achieved",
    description: "Successfully landed the Double Axel in 2026 — an extraordinary feat, cementing her status as an elite competitive skater."
  }
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="watch-journey" ref={containerRef} style={{ position: 'relative', width: '100%', minHeight: '150vh', padding: '10rem 2rem', background: 'var(--color-bg-dark)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            textAlign: 'center', 
            marginBottom: '6rem',
            color: 'var(--color-ice-white)',
            textShadow: '0 0 20px var(--color-soft-violet-glow)'
          }}
        >
          The Journey
        </motion.h2>

        {/* The Timeline Line */}
        <div style={{ position: 'absolute', left: '50%', top: '200px', bottom: '100px', width: '2px', background: 'rgba(255,255,255,0.1)', transform: 'translateX(-50%)' }}>
          <motion.div 
            style={{ 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(to bottom, var(--color-crystal-blue), var(--color-soft-violet))',
              scaleY: pathLength,
              transformOrigin: 'top'
            }} 
          />
        </div>

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', position: 'relative', zIndex: 10 }}>
          {timelineEvents.map((item, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                style={{ 
                  display: 'flex', 
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4rem',
                  width: '100%'
                }}
              >
                {/* Content Side */}
                <div style={{ flex: 1, textAlign: isEven ? 'right' : 'left' }}>
                  <motion.div
                    animate={{ scale: isHovered ? 1.05 : 1, color: isHovered ? 'var(--color-crystal-blue)' : 'var(--color-ice-white)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-gold-accent)' }}>{item.year}</h3>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 300 }}>{item.title}</h4>
                    <p style={{ color: 'var(--color-silver-shimmer)', lineHeight: 1.6, fontWeight: 300 }}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Node */}
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  background: isHovered ? 'var(--color-crystal-blue)' : 'var(--color-bg-dark)',
                  border: `2px solid ${isHovered ? 'var(--color-ice-white)' : 'var(--color-crystal-blue)'}`,
                  boxShadow: isHovered ? '0 0 20px var(--color-crystal-blue)' : 'none',
                  transition: 'all 0.3s ease',
                  zIndex: 20
                }} />

                {/* Image Side */}
                <div style={{ flex: 1, display: 'flex', justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
                  <motion.div
                    animate={{ 
                      opacity: isHovered ? 1 : 0.5, 
                      scale: isHovered ? 1.05 : 1,
                      filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)'
                    }}
                    transition={{ duration: 0.4 }}
                    className="glass-panel"
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      aspectRatio: '4/3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <Image 
                      src={
                        index === 0 ? "/photos/5 year medals.jpg" :
                        index === 1 ? "/photos/6 years.JPG" :
                        index === 2 ? "/photos/9 years.JPG" :
                        index === 3 ? "/photos/action1.JPG" :
                        "/photos/trophy.JPG"
                      } 
                      alt="Memory" 
                      fill 
                      style={{ objectFit: 'cover', objectPosition: 'top' }} 
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(209, 0, 255, 0.2), transparent)', zIndex: 1 }} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

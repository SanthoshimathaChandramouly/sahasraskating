"use client";

import { motion } from "framer-motion";
import { CoachesBackground, FutureDreamBackground } from "./three/FloatingCrystals";

export default function AdditionalSections() {
  return (
    <>
      {/* Professional Profile */}
      <section style={{ padding: '8rem 2rem', background: 'var(--color-bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', color: 'var(--color-ice-white)', marginBottom: '3rem', textAlign: 'center' }}
          >
            Professional Profile
          </motion.h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', color: 'var(--color-silver-shimmer)' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-crystal-blue)', marginBottom: '1rem' }}>Biography</h3>
              <p style={{ lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Born with an innate passion for movement, Sahasra took her first steps on the ice at age 5. What started as weekend public sessions quickly blossomed into an elite competitive journey. Known for her powerful jumps and emotional musicality, she has rapidly ascended the ranks of national figure skating.
              </p>
              <button className="glass-panel" style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--color-crystal-blue)', color: 'var(--color-ice-white)', cursor: 'pointer' }}>
                Download Media Kit (PDF)
              </button>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-ice-white)', marginBottom: '1rem' }}>Training Schedule</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontWeight: 300 }}>
                <li><span style={{ color: 'var(--color-gold-accent)' }}>Mon-Fri:</span> 5:00 AM - 8:00 AM (On-ice)</li>
                <li><span style={{ color: 'var(--color-gold-accent)' }}>Mon/Wed/Fri:</span> 4:00 PM - 5:30 PM (Off-ice conditioning)</li>
                <li><span style={{ color: 'var(--color-gold-accent)' }}>Tue/Thu:</span> 4:00 PM - 5:00 PM (Ballet/Dance)</li>
                <li><span style={{ color: 'var(--color-gold-accent)' }}>Sat:</span> 7:00 AM - 10:00 AM (Program run-throughs)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches / Mentors */}
      <section style={{ padding: '8rem 2rem', background: 'linear-gradient(to bottom, var(--color-bg-dark), #0a1128)', position: 'relative', overflow: 'hidden' }}>
        {/* 3D floating crystals background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}>
          <CoachesBackground />
        </div>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', color: 'var(--color-ice-white)', marginBottom: '1rem' }}
          >
            The Team Behind the Dream
          </motion.h2>
          <p style={{ color: 'var(--color-silver-shimmer)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Excellence is never achieved alone. Grateful for the guidance, technical expertise, and unwavering support of an incredible coaching team.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { name: "Mrs. Jessica Pimentel", role: "Head Coach", specialty: "Choreography & Program Direction", icon: "👑", color: "var(--color-gold-accent)" },
              { name: "Mr. Geoffrey Warner", role: "Jump Coach", specialty: "Jumps & Technical Elements", icon: "🚀", color: "var(--color-crystal-blue)" },
              { name: "Miss Katie Hewitt", role: "Spin Coach", specialty: "Spins & Positions", icon: "🌀", color: "#e0e5ec" },
              { name: "Mr. Justin Ross", role: "Ice Dance Coach", specialty: "Ice Dance & Rhythm", icon: "💃", color: "#ff8fab" },
              { name: "Miss Elena", role: "Skating Skills Coach", specialty: "Edges, Footwork & Skating Skills", icon: "⛸️", color: "var(--color-soft-violet)" },
            ].map((coach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="glass-panel"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <div style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: `2px solid ${coach.color}`,
                  boxShadow: `0 0 20px ${coach.color}44`,
                  marginBottom: '1.5rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem'
                }}>
                  {coach.icon}
                </div>
                <h4 style={{ color: 'var(--color-ice-white)', fontSize: '1.1rem', marginBottom: '0.4rem', fontWeight: 600 }}>{coach.name}</h4>
                <p style={{ color: coach.color, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{coach.role}</p>
                <p style={{ color: 'var(--color-silver-shimmer)', fontSize: '0.85rem', fontWeight: 300 }}>{coach.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Dream */}
      <section style={{ padding: '12rem 2rem', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Dark base so text is always readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, #0d0520 0%, #050814 100%)', zIndex: 0 }} />
        {/* 3D Olympic rings animation */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.7 }}>
          <FutureDreamBackground />
        </div>
        {/* Text overlay on top */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ 
              fontSize: 'clamp(5rem, 12vw, 10rem)', 
              background: 'linear-gradient(135deg, #ffd700, #ffaa00, #ffd700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '1rem',
              filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))',
              fontWeight: 900,
            }}
          >
            2034
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ 
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', 
              fontStyle: 'italic', 
              fontFamily: 'var(--font-serif)',
              color: '#ffffff',
              textShadow: '0px 0px 10px rgba(0,0,0,1), 0px 0px 20px rgba(0,0,0,1), 0px 0px 30px rgba(255,255,255,0.5)',
              letterSpacing: '0.05em'
            }}
          >
            &ldquo;The journey has only begun.&rdquo;
          </motion.p>
        </div>
      </section>
    </>
  );
}

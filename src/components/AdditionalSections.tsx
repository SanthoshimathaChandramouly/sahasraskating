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
              <a 
                href="#contact" 
                className="glass-panel" 
                style={{ 
                  display: 'inline-block',
                  padding: '0.8rem 1.5rem', 
                  border: '1px solid var(--color-crystal-blue)', 
                  color: 'var(--color-ice-white)', 
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Media & Sponsorship Inquiries
              </a>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-ice-white)', marginBottom: '1rem' }}>Training Schedule</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontWeight: 300 }}>
                <li><span style={{ color: 'var(--color-gold-accent)' }}>Mon-Fri:</span> 5:00 AM - 8:00 AM (On-ice)</li>
                <li><span style={{ color: 'var(--color-gold-accent)' }}>Mon/Wed/Sun:</span> 5:00 PM - 6:00 PM (Off-ice conditioning)</li>
                <li><span style={{ color: 'var(--color-gold-accent)' }}>Tue/Fri/Sat:</span> 4:00 PM - 5:00 PM (Ballet/Dance/Gymnastics)</li>
                <li><span style={{ color: 'var(--color-gold-accent)' }}>Sat:</span> 5:00 AM - 8:00 AM (Program run-throughs)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal - Innovative Section */}
      <section id="technical-arsenal" style={{ padding: '10rem 2rem', background: 'linear-gradient(to bottom, var(--color-bg-dark), #060b1a)', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient 3D crystals remain for atmospheric depth */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4 }}>
          <CoachesBackground />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-ice-white)', marginBottom: '1rem', letterSpacing: '0.1em' }}
            >
              TECHNICAL ARSENAL
            </motion.h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--color-crystal-blue)', margin: '0 auto', borderRadius: '2px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* Jump Mechanics Visualization */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel" 
              style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
            >
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-ice-white)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-gold-accent)' }}>⚡</span> AXEL MECHANICS
              </h3>
              
              <div style={{ position: 'relative', height: '200px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* SVG Motion Graphic */}
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <motion.circle 
                    cx="100" cy="100" r="80" 
                    fill="none" stroke="rgba(135, 206, 235, 0.2)" strokeWidth="2" 
                  />
                  <motion.circle 
                    cx="100" cy="100" r="80" 
                    fill="none" stroke="var(--color-crystal-blue)" strokeWidth="4" 
                    strokeDasharray="502"
                    animate={{ strokeDashoffset: [502, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M100 20 L100 180 M20 100 L180 100" 
                    stroke="rgba(255,255,255,0.1)" strokeWidth="1" 
                  />
                  {/* Rotating 'Blade' element */}
                  <motion.g animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} style={{ originX: '100px', originY: '100px' }}>
                    <rect x="98" y="20" width="4" height="20" fill="var(--color-gold-accent)" rx="2" />
                    <circle cx="100" cy="20" r="6" fill="var(--color-gold-accent)" filter="blur(4px)" />
                  </motion.g>
                </svg>
                <div style={{ position: 'absolute', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-ice-white)' }}>2.5</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-silver-shimmer)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Rotations</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.7rem', color: 'var(--color-crystal-blue)', marginBottom: '0.25rem' }}>AIR TIME</p>
                  <p style={{ fontSize: '1.2rem', color: 'var(--color-ice-white)' }}>0.68s</p>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.7rem', color: 'var(--color-crystal-blue)', marginBottom: '0.25rem' }}>VERTICAL</p>
                  <p style={{ fontSize: '1.2rem', color: 'var(--color-ice-white)' }}>24.5 in</p>
                </div>
              </div>
            </motion.div>

            {/* Performance Bio-Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel" 
              style={{ padding: '3rem' }}
            >
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-ice-white)', marginBottom: '2.5rem' }}>ELITE METRICS</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { label: "Edge Precision", value: 70, color: "var(--color-crystal-blue)" },
                  { label: "Musical Artistry", value: 80, color: "var(--color-gold-accent)" },
                  { label: "Spin Velocity", value: 75, color: "#d100ff" },
                  { label: "Core Stability", value: 80, color: "#ff8fab" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--color-silver-shimmer)' }}>{stat.label}</span>
                      <span style={{ color: 'var(--color-ice-white)', fontWeight: 600 }}>{stat.value}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
                        style={{ height: '100%', background: stat.color, boxShadow: `0 0 10px ${stat.color}88` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Training Intensity Dashboard */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel" 
              style={{ padding: '3rem' }}
            >
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-ice-white)', marginBottom: '2rem' }}>TRAINING LOAD</h3>
              
              <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '3px solid var(--color-gold-accent)' }}>
                  <div style={{ fontSize: '2rem' }}>❄️</div>
                  <div>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-ice-white)', marginBottom: '0.2rem' }}>25+ Hours/Week</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-silver-shimmer)' }}>Precision On-Ice Mastery</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '3px solid var(--color-crystal-blue)' }}>
                  <div style={{ fontSize: '2rem' }}>🧘</div>
                  <div>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-ice-white)', marginBottom: '0.2rem' }}>Core & Flexibility</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-silver-shimmer)' }}>Off-Ice Strength Conditioning</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '3px solid #d100ff' }}>
                  <div style={{ fontSize: '2rem' }}>🎭</div>
                  <div>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-ice-white)', marginBottom: '0.2rem' }}>Artistic Ballet</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-silver-shimmer)' }}>Musicality & Choreography</p>
                  </div>
                </div>
              </div>
            </motion.div>
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

      {/* Contact Section */}
      <section id="contact" style={{ padding: '8rem 2rem', background: 'var(--color-bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', color: 'var(--color-ice-white)', marginBottom: '1.5rem' }}
          >
            GET IN TOUCH
          </motion.h2>

          
          <div className="glass-panel" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--color-gold-accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Email</h4>
              <a href="mailto:sahasrar2015@gmail.com" style={{ fontSize: '1.2rem', color: 'var(--color-ice-white)', textDecoration: 'underline' }}>sahasrar2015@gmail.com</a>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-crystal-blue)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Instagram</h4>
              <a href="https://www.instagram.com/sahasraonblades" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: 'var(--color-ice-white)', textDecoration: 'underline' }}>@sahasraonblades</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
        <p style={{ marginBottom: '1rem' }}>&copy; {new Date().getFullYear()} Sahasra Ramasamy. All Rights Reserved.</p>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>PRECISION • PASSION • PERFORMANCE</p>
      </footer>
    </>
  );
}

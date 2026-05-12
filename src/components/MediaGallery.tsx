"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/sahasraonblades";

const galleryItems = [
  { src: "/photos/trophy.JPG", caption: "🏆 La Jolla Figure Skating Club Champion" },
  { src: "/photos/action1.JPG", caption: "🌟 Competition Performance" },
  { src: "/photos/action2.JPG", caption: "❄️ On the Ice" },
  { src: "/photos/action3.JPG", caption: "💫 Artistic Expression" },
  { src: "/photos/5 year medals.jpg", caption: "🥇 Medal Collection — Age 5" },
  { src: "/photos/6 years.JPG", caption: "🎀 Age 6 — Building the Dream" },
  { src: "/photos/9 years.JPG", caption: "⛸️ Age 9 — Competitive Edge" },
];

export default function MediaGallery() {
  return (
    <section id="media-gallery" style={{ padding: '10rem 2rem', background: 'var(--color-bg-dark)', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--color-ice-white)',
            marginBottom: '1rem'
          }}>
            Cinematic Highlights
          </h2>
        </motion.div>

        {/* YouTube Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '6rem' }}
        >
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 400, 
            letterSpacing: '0.05em', 
            color: 'var(--color-ice-white)',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Watch Latest Performance
          </h3>
          <div 
            className="glass-panel" 
            style={{ 
              width: '100%', 
              aspectRatio: '16/9', 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/ksVSK5e-ZDU?si=X2ZUrjB9msGtKLy8" 
              title="Sahasra Latest Performance" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
          </div>
          {/* YouTube link below video */}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a 
              href="https://www.youtube.com/@sahasraramasamy9902" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-crystal-blue)', textDecoration: 'underline', letterSpacing: '0.1em', fontSize: '0.9rem' }}
            >
              ▶ View More on YouTube Channel
            </a>
          </div>
        </motion.div>

        {/* ── Photo Gallery ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h3 style={{ fontSize: '2rem', color: 'var(--color-ice-white)', letterSpacing: '0.05em' }}>
            Photo Gallery
          </h3>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel"
              style={{
                aspectRatio: '1/1',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image 
                src={item.src}
                alt={item.caption}
                fill 
                style={{ objectFit: 'cover', objectPosition: 'top' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,1,10,0.85) 0%, transparent 55%)', zIndex: 1 }} />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', zIndex: 2 }}>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Follow on Instagram ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            marginTop: '5rem', 
            textAlign: 'center',
            padding: '3rem 2rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(225,48,108,0.15), rgba(131,58,180,0.15))',
            border: '1px solid rgba(225,48,108,0.3)'
          }}
        >
          <p style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📸</p>
          <h3 style={{ 
            fontSize: '1.8rem', 
            color: 'var(--color-ice-white)', 
            marginBottom: '0.75rem'
          }}>
            Follow Sahasra on Instagram
          </h3>
          <p style={{ color: 'var(--color-silver-shimmer)', marginBottom: '1.5rem', fontSize: '1rem' }}>
            Behind-the-scenes moments, training highlights &amp; competition updates
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.9rem 2.5rem',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 20px rgba(220,39,67,0.4)',
              transition: 'transform 0.2s ease'
            }}
          >
            @sahasraonblades
          </a>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-dark)', color: 'var(--color-ice-white)', padding: '2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--color-crystal-blue)' }}>Admin Dashboard</h1>
          <a href="/" style={{ color: 'var(--color-silver-shimmer)', textDecoration: 'underline' }}>Return to Site</a>
        </header>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Sidebar Navigation */}
          <nav style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['photos', 'videos', 'achievements', 'results', 'blog'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  padding: '1rem', 
                  background: activeTab === tab ? 'rgba(135, 206, 235, 0.2)' : 'transparent',
                  border: 'none',
                  color: 'white',
                  textAlign: 'left',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  transition: 'background 0.3s'
                }}
              >
                Manage {tab}
              </button>
            ))}
          </nav>

          {/* Main Content Area */}
          <main className="glass-panel" style={{ flex: 1, padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', textTransform: 'capitalize' }}>Upload & Manage {activeTab}</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-silver-shimmer)' }}>Title</label>
                <input 
                  type="text" 
                  placeholder={`Enter ${activeTab} title...`}
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                />
              </div>

              {activeTab === 'photos' || activeTab === 'videos' ? (
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-silver-shimmer)' }}>Media URL / File</label>
                  <input 
                    type="file" 
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                  />
                </div>
              ) : null}

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-silver-shimmer)' }}>Description</label>
                <textarea 
                  rows={4}
                  placeholder={`Enter details about this ${activeTab}...`}
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                />
              </div>

              <button 
                type="button"
                style={{ 
                  padding: '1rem', 
                  background: 'var(--color-crystal-blue)', 
                  color: 'black', 
                  border: 'none', 
                  fontWeight: 'bold', 
                  cursor: 'pointer',
                  borderRadius: '4px',
                  marginTop: '1rem'
                }}
              >
                Save Changes
              </button>
            </form>

            <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-silver-shimmer)' }}>Existing {activeTab}</h3>
              <p style={{ opacity: 0.5, fontStyle: 'italic' }}>No items uploaded yet. (This is a mock dashboard interface)</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Mail, Phone, MapPin, Link2 } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../components/SocialIcons';

export default function Contact() {
  return (
    <div className="animate-fade-in" style={{ padding: '80px 24px', background: 'var(--bg-primary)', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '650px' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', textAlign: 'center', marginBottom: '16px' }}>
          Let's <span className="text-gradient">Connect</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '500px', margin: '0 auto 48px', fontSize: '1.05rem' }}>
          Feel free to reach out for research collaborations, project opportunities, or just to say hello!
        </p>

        <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              Contact Channels
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Direct communication details</p>
          </div>

          {/* Contact Details List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Email Channel */}
            <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center', background: 'var(--surface-0)' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(236, 72, 153, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-pink)',
                flexShrink: 0
              }}>
                <Mail size={20} />
              </div>
              <div style={{ textAlign: 'left', minWidth: 0 }}>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Me</h4>
                <a href="mailto:Jennigwen25@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', fontSize: '1.05rem', transition: 'var(--transition-smooth)', wordBreak: 'break-all' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--accent-pink)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                  Jennigwen25@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Channel */}
            <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center', background: 'var(--surface-0)' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(255, 161, 197, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-pink)',
                flexShrink: 0
              }}>
                <Phone size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Me</h4>
                <a href="tel:+6287882532006" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', fontSize: '1.05rem', transition: 'var(--transition-smooth)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--accent-pink)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                  +62 878-8253-2006
                </a>
              </div>
            </div>

            {/* Location Channel */}
            <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center', background: 'var(--surface-0)' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(236, 72, 153, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-pink)',
                flexShrink: 0
              }}>
                <MapPin size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</h4>
                <p style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '1.05rem' }}>
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Social Connect panel */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '28px' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '600', textAlign: 'center' }}>
              Connect with me on Socials
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Row 1: LinkedIn & GitHub */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.linkedin.com/in/jenni-gwen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gradient"
                  style={{
                    padding: '10px 16px',
                    fontSize: '0.9rem',
                    flex: '1 1 200px',
                    justifyContent: 'center'
                  }}
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a 
                  href="https://github.com/JenniGwen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gradient"
                  style={{
                    padding: '10px 16px',
                    fontSize: '0.9rem',
                    flex: '1 1 200px',
                    justifyContent: 'center',
                    background: 'var(--surface-1)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    boxShadow: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'var(--surface-2)'}
                  onMouseLeave={(e) => e.target.style.background = 'var(--surface-1)'}
                >
                  <Github size={18} /> GitHub
                </a>
              </div>

              {/* Row 2: Instagram */}
              <a 
                href="https://www.instagram.com/jennifergwen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gradient"
                style={{
                  padding: '10px 16px',
                  fontSize: '0.9rem',
                  justifyContent: 'center',
                  background: 'rgba(236, 72, 153, 0.15)',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  color: 'var(--text-primary)',
                  boxShadow: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(236, 72, 153, 0.25)';
                  e.target.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(236, 72, 153, 0.15)';
                  e.target.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                }}
              >
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

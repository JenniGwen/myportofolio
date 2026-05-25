import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Footer({ setCurrentPage }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(7, 5, 18, 0.9)',
      padding: '40px 24px',
      marginTop: 'auto',
      backdropFilter: 'blur(8px)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Info */}
        <div style={{ textAlign: 'left' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '8px' }}>
            Jennifer Gwen Tanadi
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Computer Science Student @ BINUS University | Data Analytics, AI and Software Engineer
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a 
            href="https://github.com/JenniGwen" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jenni-gwen/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:Jennigwen25@gmail.com"
            style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="container" style={{
        marginTop: '24px',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.8rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '16px'
      }}>
        © {new Date().getFullYear()} Jennifer Gwen Tanadi.
      </div>
    </footer>
  );
}

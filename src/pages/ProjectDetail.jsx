import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Video, Award, Code, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Github } from '../components/SocialIcons';
import { projectsData } from './Projects';

const SLIDE_INTERVAL_MS = 10000;

function ScreenshotCarousel({ images, title }) {
  const [index, setIndex] = useState(0);

  // Advance to the next slide every 10s; restarting the timer whenever the
  // slide changes means a manual click also resets the countdown.
  useEffect(() => {
    const timer = setTimeout(() => setIndex((i) => (i + 1) % images.length), SLIDE_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [index, images.length]);

  const go = (delta) => setIndex((i) => (i + delta + images.length) % images.length);

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    background: 'rgba(15, 11, 36, 0.7)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2
  };

  return (
    <div style={{
      position: 'relative',
      aspectRatio: '16/9',
      overflow: 'hidden',
      borderRadius: '12px',
      border: '1px solid var(--border-subtle)',
      background: 'var(--media-bg)'
    }}>
      <div style={{
        display: 'flex',
        height: '100%',
        transform: `translateX(-${index * 100}%)`,
        transition: 'transform 0.6s ease-in-out'
      }}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            style={{ flex: '0 0 100%', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ))}
      </div>

      <button aria-label="Previous slide" onClick={() => go(-1)} style={{ ...arrowStyle, left: '12px' }}>
        <ChevronLeft size={22} />
      </button>
      <button aria-label="Next slide" onClick={() => go(1)} style={{ ...arrowStyle, right: '12px' }}>
        <ChevronRight size={22} />
      </button>

      <div style={{ position: 'absolute', bottom: '14px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 2 }}>
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '999px',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === index ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.4)',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail({ currentPage, setCurrentPage, selectedProjectId }) {
  const project = projectsData.find((p) => p.id === selectedProjectId);

  if (!project) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ color: 'var(--text-primary)' }}>Project not found</h2>
        <button 
          onClick={() => setCurrentPage('projects')} 
          className="btn-gradient" 
          style={{ marginTop: '20px' }}
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '60px 24px', background: 'var(--bg-primary)', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('projects')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '32px',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
          <ArrowLeft size={20} /> Back to Projects
        </button>

        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '32px' }}>
          <span className="badge" style={{ marginBottom: '12px' }}>{project.category}</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px', lineHeight: '1.2' }}>{project.title}</h1>
          <p style={{ color: 'var(--accent-purple)', fontSize: '1.1rem', fontWeight: '500' }}>{project.tagline}</p>
        </div>

        {/* Demo Video or Image */}
        <div className="glass-card" style={{ padding: '16px', marginBottom: '40px', overflow: 'hidden' }}>
          {project.screenshots ? (
            <ScreenshotCarousel images={project.screenshots} title={project.title} />
          ) : project.youtube ? (
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', /* 16:9 aspect ratio */
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)'
            }}>
              <iframe
                title={`${project.title} demo`}
                src={project.youtube}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px'
                }}
              />
            </div>
          ) : (
            <div style={{
              aspectRatio: '16/9',
              borderRadius: '12px',
              background: 'var(--media-bg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'var(--text-secondary)',
              gap: '16px',
              padding: '40px',
              border: '1px dashed var(--border-strong)'
            }}>
              <Video size={48} style={{ color: 'var(--accent-purple)' }} />
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Demo Video In Progress</h3>
                <p style={{ fontSize: '0.9rem', maxWidth: '400px' }}>
                  This application is currently in active development or research phase. The full video walkthrough will be uploaded soon!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Proof / achievement photo (shown after the video) */}
        {project.proofImage && (
          <div className="glass-card" style={{ padding: '16px', marginBottom: '40px', overflow: 'hidden', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '8px 8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} style={{ color: 'var(--accent-purple)' }} /> Achievement
            </h3>
            <img
              src={project.proofImage.src}
              alt={project.proofImage.caption}
              style={{
                display: 'block',
                width: '100%',
                maxHeight: '720px',
                objectFit: 'contain',
                borderRadius: '12px',
                background: 'var(--media-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            />
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center', marginTop: '12px' }}>
              {project.proofImage.caption}
            </p>
          </div>
        )}

        {/* Description & Details */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', textAlign: 'left', marginBottom: '40px' }}>
          {/* Main write-up */}
          <div className="glass-card" style={{ flex: '1 1 500px', padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Project Overview</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {project.description}
            </p>

            {project.role && (
              <>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '8px' }}>My Role</h3>
                <p style={{ color: 'var(--accent-purple)', fontWeight: '600', marginBottom: '12px' }}>{project.role}</p>
              </>
            )}

            {project.highlights && (
              <ul style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>Key Technologies & Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.skills.map((skill, index) => (
                <span key={index} className="badge" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar Metadata */}
          <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Actions glass card */}
            <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '8px' }}>Project Links</h4>
              
              {/* GitHub Link (only if available) */}
              {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient"
                style={{
                  justifyContent: 'center',
                  background: 'var(--surface-1)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  boxShadow: 'none'
                }}
                onMouseEnter={(e) => e.target.style.background = 'var(--surface-2)'}
                onMouseLeave={(e) => e.target.style.background = 'var(--surface-1)'}
              >
                <Github size={18} /> GitHub Repository
              </a>
              )}

              {/* Demo Link (only if available) */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient"
                  style={{ justifyContent: 'center' }}
                >
                  <ExternalLink size={18} /> Live Deployment
                </a>
              )}
            </div>

            {/* Quality badge card */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <CheckCircle size={28} style={{ color: 'var(--accent-indigo)', flexShrink: 0 }} />
              <div>
                <h5 style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Verified Project</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Part of Academic Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

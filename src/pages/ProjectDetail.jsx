import React from 'react';
import { ArrowLeft, ExternalLink, Video, Award, Code, CheckCircle } from 'lucide-react';
import { Github } from '../components/SocialIcons';
import { projectsData } from './Projects';

export default function ProjectDetail({ currentPage, setCurrentPage, selectedProjectId }) {
  const project = projectsData.find((p) => p.id === selectedProjectId);

  if (!project) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ color: 'white' }}>Project not found</h2>
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
    <div className="animate-fade-in" style={{ padding: '60px 24px', background: 'rgba(7, 5, 20, 1)', minHeight: '85vh' }}>
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
          onMouseEnter={(e) => e.target.style.color = 'white'}
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
          {project.youtube ? (
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', /* 16:9 aspect ratio */
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
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
              background: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'var(--text-secondary)',
              gap: '16px',
              padding: '40px',
              border: '1px dashed rgba(255, 255, 255, 0.15)'
            }}>
              <Video size={48} style={{ color: 'var(--accent-purple)' }} />
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'white', marginBottom: '8px' }}>Demo Video In Progress</h3>
                <p style={{ fontSize: '0.9rem', maxWidth: '400px' }}>
                  This application is currently in active development or research phase. The full video walkthrough will be uploaded soon!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Description & Details */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', textAlign: 'left', marginBottom: '40px' }}>
          {/* Main write-up */}
          <div className="glass-card" style={{ flex: '1 1 500px', padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '16px' }}>Project Overview</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {project.description}
            </p>

            <h3 style={{ fontSize: '1.4rem', color: 'white', marginTop: '32px', marginBottom: '16px' }}>Key Technologies & Skills</h3>
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
              <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '8px' }}>Project Links</h4>
              
              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient"
                style={{
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  boxShadow: 'none'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
              >
                <Github size={18} /> GitHub Repository
              </a>

              {/* Demo Link (only if available) */}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient"
                  style={{ justifyContent: 'center' }}
                >
                  <ExternalLink size={18} /> Live Deployment
                </a>
              ) : (
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.15)',
                  color: '#ef4444',
                  fontSize: '0.85rem',
                  textAlign: 'center',
                  fontWeight: '600'
                }}>
                  Deployment Link Pending
                </div>
              )}
            </div>

            {/* Quality badge card */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <CheckCircle size={28} style={{ color: 'var(--accent-indigo)', flexShrink: 0 }} />
              <div>
                <h5 style={{ color: 'white', fontSize: '0.95rem' }}>Verified Project</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Part of Academic Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

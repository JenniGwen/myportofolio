import { useState } from 'react';
import { ArrowLeft, Image, List, Maximize2 } from 'lucide-react';
import { activitiesData } from './Activities';

export default function ActivityDetail({ setCurrentPage, selectedActivityId }) {
  const activity = activitiesData.find((a) => a.id === selectedActivityId);

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lastActivityId, setLastActivityId] = useState(selectedActivityId);

  // Reset local state when switching activities
  if (selectedActivityId !== lastActivityId) {
    setLastActivityId(selectedActivityId);
    setActiveImageIndex(0);
  }

  if (!activity) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ color: 'white' }}>Activity not found</h2>
        <button onClick={() => setCurrentPage('activities')} className="btn-gradient" style={{ marginTop: '20px' }}>
          Back to Activities
        </button>
      </div>
    );
  }

  // Predefined subpage images list
  const allImages = activity.subpageImages || [];
  const explanationText = activity.description || activity.points.join('\n\n');

  return (
    <div className="animate-fade-in" style={{ padding: '60px 24px', background: 'rgba(7, 5, 20, 1)', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('activities')}
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
          <ArrowLeft size={20} /> Back to Activities
        </button>

        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '40px' }}>
          <span className="badge" style={{ marginBottom: '12px' }}>{activity.duration}</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px', lineHeight: '1.2' }}>{activity.title}</h1>
          <p style={{ color: 'var(--accent-purple)', fontSize: '1.1rem', fontWeight: '500' }}>{activity.subtitle}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', textAlign: 'left' }}>
          {/* Left Column: Image Gallery */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Image size={18} className="text-purple-400" /> Activity Gallery
              </h3>

              {/* Main Featured Showcase */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--glass-border)',
                  cursor: 'pointer',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => setIsLightboxOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {allImages.length > 0 ? (
                  <>
                    <img 
                      src={allImages[activeImageIndex]} 
                      alt={`${activity.title} gallery showcase`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                        transition: 'var(--transition-smooth)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0, 0, 0, 0.4)',
                      opacity: isHovered ? 1 : 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'var(--transition-smooth)',
                      backdropFilter: 'blur(2px)'
                    }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Maximize2 size={16} /> Click to expand
                      </span>
                    </div>
                  </>
                ) : (
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Image size={32} style={{ opacity: 0.5 }} />
                    No images available
                  </div>
                )}
              </div>

              {/* Thumbnails Row */}
              {allImages.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {allImages.map((img, idx) => {
                    const isSelected = idx === activeImageIndex;
                    return (
                      <div 
                        key={idx}
                        style={{
                          position: 'relative',
                          width: '56px',
                          height: '56px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: isSelected ? '2px solid var(--accent-purple)' : '1px solid var(--glass-border)',
                          boxShadow: isSelected ? '0 0 10px rgba(192, 132, 252, 0.4)' : 'none',
                          transition: 'var(--transition-smooth)'
                        }}
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <img 
                          src={img} 
                          alt={`Thumbnail ${idx + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Explanation & Notes */}
          <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <List size={18} className="text-purple-400" /> Explanation & Notes
                </h3>
              </div>

              <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                {explanationText.split('\n').map((line, lineIdx) => {
                  const trimmed = line.trim();
                  if (!trimmed) {
                    return <div key={lineIdx} style={{ height: '12px' }} />;
                  }
                  
                  // Check if it's a bullet point
                  if (trimmed.startsWith('-') || trimmed.startsWith('●') || trimmed.startsWith('•') || trimmed.startsWith('*')) {
                    const text = trimmed.replace(/^[-●•*]\s*/, '');
                    return (
                      <span key={lineIdx} style={{ display: 'block', paddingLeft: '18px', position: 'relative', marginBottom: '8px' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-purple)' }}>✦</span>
                        {text}
                      </span>
                    );
                  }
                  
                  // Check if it's a numbered list item
                  const matchNumber = trimmed.match(/^(\d+)\.\s*(.*)/);
                  if (matchNumber) {
                    const num = matchNumber[1];
                    const text = matchNumber[2];
                    return (
                      <span key={lineIdx} style={{ display: 'block', paddingLeft: '22px', position: 'relative', marginBottom: '8px' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-purple)', fontWeight: 'bold' }}>{num}.</span>
                        {text}
                      </span>
                    );
                  }
                  
                  // Regular paragraph
                  return (
                    <p key={lineIdx} style={{ marginBottom: '16px' }}>
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && allImages.length > 0 && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 3, 15, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.85)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'}
          >
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>✕</span>
          </button>

          {/* Left Navigation Arrow */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
              }}
              style={{
                position: 'absolute',
                left: '24px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-purple)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'}
            >
              <span style={{ fontSize: '24px', fontWeight: 'bold', transform: 'translateX(-1px)' }}>⟨</span>
            </button>
          )}

          {/* Expanded Image */}
          <img 
            src={allImages[activeImageIndex]} 
            alt={`${activity.title} gallery zoom`}
            style={{
              maxWidth: '85vw',
              maxHeight: '75vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 24px 50px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right Navigation Arrow */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
              }}
              style={{
                position: 'absolute',
                right: '24px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-purple)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'}
            >
              <span style={{ fontSize: '24px', fontWeight: 'bold', transform: 'translateX(1px)' }}>⟩</span>
            </button>
          )}

          {/* Index indicator */}
          <div style={{
            marginTop: '20px',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            background: 'rgba(0,0,0,0.5)',
            padding: '6px 16px',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            {activeImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

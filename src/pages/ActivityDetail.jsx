import React, { useState } from 'react';
import { ArrowLeft, Upload, Edit3, Save, Trash2, Image, List } from 'lucide-react';
import { activitiesData } from './Activities';

export default function ActivityDetail({ currentPage, setCurrentPage, selectedActivityId }) {
  const activity = activitiesData.find((a) => a.id === selectedActivityId);

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

  // State to hold local description and uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);
  const [customExplanation, setCustomExplanation] = useState(
    activity.points.join('\n\n')
  );
  const [isEditing, setIsEditing] = useState(false);

  // Handle Image Upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Limit to 2 images
    const currentLimit = 2 - uploadedImages.length;
    if (files.length > currentLimit) {
      alert(`You can only upload up to 2 images. ${currentLimit} remaining slots.`);
    }

    const newImages = files.slice(0, currentLimit).map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    setUploadedImages([...uploadedImages, ...newImages]);
  };

  // Remove uploaded image
  const handleRemoveImage = (index) => {
    const newImages = [...uploadedImages];
    // Free the object URL memory
    URL.revokeObjectURL(newImages[index].url);
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

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
          {/* Left Column: Image Uploads & Previews */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Image size={18} className="text-purple-400" /> Activity Gallery
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px' }}>
                Upload 1 or 2 images related to this activity. These will display in your custom layout below.
              </p>

              {/* Upload Drop Zone / Button */}
              {uploadedImages.length < 2 ? (
                <div style={{
                  border: '2px dashed rgba(192, 132, 252, 0.3)',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  background: 'rgba(192, 132, 252, 0.02)',
                  cursor: 'pointer',
                  position: 'relative',
                  marginBottom: '20px',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-purple)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.3)'}
                >
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: 'pointer'
                    }}
                  />
                  <Upload size={32} style={{ color: 'var(--accent-purple)', marginBottom: '12px' }} />
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>Choose Images</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '4px' }}>
                    Supports PNG, JPG (Max 2 files)
                  </p>
                </div>
              ) : (
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'rgba(129, 140, 248, 0.1)',
                  color: 'var(--accent-indigo)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}>
                  All image slots filled (2/2)
                </div>
              )}

              {/* Uploaded Previews */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {uploadedImages.map((img, idx) => (
                  <div key={idx} style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid var(--glass-border)',
                    aspectRatio: '16/10'
                  }}>
                    <img 
                      src={img.url} 
                      alt={`Upload preview ${idx+1}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <button
                      onClick={() => handleRemoveImage(idx)}
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(239, 68, 68, 0.85)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}

                {uploadedImages.length === 0 && (
                  <div style={{
                    height: '140px',
                    borderRadius: '12px',
                    background: 'rgba(0,0,0,0.2)',
                    border: '1px dashed rgba(255,255,255,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem'
                  }}>
                    <Image size={24} style={{ marginBottom: '8px', opacity: 0.5 }} />
                    No custom images uploaded
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Custom Explanation Editor & Viewer */}
          <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <List size={18} className="text-purple-400" /> Explanation & Notes
                </h3>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-gradient"
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.8rem',
                    background: isEditing ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'rgba(255, 255, 255, 0.05)',
                    border: isEditing ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: 'none',
                    color: 'white'
                  }}
                >
                  {isEditing ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Save size={12} /> Save</span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Edit3 size={12} /> Edit Text</span>
                  )}
                </button>
              </div>

              {isEditing ? (
                <div>
                  <textarea
                    value={customExplanation}
                    onChange={(e) => setCustomExplanation(e.target.value)}
                    className="form-input"
                    rows={12}
                    style={{
                      resize: 'vertical',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      background: 'rgba(0, 0, 0, 0.35)',
                      fontFamily: 'var(--font-sans)'
                    }}
                    placeholder="Explain what the activity is about..."
                  />
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '8px' }}>
                    Tip: Separate points or paragraphs with empty lines.
                  </p>
                </div>
              ) : (
                <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  {customExplanation.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} style={{ marginBottom: '16px' }}>
                      {paragraph.startsWith('●') || paragraph.startsWith('-') ? (
                        <span style={{ display: 'block', paddingLeft: '16px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent-purple)' }}>✦</span>
                          {paragraph.replace(/^[●-]\s*/, '')}
                        </span>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

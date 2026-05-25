import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="animate-fade-in" style={{ padding: '80px 24px', background: 'rgba(7, 5, 20, 1)', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px' }}>
          Let's <span className="text-gradient">Connect</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px', fontSize: '1.05rem' }}>
          Have an exciting project, research collaboration, or leadership opportunity? Drop a message below or reach out via socials!
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', textAlign: 'left' }}>
          {/* Left Column: Contact info cards */}
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Cards for each channel */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(192, 132, 252, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-purple)',
                flexShrink: 0
              }}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Me</h4>
                <a href="mailto:Jennigwen25@gmail.com" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '1.05rem' }}>
                  Jennigwen25@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(129, 140, 248, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-indigo)',
                flexShrink: 0
              }}>
                <Phone size={20} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Me</h4>
                <a href="tel:+6287882532006" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '1.05rem' }}>
                  +62 878-8253-2006
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(240, 171, 252, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-fuchsia)',
                flexShrink: 0
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</h4>
                <p style={{ color: 'white', fontWeight: '600', fontSize: '1.05rem' }}>
                  Jakarta, Indonesia
                </p>
              </div>
            </div>

            {/* Social Connect panel */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>Connect with me</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href="https://www.linkedin.com/in/jenni-gwen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gradient"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.85rem',
                    flexGrow: 1,
                    justifyContent: 'center'
                  }}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a 
                  href="https://github.com/jenni-gwen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gradient"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.85rem',
                    flexGrow: 1,
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    boxShadow: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div style={{ flex: '1 1 500px' }}>
            <div className="glass-card" style={{ padding: '40px', height: '100%' }}>
              {submitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  padding: '40px 0',
                  textAlign: 'center',
                  gap: '16px'
                }}>
                  <CheckCircle2 size={64} style={{ color: 'var(--accent-purple)', filter: 'drop-shadow(0 0 10px rgba(192, 132, 252, 0.4))' }} />
                  <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>Message Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '320px' }}>
                    Thank you for reaching out, Jennifer. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-gradient"
                    style={{ marginTop: '16px', padding: '8px 20px', fontSize: '0.85rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '8px' }}>Send a Message</h3>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ flex: '1 1 calc(50% - 8px)' }}>
                      <label htmlFor="name" style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '500' }}>Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="Jennifer Gwen"
                      />
                    </div>
                    <div style={{ flex: '1 1 calc(50% - 8px)' }}>
                      <label htmlFor="email" style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="jennigwen25@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '500' }}>Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="Opportunity / Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input" 
                      rows={6} 
                      placeholder="Write your message here..."
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-gradient" 
                    style={{ justifyContent: 'center', marginTop: '8px' }}
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

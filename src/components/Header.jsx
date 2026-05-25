import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'My Projects' },
    { id: 'activities', label: 'Activities' },
    { id: 'contact', label: 'Let\'s Connect' }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsOpen(false);
  };

  return (
    <header className="header-glass">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'between', padding: '16px 24px', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div 
          className="logo-container"
          onClick={() => handleNavClick('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <Sparkles className="w-5 h-5" style={{ color: '#c084fc' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
            Jen's Portofolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="md-flex" style={{ gap: '8px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              style={{
                border: 'none',
                background: currentPage === item.id ? 'linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-pink) 100%)' : 'transparent',
                color: currentPage === item.id ? '#ffffff' : 'var(--text-secondary)'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md-hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md-hidden glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '8px 16px', padding: '16px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              style={{
                border: 'none',
                background: currentPage === item.id ? 'linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-pink) 100%)' : 'transparent',
                color: currentPage === item.id ? '#ffffff' : 'var(--text-secondary)',
                textAlign: 'left',
                width: '100%',
                display: 'block'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

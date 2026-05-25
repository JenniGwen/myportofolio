import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, Code, Database, Compass, CheckCircle2, Search, ArrowRight } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('technical');

  const skillsData = {
    technical: [
      { name: 'AI & Deep Learning', level: 'Pytorch, EfficientNet, CNN, Scikit-Learn', icon: Code },
      { name: 'Data Analytics', level: 'PostgreSQL, MySQL, SQL, Tableau, Pandas, NumPy', icon: Database },
      { name: 'Software Development', level: 'HTML, CSS, JavaScript, Laravel, C, Git', icon: Code },
      { name: 'UI/UX Design', level: 'Figma, Interface Design, Prototyping', icon: Compass }
    ],
    management: [
      { name: 'Leadership & Team Management', level: 'Cross-functional collaboration, delegating, mentoring', icon: Briefcase },
      { name: 'Project Management', level: 'Financial budgeting, strategic planning, resource allocation', icon: Briefcase },
      { name: 'Entrepreneurship & Innovation', level: 'Product thinking, identify growth opportunities', icon: SparkIcon }
    ],
    languages: [
      { name: 'English', level: 'IELTS Band 8 (Professional Working Proficiency)', icon: CheckCircle2 },
      { name: 'Indonesian', level: 'Native Speaker', icon: CheckCircle2 },
      { name: 'Mandarin', level: 'HSK 5 Candidate', icon: CheckCircle2 }
    ]
  };

  const certifications = [
    { title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', issuer: 'Oracle', year: '2025' },
    { title: 'Data Classification and Summarization Using IBM Granite', issuer: 'IBM', year: '2025' },
    { title: 'Google Analytics Professional Certificate', issuer: 'Google (via Coursera)', year: '2025' },
    { title: 'Data Analytics Job Simulation', issuer: 'Deloitte', year: '2025' },
    { title: 'ASEAN Data Explorers Enablement Session', issuer: 'SAP', year: '2025' },
    { title: 'Pelatihan Azure AI Fundamentals', issuer: 'Microsoft', year: '2025' },
    { title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', year: '2025' },
    { title: 'Problem Solving Basic Certificate', issuer: 'HackerRank', year: '2025' },
    { title: 'Introduction to Data Analytics', issuer: 'RevoU', year: '2024' }
  ];

  const awards = [
    { title: 'Top 10 Finalist Samsung Innovation Campus', year: '2025' },
    { title: 'Semifinalist of UGM FindIT! Competition', year: '2025' },
    { title: 'Best General Board of the Month in AIESEC in BINUS', year: '2025' },
    { title: 'Top 10 Finalist UI / UX Competition', year: '2024' },
    { title: 'Senior High School Valedictorian', issuer: 'Saint John\'s School Meruya', year: '2024' }
  ];

  const education = [
    {
      school: 'Bina Nusantara University',
      degree: 'Bachelor of Computer Science (Data Analytics and AI)',
      duration: '2024 - Present',
      details: 'Cumulative GPA: 3.96 / 4.00'
    },
    {
      school: 'Saint John\'s School Meruya',
      degree: 'Senior High School, Science Stream',
      duration: '2021 - 2024',
      details: 'Final Grade: 95.61 / 100'
    }
  ];

  // Helper custom component for Sparkle Icon
  function SparkIcon(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      </svg>
    );
  }

  const filteredCerts = certifications.filter(cert =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(7, 5, 18, 0.45), rgba(7, 5, 18, 0.85)), url("/image 11.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh',
      }}>
        <div className="container hero-container">
          {/* Hero Left: Glass Card */}
          <div className="glass-card" style={{
            flex: '1 1 500px',
            padding: '48px',
            textAlign: 'left',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '12px'
            }}>
              Hello! I am
            </span>
            <h1 style={{
              fontSize: '3.5rem',
              lineHeight: '1.1',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)'
            }}>
              <span className="text-gradient">Jennifer Gwen</span> <br />
              <span style={{ color: 'white' }}>Tanadi</span>
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              A Computer Science student at BINUS University specializing in Data Analytics & AI. AI researcher, full-stack developer, and Vice President of Ureeka BINUS.
            </p>
            <button 
              onClick={() => setCurrentPage('projects')}
              className="btn-gradient"
            >
              Check Out my Portofolio! <ArrowRight size={18} />
            </button>
          </div>

          {/* Hero Right: Profile Picture with Halo */}
          <div style={{
            flex: '1 1 350px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="profile-image-wrapper">
              <img 
                src="/picture of me.png" 
                alt="Jennifer Gwen Tanadi" 
                className="profile-image" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summary & Education Section */}
      <section style={{ padding: '80px 24px', background: 'rgba(10, 7, 26, 0.95)' }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'space-between'
        }}>
          {/* Summary Box */}
          <div className="glass-card" style={{ flex: '1 1 500px', padding: '40px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px', position: 'relative' }}>
              Summary
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))',
                borderRadius: '2px'
              }}></span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Innovative fourth-semester Computer Science student at BINUS University specializing in Data Analytics and AI, with hands-on experience building ML pipelines, full-stack applications, and data-driven solutions. 
              <br /><br />
              Currently serving as Vice President of Ureeka BINUS overseeing 5 core divisions and previously directed 10+ projects at AIESEC in BINUS with strong project management and financial oversight. Deloitte Data Analytics certified, with advancing expertise in ML/DL, SQL-based analytics, Tableau, and Python to deliver actionable insights and solve complex industrial challenges.
            </p>
          </div>

          {/* Education Box */}
          <div className="glass-card" style={{ flex: '1 1 500px', padding: '40px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px', position: 'relative' }}>
              Education
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))',
                borderRadius: '2px'
              }}></span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {education.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    marginTop: '4px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(236, 72, 153, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-pink)',
                    flexShrink: 0
                  }}>
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'white', fontWeight: '600' }}>{edu.school}</h3>
                    <p style={{ color: 'var(--accent-pink)', fontSize: '0.95rem', fontWeight: '500' }}>{edu.degree}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '4px 0' }}>{edu.duration}</p>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '500' }}>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '80px 24px', background: 'rgba(7, 5, 20, 1)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '16px' }}>
            My <span className="text-gradient">Skills</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            A comprehensive overview of my technical capabilities, leadership experience, and languages.
          </p>

          {/* Skill Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px'
          }}>
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                style={{
                  textTransform: 'capitalize',
                  border: 'none',
                  background: activeTab === tab ? 'linear-gradient(135deg, var(--btn-purple) 0%, var(--btn-pink) 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeTab === tab ? 'white' : 'var(--text-secondary)'
                }}
              >
                {tab === 'technical' ? 'Technical Skills' : tab === 'management' ? 'Management & Leadership' : 'Languages'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid-responsive">
            {skillsData[activeTab].map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(236, 72, 153, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-pink)',
                    marginBottom: '20px'
                  }}>
                    <IconComponent size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '12px' }}>{skill.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{skill.level}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications and Achievements Section */}
      <section style={{ padding: '80px 24px', background: 'rgba(10, 7, 26, 0.95)' }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          {/* Certifications Card */}
          <div className="glass-card" style={{ flex: '1 1 500px', padding: '40px', textAlign: 'left' }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              gap: '16px'
            }}>
              <h2 style={{ fontSize: '2rem' }}>Certifications</h2>
              {/* Search Certs */}
              <div style={{ position: 'relative', flex: '1 1 200px', maxWidth: '300px' }}>
                <input 
                  type="text" 
                  placeholder="Search certificates..." 
                  className="form-input" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ padding: '10px 16px 10px 38px', fontSize: '0.85rem' }}
                />
                <Search size={16} style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-secondary)'
                }} />
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxHeight: '420px',
              overflowY: 'auto',
              paddingRight: '8px'
            }}>
              {filteredCerts.length > 0 ? (
                filteredCerts.map((cert, idx) => (
                  <div key={idx} style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <div>
                      <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '600' }}>{cert.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{cert.issuer}</p>
                    </div>
                    <span className="badge" style={{ flexShrink: 0 }}>{cert.year}</span>
                  </div>
                ))
              ) : (
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '24px' }}>
                  No certifications found matching "{searchTerm}"
                </p>
              )}
            </div>
          </div>

          {/* Honors and Awards Card */}
          <div className="glass-card" style={{ flex: '1 1 450px', padding: '40px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Honors & Awards</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {awards.map((award, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    marginTop: '2px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(236, 72, 153, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-pink)',
                    flexShrink: 0
                  }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.05rem', fontWeight: '600' }}>{award.title}</h4>
                    {award.issuer && <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{award.issuer}</p>}
                    <p style={{ color: 'var(--accent-pink)', fontSize: '0.85rem', fontWeight: '500', marginTop: '2px' }}>{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

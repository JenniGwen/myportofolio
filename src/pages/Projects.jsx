import React from 'react';
import { ArrowRight, Code, Database, Cpu, Globe } from 'lucide-react';

export const projectsData = [
  {
    id: 'isitfake',
    title: 'Isitfake?',
    tagline: 'Deepfake Detection Web Application',
    category: 'AI / Deep Learning',
    icon: Cpu,
    image: '/isitfake.jpeg',
    description: 'An application designed to detect facial deepfakes from user-uploaded images using custom-trained deep learning models. Developed in a team (with Jiovanny Lim and Aviel Aquino) where I served as the Lead AI Engineer for the AI Singapore Competition 2026. Built with React and Vite for the web frontend, this project was a valuable hands-on experience in productionizing deep learning models for media forensics.',
    github: 'https://github.com/JenniGwen/deepfakeAppNEW',
    demo: 'https://isitfake.vercel.app/',
    youtube: 'https://www.youtube.com/embed/srJXPIgv9kY',
    skills: ['React', 'Vite', 'PyTorch', 'EfficientNet-B0', 'OpenCV', 'Deep Learning']
  },
  {
    id: 'carbonis',
    title: 'Carbonis (Sustainability Tech)',
    tagline: 'Carbon Credit Exchange Platform',
    category: 'Web3 & Sustainability',
    icon: Globe,
    image: '/carbonis.png',
    description: 'Served as the Business Lead & Strategist for Carbonis, a carbon credit exchange and MRV platform for landfills (TPA). Managed business prospects, designed the franchise model (with integrated waste processing machinery), and computed investment returns alongside team members Andrian Raihannudin, Salzabilla Putri Hambali, Calista Azzahira Rusdy, and Vallerie Anne Jose. Pitched at BRICS IIC 2026, the platform utilizes Polygon L2 blockchain and Solidity escrow contracts to connect TPAs with carbon-emitting buyers.',
    github: 'https://github.com/reihannudin24/BRICS-Submission-Ceberus.git',
    demo: 'https://carbonis-brics.vercel.app',
    youtube: 'https://www.youtube.com/embed/lu5s_5h_ovE',
    skills: ['Solidity', 'Polygon L2', 'Escrow Contracts', 'Sustainability Tech', 'Financial Modeling', 'Business Strategy', 'Pitching']
  },
  {
    id: 'photobooth',
    title: 'Photoboothique',
    tagline: 'Desktop Photobooth Web Application',
    category: 'Full-stack Web',
    icon: Code,
    image: '/photoboothique.png',
    description: 'A web application developed for the Software Engineering course at BINUS University in a team with Fairy Yumi Ranita and Jiovanny Lim. Served as the Project Manager leading the development lifecycle according to the Waterfall SDLC. Personally responsible for designing and implementing the database schema for image storage, integrating Cloudinary for media gallery management, and configuring the QR code generation module for instant photo retrieval.',
    github: 'https://github.com/mojiotoo/photoboothique',
    demo: null,
    youtube: null,
    skills: ['Laravel', 'PHP', 'MySQL', 'Cloudinary', 'QR Code Generation', 'Waterfall SDLC', 'Project Management']
  },
  {
    id: 'sentisa',
    title: 'Sentisa',
    tagline: 'AI Sentiment Analysis for UMKM',
    category: 'NLP & AI Chatbot',
    icon: Database,
    image: '/sentisa.png',
    description: 'An AI-powered real-time sentiment analysis dashboard named Sentisa, built for the Gunadarma Code Week Competition 2026 in a team with Jiovanny Lim, Aviel Aquino, and Andrian Raihannudin. Served as both the Lead AI Engineer and Business Strategist (Hustler). Integrated WhatsApp Business API buyer feedback with a seller dashboard, using Aspect-Based Sentiment Analysis (ABSA) to drive strategic decisions. Trained and optimized several transformer models including IndoBERTweet, IndoRoBERTa, and custom-tuned XLM-RoBERTa (which achieved the highest performance).',
    github: 'https://github.com/mojiotoo/Sentisa',
    demo: null,
    youtube: null,
    skills: ['XLM-RoBERTa', 'Aspect-Based Sentiment Analysis', 'Transformers', 'WhatsApp API', 'Python', 'Business Strategy']
  },
  {
    id: 'hydrion',
    title: 'Hydrion',
    tagline: 'IoT + AI River Garbage Cleaner',
    category: 'IoT / Embedded Systems',
    icon: Cpu,
    image: '/hydrogel.png',
    description: 'Served as the AI Engineer for Hydrion, an IoT and AI-powered river waste cleaner recognized as a Top 10 Finalist in the Samsung Solve for Tomorrow Competition Indonesia 2025. Built in a team with Jiovanny Lim and Aviel Aquino, I custom-trained YOLO models to detect and classify organic versus non-organic river trash in real-time. Collaborated on designing the hardware and communication infrastructure using Arduino, C, and MQTT protocols to coordinate autonomous cleanup actions.',
    github: 'https://github.com/JenniGwen/HYDROGEL-SFT-SEMIFINAL',
    demo: null,
    youtube: 'https://www.youtube.com/embed/NXhRq9ddb_A',
    skills: ['YOLO', 'Computer Vision', 'IoT', 'Arduino', 'C', 'MQTT', 'Deep Learning']
  },
  {
    id: 'shipdeckk',
    title: 'ShipDecKK',
    tagline: 'Interactive Shipping Exhibition',
    category: 'Frontend Web',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1505242844900-a50e1ef0e8b0?q=80&w=600&auto=format&fit=crop',
    description: 'ShipDecKK is an interactive web showcase built using HTML, CSS, and vanilla Javascript. Features rich layouts and high-performance transitions for users to explore different ship models and specs.',
    github: 'https://github.com/jenni-gwen/shipdeckk',
    demo: 'https://shipdeckk.example.com',
    youtube: null,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Web Performance']
  }
];

export default function Projects({ setCurrentPage, setSelectedProjectId }) {
  
  const handleViewDetails = (id) => {
    setSelectedProjectId(id);
    setCurrentPage('project-detail');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '80px 24px', background: 'rgba(7, 5, 20, 1)', minHeight: '85vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px' }}>
          My <span className="text-gradient">Technical Projects</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px', fontSize: '1.05rem' }}>
          Explore my academic research, full-stack applications, and award-winning IoT AI prototypes. Click on any project card to see its full breakdown and demo.
        </p>

        <div className="grid-responsive">
          {projectsData.map((project) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.id} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                {/* Image top */}
                <div className="project-image-container" style={{ margin: '16px', marginBottom: '0' }}>
                  <img 
                    src={project.image.startsWith('/public') ? project.image.replace('/public', '') : project.image} 
                    alt={project.title} 
                    onError={(e) => {
                      // Fallback image in case the local image isn't available
                      e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    zIndex: 2
                  }}>
                    <span className="badge" style={{ background: 'rgba(15, 11, 36, 0.85)', backdropFilter: 'blur(4px)' }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'white', marginBottom: '8px' }}>{project.title}</h3>
                  <p style={{ color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px' }}>
                    {project.tagline}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px', flexGrow: 1, lineHeight: '1.6' }}>
                    {project.description.slice(0, 140)}...
                  </p>

                  {/* Skills tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {project.skills.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="badge" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="badge" style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                        +{project.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleViewDetails(project.id)}
                    className="btn-gradient"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '10px 20px',
                      fontSize: '0.9rem'
                    }}
                  >
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

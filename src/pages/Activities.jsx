import React from 'react';
import { Users, Shield, Calendar, ArrowRight, Star } from 'lucide-react';

export const activitiesData = [
  {
    id: 'ureeka-binus',
    title: 'Ureeka BINUS',
    subtitle: 'Vice President & Hackathon Participant',
    role: 'Vice President',
    duration: 'Feb 2026 - Present',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
    points: [
      'Overseeing and coordinating the strategic operations of 5 core divisions: Training & Course, Human Resources, Marketing, Partnership, and Web Development.',
      'Fostering professional collaborations with university faculty and lecturers to organize technical training programs, technology competitions, and academic workshops.',
      'Leading cross-divisional coordination to ensure consistent execution of organizational initiatives and member engagement.',
      'Active Hackathon Participant (Feb 2025 - Jan 2026): Competed in 5+ business and technology competitions, gaining mentorship in mobile development, AI, and IoT.',
      'Recognized as a Top 10 finalist in Samsung Solve for Tomorrow 2025, selected from all national competitors.'
    ]
  },
  {
    id: 'aiesec-binus',
    title: 'AIESEC in BINUS',
    subtitle: 'Project Controller & Vice President of Finance',
    role: 'OCVP Finance & Project Controller',
    duration: 'Feb 2025 - Jan 2026',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    points: [
      'Organizing Committee Vice President of Finance for Youth Today x Join AIESEC (July 2025 - Sep 2025): Spearheaded budgeting and expenditures for large-scale events, audited 800+ monthly invoices, trained teams on compliance, and drafted audit-ready reports.',
      'Organizing Committee Vice President of Finance for Incoming Global Volunteer (Mar 2025 - Aug 2025): Administered budgets under AIESEC Indonesia\'s 70/30 framework, authorized disbursements, and prepared transparent financial statements.',
      'Project Controller Team Member (Feb 2025 - Jan 2026): Tracked and monitored 10+ concurrent projects to ensure alignment with AIESEC and BINUS compliance regulations.',
      'Collaborated closely with executive boards and cross-functional teams to optimize schedules, manage resources, and deliver impactful community programs.'
    ]
  },
  {
    id: 'sjs-volunteering',
    title: 'Saint John\'s School Meruya',
    subtitle: 'Algorithm Teaching Program (Freshmen Project)',
    role: 'Volunteer Teacher & Presenter',
    duration: 'First Semester 2024',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    points: [
      'Collaborated on a mandatory freshmen community service project to teach Algorithm fundamentals to Primary 6 students at Saint John\'s School Meruya.',
      'Partnered in a cross-functional team with Jiovanny Lim, Aviel Aquino, Pira Destyasha Safira, Brandon Angelo Halim, Xander Trevor Tengari, Jonathan Hassanudin, Vigo Lianto, Naufal Maulana Ichlas, Jason, and Freshmen Partner Steven Valentino Halim.',
      'Designed interactive, engaging, and simplified logic lesson materials to introduce basic computer science and algorithmic workflows to young students.',
      'Guided and mentored students through practical logic puzzles and interactive team activities to spark early interest in STEM and problem solving.'
    ]
  }
];

export default function Activities({ setCurrentPage, setSelectedActivityId }) {
  
  const handleViewDetails = (id) => {
    setSelectedActivityId(id);
    setCurrentPage('activity-detail');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '80px 24px', background: 'rgba(7, 5, 20, 1)', minHeight: '85vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px' }}>
          My <span className="text-gradient">Activities & Organizations</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px', fontSize: '1.05rem' }}>
          Highlighting my leadership roles, financial operations, competition involvement, and community contributions. Click on any organization to write explanations and upload pictures.
        </p>

        <div className="grid-responsive" style={{ gap: '32px' }}>
          {activitiesData.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div 
                key={activity.id} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                {/* Image header */}
                <div className="project-image-container" style={{ margin: '16px', marginBottom: '0' }}>
                  <img src={activity.image} alt={activity.title} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    zIndex: 2
                  }}>
                    <span className="badge" style={{ background: 'rgba(15, 11, 36, 0.85)', backdropFilter: 'blur(4px)' }}>
                      {activity.duration}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(129, 140, 248, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-indigo)'
                    }}>
                      <IconComponent size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'white' }}>{activity.title}</h3>
                  </div>

                  <p style={{ color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px' }}>
                    {activity.subtitle}
                  </p>

                  <ul className="custom-list" style={{ flexGrow: 1, fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    {activity.points.slice(0, 2).map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleViewDetails(activity.id)}
                    className="btn-gradient"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '10px 20px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Manage & View <ArrowRight size={16} />
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

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
    subtitle: 'Project Controller & VP of Finance',
    role: 'Team Member of Project Controller',
    duration: 'Feb 2025 - Jan 2026',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    points: [
      'Tracked and monitored 10+ concurrent projects, ensuring compliance with AIESEC and BINUS policies.',
      'Led end-to-end planning and execution for initiatives (e.g. Global Village, Local Conference, Youth Career Compass).',
      'Organizing Committee Vice President of Finance in Youth Today x Join AIESEC (July 2025 - Sep 2025): Developed and executed budget plans, monitored expenses, and processed 800+ invoices in one month.',
      'Organizing Committee Vice President of Finance of Incoming Global Volunteer (March 2025 - August 2025): Controlled spending, managed reimbursements, and verified transactions to maintain financial accuracy.'
    ]
  },
  {
    id: 'other-volunteering',
    title: 'Leadership & Volunteering Activities',
    subtitle: 'Social, Teaching, and Musical Contributions',
    role: 'Volunteer',
    duration: '2021 - 2025',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop',
    points: [
      'Incoming Global Volunteer Summer Peak AIESEC in BINUS (2025) - Engaged with cross-cultural teams for international exchange programs.',
      'Teacher Volunteer in Saint John’s School Meruya (2024) - Facilitated courses and mentored junior high and senior high students.',
      'Keyboardist at Church Mass (2024) - Provided musical accompaniment for weekly community congregations.',
      'Kemah Budaya Atsanti Participant (2023) - Explored traditional cultural integration and arts development.',
      'Event Speaker (MC) in Cettiya Pannashika (2021) - Hosted community youth ceremonies and cultural forums.'
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

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
    id: 'aiesec-pc',
    title: 'AIESEC in BINUS (Project Controller)',
    subtitle: 'Team Member of Project Controller',
    role: 'Team Member of Project Controller',
    duration: 'Feb 2025 - Jan 2026',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
    points: [
      'Tracked and monitored 10+ concurrent projects, ensuring compliance with AIESEC and BINUS policies.',
      'Led end-to-end planning and execution for core initiatives including Global Village, Local Conference, and Youth Career Compass.',
      'Collaborated closely with Executive Boards to optimize schedules, manage project resources, and align deliverables.'
    ]
  },
  {
    id: 'aiesec-ytja',
    title: 'AIESEC in BINUS (YT x JA)',
    subtitle: 'OCVP Finance of Youth Today x Join AIESEC',
    role: 'Organizing Committee VP of Finance',
    duration: 'July 2025 - Sep 2025',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop',
    points: [
      'Developed and executed budget plans, monitored expenses, and ensured cost efficiency for large-scale promotional events.',
      'Oversaw financial communications, processed and audited 800+ transactions in a single month, and optimized workflows.',
      'Trained finance team members on standard procedures, financial compliance, and delegated responsibilities effectively.',
      'Produced accurate, audit-ready financial reports and maintained detailed digital transaction archives.'
    ]
  },
  {
    id: 'aiesec-igv',
    title: 'AIESEC in BINUS (iGV)',
    subtitle: 'OCVP Finance of Incoming Global Volunteer',
    role: 'Organizing Committee VP of Finance',
    duration: 'Mar 2025 - Aug 2025',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    points: [
      'Designed and managed incoming volunteer program budgets in alignment with AIESEC Indonesia\'s 70/30 financial framework.',
      'Controlled departmental spending, authorized reimbursements, and verified exchange transactions to maintain absolute accuracy.',
      'Trained finance teams and collaborated with other operational divisions to ensure seamless and compliant financial operations.',
      'Compiled comprehensive financial statements and archived detailed transaction records for internal audit procedures.'
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

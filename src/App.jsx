import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Activities from './pages/Activities';
import ActivityDetail from './pages/ActivityDetail';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedActivityId, setSelectedActivityId] = useState(null);

  // Render current page component based on router state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'projects':
        return (
          <Projects 
            setCurrentPage={setCurrentPage} 
            setSelectedProjectId={setSelectedProjectId} 
          />
        );
      case 'project-detail':
        return (
          <ProjectDetail 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} 
            selectedProjectId={selectedProjectId} 
          />
        );
      case 'activities':
        return (
          <Activities 
            setCurrentPage={setCurrentPage} 
            setSelectedActivityId={setSelectedActivityId} 
          />
        );
      case 'activity-detail':
        return (
          <ActivityDetail 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} 
            selectedActivityId={selectedActivityId} 
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div 
      className={currentPage === 'home' ? 'bg-magical-forest' : ''} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main style={{ flexGrow: 1, width: '100%' }}>
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;

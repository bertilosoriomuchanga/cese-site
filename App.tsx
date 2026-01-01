
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import StructurePage from './components/StructurePage';
import MembershipPage from './components/MembershipPage';
import EventsPage from './components/EventsPage';
import ContactPage from './components/ContactPage';

export type Page = 'home' | 'about' | 'structure' | 'membership' | 'events' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'structure':
        return <StructurePage />;
      case 'membership':
        return <MembershipPage />;
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default App;

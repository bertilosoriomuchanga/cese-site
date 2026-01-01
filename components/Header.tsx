
import React, { useState } from 'react';
import { type Page } from '../App';
import { LogoIcon } from './icons/LogoIcon';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  closeMenu?: () => void;
  isMobile?: boolean;
}> = ({ page, currentPage, setCurrentPage, children, closeMenu, isMobile }) => (
  <button
    onClick={() => {
      setCurrentPage(page);
      if (closeMenu) closeMenu();
    }}
    className={`w-full text-left md:w-auto md:text-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
      currentPage === page
        ? 'bg-brand-primary text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-brand-primary'
    } ${isMobile ? 'block' : ''}`}
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Início' },
    { page: 'about', label: 'Sobre' },
    { page: 'structure', label: 'Estrutura' },
    { page: 'membership', label: 'Membros' },
    { page: 'events', label: 'Eventos' },
    { page: 'contact', label: 'Contactos' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-brand-primary p-2 rounded-md">
                <LogoIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-brand-dark">CESE</span>
              <span className="text-xs text-gray-500 hidden sm:block">Clube de Estudos Sociais e Económicos</span>
              <span className="text-xs text-gray-400 hidden sm:block">Universidade Joaquim Chissano</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map(item => (
              <NavLink key={item.page} page={item.page} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map(item => (
                 <NavLink key={item.page} page={item.page} currentPage={currentPage} setCurrentPage={setCurrentPage} closeMenu={() => setIsMenuOpen(false)} isMobile={true}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

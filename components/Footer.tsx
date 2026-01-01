
import React from 'react';
import { type Page } from '../App';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';
import { FacebookIcon, InstagramIcon } from './icons/SocialIcons';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-2">
                <h3 className="font-bold text-lg text-white mb-4">CESE - UJC</h3>
                <p className="text-sm">Clube de Estudos Sociais e Económicos</p>
                <p className="text-sm">Universidade Joaquim Chissano</p>
                <p className="text-sm mt-2">Faculdade de Economia e Negócios</p>
                <p className="text-sm mt-2 font-semibold">Promovido pelo NEFEN</p>
            </div>
            <div>
                 <h3 className="font-bold text-lg text-white mb-4">Contactos</h3>
                 <ul className="space-y-3 text-sm">
                     <li className="flex items-start"><MailIcon className="h-4 w-4 mr-2 mt-1 flex-shrink-0" /> cese.ujc@gmail.com</li>
                     <li className="flex items-start"><PhoneIcon className="h-4 w-4 mr-2 mt-1 flex-shrink-0" /> +258 83 102 7185</li>
                     <li className="flex items-start"><LocationPinIcon className="h-4 w-4 mr-2 mt-1 flex-shrink-0" /> Campus Universitário, Maputo</li>
                 </ul>
            </div>
             <div className="md:col-span-2 lg:col-span-1">
                 <h3 className="font-bold text-lg text-white mb-4">Redes Sociais</h3>
                 <div className="flex space-x-4">
                     <a href="https://www.facebook.com/ceseujc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white"><FacebookIcon className="h-6 w-6" /></a>
                     <a href="https://www.instagram.com/cese_ujc?igsh=MWdic2hqY2FvbXd4cw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white"><InstagramIcon className="h-6 w-6" /></a>
                 </div>
            </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} CESE - Clube de Estudos Sociais e Económicos - UJC. Todos os direitos reservados.</p>
            <p className="text-gray-400 mt-1">Este site segue o Regulamento Interno do CESE aprovado pelo NEFEN.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

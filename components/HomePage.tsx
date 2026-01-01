
import React from 'react';
import { type Page } from '../App';
import { ClockIcon } from './icons/ClockIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const EventCard: React.FC<{ date: string; month: string; title: string; time: string; location: string;}> = ({ date, month, title, time, location }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center space-x-6">
        <div className="text-center border-r pr-6">
            <p className="text-sm text-gray-500">{month}</p>
            <p className="text-3xl font-bold text-brand-primary">{date}</p>
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <div className="flex items-center text-sm text-gray-600 space-x-4">
                <span className="flex items-center"><ClockIcon className="h-4 w-4 mr-1.5" /> {time}</span>
                <span className="flex items-center"><LocationPinIcon className="h-4 w-4 mr-1.5" /> {location}</span>
            </div>
        </div>
    </div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Excelência em Análise e Debate
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
              Um polo de excelência na UJC para análise, argumentação e pesquisa em questões sociais e económicas
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                onClick={() => setCurrentPage('membership')}
                className="bg-brand-red text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
                >
                Torne-se Membro
                </button>
                <button
                onClick={() => setCurrentPage('events')}
                className="bg-brand-blue text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                Próximos Eventos
                </button>
            </div>
        </div>
      </section>

      {/* Mission & Objectives Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Missão do CESE</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-brand-light p-8 rounded-lg border-l-4 border-brand-red">
                    <p className="text-gray-700 leading-relaxed">
                        Constituir-se como um polo de excelência na Universidade Joaquim Chissano, através da análise, argumentação e pesquisa, cultivando o espírito crítico entre os estudantes e capacitando-os a representar a UJC em diversos fóruns e atividades.
                    </p>
                </div>
                <div className="bg-brand-light p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Objetivos do Clube</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start"><span className="text-brand-red mr-2 mt-1">&#10003;</span>Promover análise crítica de questões sociais e económicas.</li>
                        <li className="flex items-start"><span className="text-brand-red mr-2 mt-1">&#10003;</span>Desenvolver a prática de pesquisa e análise de dados.</li>
                         <li className="flex items-start"><span className="text-brand-red mr-2 mt-1">&#10003;</span>Fortalecer as habilidades de oratória, debate e argumentação.</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-brand-light">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-4">Próximos Eventos</h2>
             <div className="text-center mb-12">
                <button onClick={() => setCurrentPage('membership')} className="text-brand-primary font-semibold hover:underline">
                    Detalhes das quotas
                </button>
             </div>
            <div className="space-y-6 max-w-3xl mx-auto">
                <EventCard date="25" month="MAR" title="Workshop: Análise de Dados Económicos" time="14:00 - 17:00" location="Sala 201, FEN" />
                <EventCard date="02" month="ABR" title="Debate: Economia Moçambicana 2024" time="10:00 - 12:30" location="Auditório Principal" />
                <EventCard date="15" month="ABR" title="Palestra com Economista Convidado" time="15:00 - 17:00" location="A definir" />
            </div>
            <div className="text-center mt-12">
                 <button
                    onClick={() => setCurrentPage('events')}
                    className="bg-brand-primary text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300"
                    >
                    Ver Todos os Eventos
                </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HomePage;

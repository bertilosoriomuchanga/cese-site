
import React from 'react';
import { ClockIcon } from './icons/ClockIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';

const EventCard: React.FC<{ date: string; month: string; title: string; time: string; location: string; description: string;}> = ({ date, month, title, time, location, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6">
        <div className="text-center border-b sm:border-b-0 sm:border-r pb-4 sm:pb-0 sm:pr-6 mb-4 sm:mb-0">
            <p className="text-sm text-gray-500">{month}</p>
            <p className="text-3xl font-bold text-brand-primary">{date}</p>
        </div>
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <div className="flex items-center text-sm text-gray-600 space-x-4">
                <span className="flex items-center"><ClockIcon className="h-4 w-4 mr-1.5" /> {time}</span>
                <span className="flex items-center"><LocationPinIcon className="h-4 w-4 mr-1.5" /> {location}</span>
            </div>
        </div>
    </div>
);

const EventsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-brand-dark mb-2">Calendário de Eventos</h1>
                <p className="text-lg text-gray-600">Participe dos nossos debates, workshops e palestras.</p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
                 <EventCard date="15" month="ABR" title="Palestra com Economista Convidado" time="15:00 - 17:00" location="A definir" description="Uma conversa inspiradora com um profissional de renome no mercado económico." />
                 <EventCard date="02" month="ABR" title="Debate: Economia Moçambicana 2024" time="10:00 - 12:30" location="Auditório Principal" description="Análise das perspectivas e desafios da economia nacional para o ano corrente." />
                <EventCard date="25" month="MAR" title="Workshop: Análise de Dados Económicos" time="14:00 - 17:00" location="Sala 201, FEN" description="Aprenda ferramentas práticas para análise e visualização de dados económicos." />
                <EventCard date="18" month="FEV" title="Sessão de Abertura CESE" time="10:00 - 12:00" location="Auditório Principal" description="Evento de lançamento do clube, apresentando a missão, visão e o plano de atividades." />
            </div>
        </div>
    );
};

export default EventsPage;

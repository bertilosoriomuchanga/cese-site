
import React from 'react';

const PublicationCard: React.FC<{ title: string; date: string; description: string; status: 'Em Breve' }> = ({ title, date, description, status }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-accent">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold font-serif text-brand-blue-dark">{title}</h3>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800`}>
                {status}
            </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-gray-700">{description}</p>
    </div>
);

const PublicationsPage: React.FC = () => {
    return (
        <div className="space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold font-serif text-brand-blue-dark mb-2">Publicações do CESE</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprometidos com a disseminação do conhecimento, o CESE iniciará a sua produção de boletins e artigos científicos em 2026. Fique atento às nossas futuras publicações.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <PublicationCard 
                    title="1º Boletim Científico do CESE"
                    date="Previsto para Julho de 2026"
                    description="Análise aprofundada sobre os temas debatidos no primeiro semestre, incluindo um estudo sobre a desigualdade social em Moçambique."
                    status="Em Breve"
                />
                 <PublicationCard 
                    title="2º Boletim Científico do CESE"
                    date="Previsto para Novembro de 2026"
                    description="Compilação das pesquisas e resultados da simulação de conferência económica, com foco em diplomacia e desenvolvimento."
                    status="Em Breve"
                />
            </div>
        </div>
    );
};

export default PublicationsPage;

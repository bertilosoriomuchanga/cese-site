
import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold text-brand-dark mb-4 pb-2 border-b-2 border-brand-red">{title}</h2>
        <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-brand-dark mb-10">Sobre o CESE</h1>
                
                <Section title="Natureza e Âmbito">
                    <p>O Clube de Estudos Sociais e Económicos (CESE) é uma entidade de natureza extracurricular e sem fins lucrativos, constituído sob a égide do Núcleo de Estudantes da Faculdade de Economia e Negócios (NEFEN) da Universidade Joaquim Chissano (UJC).</p>
                    <p>O CESE possui autonomia administrativa e operacional, sendo institucionalmente subordinado ao NEFEN, que exerce a coordenação institucional na UJC.</p>
                </Section>

                <Section title="Missão">
                    <p className="text-lg italic text-brand-primary">"Constituir-se como um polo de excelência na Universidade Joaquim Chissano, através da análise, argumentação e pesquisa, cultivando o espírito crítico entre os estudantes e capacitando-os a representar a UJC em diversos fóruns e atividades."</p>
                </Section>

                <Section title="Objetivos">
                    <ul className="list-disc list-inside space-y-3">
                        <li>Promover o interesse pela análise crítica de questões sociais e económicas.</li>
                        <li>Desenvolver a prática de pesquisa e análise de dados.</li>
                        <li>Fortalecer as habilidades de oratória, debate e argumentação.</li>
                        <li>Fomentar o intercâmbio de conhecimento e experiências entre os estudantes da UJC e outras instituições.</li>
                    </ul>
                </Section>
            </div>
        </div>
    );
};

export default AboutPage;

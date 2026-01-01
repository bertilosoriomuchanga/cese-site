
import React from 'react';

const StructureCard: React.FC<{ title: string; subtitle: string; children: React.ReactNode, bgColor?: string }> = ({ title, subtitle, children, bgColor = 'bg-blue-50' }) => (
  <div className={`border-l-4 border-brand-red p-6 rounded-lg shadow-md ${bgColor}`}>
    <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
    <div className="text-gray-700 space-y-2">{children}</div>
  </div>
);

const MemberRole: React.FC<{ role: string; name: string }> = ({ role, name }) => (
  <div>
    <h4 className="font-semibold text-brand-primary">{role}</h4>
    <p className="text-sm">{name}</p>
  </div>
);

const StructurePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-brand-dark mb-10">Estrutura de Governança e Gestão</h1>
            
            <div className="space-y-8">
                <StructureCard title="Conselho de Administração" subtitle="Órgão máximo de governança" bgColor="bg-gray-50">
                <p>Responsável por definir a visão estratégica do clube, supervisionar as atividades e assegurar a prestação de contas.</p>
                <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MemberRole role="Presidente (PCA)" name="Cecília Mungoi" />
                    <MemberRole role="Vice-Presidente (Vice-PCA)" name="Kelyussra Kumay" />
                </div>
                </StructureCard>

                <div className="pl-0 md:pl-8">
                <StructureCard title="Diretoria Executiva" subtitle="Equipa de gestão diária">
                    <p>Responsável por traduzir a visão estratégica em planos operacionais e reporta diretamente ao Conselho de Administração.</p>
                    <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MemberRole role="Chief Executive Officer (CEO)" name="Bertil Muchanga" />
                    <MemberRole role="Chief Financial Officer (CFO)" name="Clayton Ngovene" />
                    <MemberRole role="Chief Operating Officer (COO)" name="Sousa Daniel" />
                    </div>
                </StructureCard>
                </div>

                <div className="pl-0 md:pl-16">
                <StructureCard title="Diretorias de Área" subtitle="Lideranças de execução de atividades" bgColor="bg-gray-50">
                    <p>Executam as atividades do clube, reportando à Diretoria Executiva. Cada diretoria pode ter uma equipa própria de membros e associados.</p>
                    <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h4 className="font-semibold text-brand-primary">Diretoria de Pesquisa e Análise</h4>
                        <p className="text-sm">Coordena estudos, análises de dados e produção de conteúdo.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-brand-primary">Diretoria de Fóruns e Engajamento</h4>
                        <p className="text-sm">Organiza debates, workshops e eventos para membros.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-brand-primary">Diretoria de Relações Estratégicas e Extensão</h4>
                        <p className="text-sm">Estabelece parcerias e promove o clube externamente.</p>
                    </div>
                    </div>
                </StructureCard>
                </div>

            </div>
        </div>
    </div>
  );
};

export default StructurePage;


import React from 'react';

const fees = [
    { escalao: 'I', categoria: 'Membro Participante / Associado', responsabilidade: 'Baixa (Acesso a eventos/conteúdo)', mensal: '10 MT', anual: '120 MT' },
    { escalao: 'II', categoria: 'Membro da Equipa de Área / Sócio', responsabilidade: 'Média (Execução de atividades)', mensal: '20 MT', anual: '240 MT' },
    { escalao: 'III', categoria: 'Diretoria Executiva (CEO, CFO, COO)', responsabilidade: 'Alta (Gestão Operacional)', mensal: '35 MT', anual: '420 MT' },
    { escalao: 'IV', categoria: 'Conselho de Administração (PCA, Vice-PCA)', responsabilidade: 'Máxima (Governança e Estratégia)', mensal: '50 MT', anual: '600 MT' },
];

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-brand-dark mb-4">{title}</h3>
        <div className="text-gray-700 space-y-2">{children}</div>
    </div>
);

const MembershipPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-brand-dark mb-2">Seja Membro do CESE</h1>
                <p className="text-lg text-gray-600">A participação no CESE é aberta a qualquer estudante da UJC que demonstre interesse e compromisso.</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <InfoCard title="Como Aderir">
                    <p>Para se tornar membro do CESE, o primeiro passo é entrar em contacto com o representante da sua turma. Ele fornecerá todas as informações e orientações sobre os passos subsequentes para a sua inscrição.</p>
                </InfoCard>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <InfoCard title="Direitos dos Membros">
                    <ul className="list-disc list-inside">
                        <li>Participar ativamente nas atividades, eventos e projetos do clube.</li>
                        <li>Eleger e ser eleito para cargos de liderança, nos termos do Regulamento Eleitoral.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Deveres dos Membros">
                     <ul className="list-disc list-inside">
                        <li>Participar de forma assídua nas reuniões e atividades.</li>
                        <li>Contribuir para a realização dos objetivos do clube.</li>
                        <li>Respeitar e cumprir as normas estabelecidas no regulamento.</li>
                        <li>Efetuar o pagamento pontual das quotas.</li>
                    </ul>
                </InfoCard>
            </div>

            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">Gestão Financeira e Quotas</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
                    <h3 className="text-xl font-semibold text-brand-dark mb-4">Tabela de Quotas Progressivas</h3>
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-brand-dark">
                            <tr>
                                <th className="p-3">Escalão</th>
                                <th className="p-3">Categoria do Membro</th>
                                <th className="p-3">Nível de Responsabilidade</th>
                                <th className="p-3 text-right">Quota Mensal</th>
                                <th className="p-3 text-right">Quota Anual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fees.map((fee, index) => (
                                <tr key={fee.escalao} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                    <td className="p-3 font-medium">{fee.escalao}</td>
                                    <td className="p-3">{fee.categoria}</td>
                                    <td className="p-3 text-gray-600">{fee.responsabilidade}</td>
                                    <td className="p-3 font-semibold text-right">{fee.mensal}</td>
                                    <td className="p-3 font-semibold text-right">{fee.anual}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-gray-700">
                        <div>
                            <h4 className="font-semibold text-brand-dark">Prazos de Pagamento</h4>
                            <p><strong>Mensal:</strong> Até ao dia 16 de cada mês de atividade letiva. <br/> <strong>Anual:</strong> Até ao final do primeiro mês de atividades letivas do ano académico.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold text-brand-dark">Meios de Pagamento</h4>
                            <p>Pagamento através de Carteiras Móveis (Mobile Money) ou em Numerário (mediante Documento de Recebimento de Quota).</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-dark">Consequências da Inadimplência</h4>
                            <p className="text-brand-red">O não pagamento resulta na suspensão imediata de direitos como Voto, Elegibilidade e restrição de Participação em eventos. A regularização deve ocorrer em até 30 dias após notificação para evitar a exclusão do registo de membros.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;

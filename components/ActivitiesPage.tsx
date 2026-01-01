
import React from 'react';

const activities = [
    { period: "Janeiro - Fevereiro", tasks: ["Elaboração do plano anual", "Recrutamento de novos membros", "Definição do calendário anual de eventos", "Lançamento oficial nas redes sociais"], responsible: "Diretoria Executiva", expected: "Plano aprovado, equipa consolidada, calendário divulgado, aumento da base de membros." },
    { period: "Março", tasks: ['Debate inaugural: "Desigualdade Social em Moçambique"', "Formação de grupos de pesquisa temáticos", "Lançamento do sistema de quotas"], responsible: "Diretoria de fóruns e engajamento", expected: "Evento realizado com sucesso, grupos de pesquisa constituídos, início da arrecadação financeira." },
    { period: "Abril - Junho", tasks: ["Debates mensais (temas pré-definidos)", 'Workshop: "Oratória e Argumentação"', "Sessões de pesquisa e produção de conteúdo", "Relatório financeiro trimestral"], responsible: "Todas as diretorias", expected: "Consolidação da frequência de eventos, melhoria das competências dos membros, transparência financeira." },
    { period: "Julho", tasks: ["Produção do 1º boletim científico do CESE", "Avaliação intermédia do ano", "Planeamento do 2º semestre"], responsible: "Diretoria de pesquisa e análise", expected: "Publicação do boletim, análise crítica do desempenho, ajustes no plano." },
    { period: "Agosto - Setembro", tasks: ["Mesa-redonda com convidados externos", "Workshop de metodologia de pesquisa", "Campanha de captação de novos membros"], responsible: "Diretorias de relações estratégicas", expected: "Fortalecimento de parcerias, aumento da qualidade técnica, expansão da base de membros." },
    { period: "Outubro", tasks: ["Simulação de conferência económica (tipo ONU)", "Sessões intensivas de preparação para publicação científica"], responsible: "Todas as diretorias", expected: "Evento de grande impacto, experiência prática em diplomacia económica, materiais para publicação." },
    { period: "Novembro", tasks: ["Publicação do 2º boletim científico", "Preparação do relatório anual de atividades", "Cerimónia de reconhecimento de membros destacados"], responsible: "Diretoria Executiva", expected: "Divulgação de resultados, prestação de contas, motivação e retenção de membros." },
    { period: "Dezembro", tasks: ["Encerramento oficial do ano", "Avaliação final e planeamento para 2027", "Relatório financeiro anual"], responsible: "Conselho de Administração (PCA)", expected: "Encerramento organizado, lições aprendidas, base para o próximo ano." },
];

const ActivitiesPage: React.FC = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold font-serif text-center text-brand-blue-dark mb-10">Plano de Execução – CESE 2026</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-brand-blue text-white font-serif">
                        <tr>
                            <th className="py-3 px-4 text-left">Período</th>
                            <th className="py-3 px-4 text-left">Atividades</th>
                            <th className="py-3 px-4 text-left">Responsáveis</th>
                            <th className="py-3 px-4 text-left">Resultados Esperados</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((item, index) => (
                            <tr key={item.period} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50`}>
                                <td className="py-3 px-4 font-semibold text-brand-blue align-top">{item.period}</td>
                                <td className="py-3 px-4 align-top">
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                        {item.tasks.map(task => <li key={task}>{task}</li>)}
                                    </ul>
                                </td>
                                <td className="py-3 px-4 text-sm text-gray-600 align-top">{item.responsible}</td>
                                <td className="py-3 px-4 text-sm text-gray-600 align-top">{item.expected}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActivitiesPage;


import React from 'react';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';

const ContactInfoCard: React.FC<{icon: React.ReactNode, title: string, children: React.ReactNode}> = ({icon, title, children}) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
        <div className="flex-shrink-0 text-brand-primary mt-1">{icon}</div>
        <div>
            <h3 className="text-lg font-semibold text-brand-dark">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    </div>
);


const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-brand-dark mb-2">Entre em Contacto</h1>
                <p className="text-lg text-gray-600">Estamos aqui para ajudar. Envie-nos uma mensagem ou visite-nos.</p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <ContactInfoCard icon={<MailIcon className="h-6 w-6"/>} title="Email">
                        <a href="mailto:cese.ujc@gmail.com" className="hover:underline">cese.ujc@gmail.com</a>
                    </ContactInfoCard>
                     <ContactInfoCard icon={<PhoneIcon className="h-6 w-6"/>} title="Telefone">
                        +258 84 000 0000
                    </ContactInfoCard>
                     <ContactInfoCard icon={<LocationPinIcon className="h-6 w-6"/>} title="Localização">
                        Campus Universitário da UJC<br/>Maputo, Moçambique
                    </ContactInfoCard>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                     <h2 className="text-2xl font-bold text-brand-dark mb-6">Envie uma Mensagem</h2>
                     <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300">
                                Enviar
                            </button>
                        </div>
                     </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

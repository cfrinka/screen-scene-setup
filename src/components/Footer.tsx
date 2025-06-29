
import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  const links = [
    'Cursos',
    'Catálogo', 
    'Sobre nós',
    'Gestão de Cultura',
    'Notícias'
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Onde estamos?</h3>
            <div className="flex items-start space-x-2 mb-4">
              <MapPin size={20} className="text-yellow-400 mt-1" />
              <div className="text-gray-300">
                <p>Avenida Paulista, 1234</p>
                <p>São Paulo - SP</p>
                <p>CEP: 01234-567</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Siga a gente:</h3>
            <div className="flex items-center space-x-2">
              <Instagram size={24} className="text-yellow-400" />
              <span className="text-gray-300">@grupoteatralgorki</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 Teatro GORKI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

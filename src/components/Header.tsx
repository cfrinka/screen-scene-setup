
import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const navItems = [
    'Cursos',
    'Catálogo', 
    'Sobre nós',
    'Gestão de Cultura',
    'História'
  ];

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white">
              GORKI
            </div>
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

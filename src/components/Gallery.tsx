
import React from 'react';

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-serif text-gray-800 mb-8">
              Galeria de Fotos
            </h2>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop"
                alt="Galeria"
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-serif text-gray-800 mb-8">
              Últimas Notícias
            </h2>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop"
                alt="Notícias"
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Projeto 1</h3>
                  <p className="text-gray-300">
                    Últimas novidades do nosso teatro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-purple-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-serif text-yellow-400 mb-4 animate-fade-in">
            PETER PAN
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 tracking-wide">
            O MUSICAL
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projeto 1</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`w-3 h-3 rounded-full ${dot === 1 ? 'bg-yellow-400' : 'bg-gray-600'} transition-colors duration-200`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const ImageSection = () => {
  return (
    <section className="py-0">
      <div className="relative h-96 md:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&h=800&fit=crop"
          alt="Teatro atmosférico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </section>
  );
};

export default ImageSection;

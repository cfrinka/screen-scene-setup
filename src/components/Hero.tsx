import React, { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

interface SlideData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const images = import.meta.glob("../assets/banners/*", {
  eager: true,
  import: "default",
});

const Hero = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselApiRef = useRef<CarouselApi | null>(null);

  useEffect(() => {
    import("../lib/heroSliderData.json").then((data) => {
      const slidesData = (data.default || data).map((slide: SlideData) => ({
        ...slide,
        image: images[
          slide.image.replace("../assets/banners/", "../assets/banners/")
        ] as string,
      }));
      setSlides(slidesData);
    });
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!carouselApiRef.current) return;
    const interval = setInterval(() => {
      carouselApiRef.current?.scrollNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [slides]);

  const handleDotClick = (idx: number) => {
    carouselApiRef.current?.scrollTo(idx);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-white pb-3">
      <div className="relative z-10 w-full max-w-none mx-auto px-0 group">
        <Carousel
          opts={{ loop: true }}
          className="w-full"
          setApi={(api) => {
            carouselApiRef.current = api;
            api?.on("select", () => setActiveIndex(api.selectedScrollSnap()));
          }}
        >
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx}>
                <div
                  className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="mb-8">
                    <h1 className="text-6xl md:text-8xl font-serif text-yellow-400 mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-2xl md:text-3xl font-light mb-8 tracking-wide">
                      {slide.subtitle}
                    </p>
                  </div>
                  <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full focus:outline-none border-2 border-transparent ${
                idx === activeIndex
                  ? "bg-yellow-400 border-yellow-400"
                  : "bg-gray-600"
              } transition-colors duration-200`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

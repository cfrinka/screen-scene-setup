
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';
import ImageSection from '../components/ImageSection';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <UpcomingEvents />
      <ImageSection />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;

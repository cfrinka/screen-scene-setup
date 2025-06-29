import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";
import ImageSection from "../components/ImageSection";
import Gallery from "../components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <UpcomingEvents />
      <ImageSection />
      <Gallery />
    </div>
  );
};

export default Index;

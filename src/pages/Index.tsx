import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";
import ImageSection from "../components/ImageSection";
import Gallery from "../components/Gallery";
import Mosaic from "../components/Mosaic";
import mosaicImages from "../lib/mosaicImages.json";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Hero />
      <UpcomingEvents />
      <ImageSection />
      <Gallery />
      <div className="mt-12">
        <Mosaic images={mosaicImages} />
      </div>
    </motion.div>
  );
};

export default Index;

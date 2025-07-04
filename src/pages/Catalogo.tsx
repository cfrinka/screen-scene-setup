import { motion } from "framer-motion";
import caoImg from "../assets/banners/cao.png";
import peterpanImg from "../assets/banners/peterpan.png";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";

const spokenTheatre = [
  {
    title: "CÃO",
    image: caoImg,
    description:
      "Espetáculo de teatro falado que explora temas contemporâneos com intensidade e emoção.",
  },
];

const musicalTheatre = [
  {
    title: "PETER PAN",
    image: peterpanImg,
    description:
      "Um musical encantador que traz a clássica história de Peter Pan para toda a família.",
  },
];

const allItems = [...spokenTheatre, ...musicalTheatre];

const ShowItem = ({
  item,
}: {
  item: { title: string; image: string; description: string };
}) => (
  <div className="relative group w-full max-w-2xl md:max-w-4xl mx-auto px-0 md:px-4">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-56 sm:h-72 md:h-[420px] object-cover object-center rounded-xl md:rounded-3xl shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500"
    />
    <div className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 md:bottom-8 w-[95%] sm:w-4/5 md:w-2/3 bg-white/90 md:bg-white/70 backdrop-blur-md rounded-lg md:rounded-2xl shadow-2xl p-3 sm:p-5 md:p-8 flex flex-col items-center opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 translate-y-0 md:translate-y-8 transition-all duration-500">
      <h3 className="text-lg sm:text-xl md:text-3xl font-extrabold text-black mb-1 sm:mb-2 tracking-tight text-center drop-shadow-lg">
        {item.title}
      </h3>
      <p className="text-xs sm:text-base md:text-lg text-black/80 text-center font-medium drop-shadow">
        {item.description}
      </p>
    </div>
  </div>
);

const Catalogo = () => (
  <motion.div
    className="min-h-screen w-full flex flex-col items-center pt-20 px-2 bg-white"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-16 text-black tracking-tight">
      Catálogo
    </h1>
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allItems.map((item) => (
          <ShowItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  </motion.div>
);

export default Catalogo;

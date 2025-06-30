import { motion } from "framer-motion";
import Mosaic from "../components/Mosaic";
import mosaicImages from "../lib/mosaicImages.json";

const Cursos = () => (
  <motion.div
    className="flex flex-col items-center justify-center py-16 mt-16"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h1 className="text-4xl font-bold mb-4">Cursos</h1>
    <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
      Descubra nossos cursos disponíveis. Em breve, mais informações e detalhes
      sobre cada curso oferecido.
    </p>
    <div className="w-full max-w-5xl mt-8">
      <Mosaic images={mosaicImages} />
    </div>
  </motion.div>
);

export default Cursos;

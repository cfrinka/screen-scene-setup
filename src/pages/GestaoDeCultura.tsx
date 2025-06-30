import { motion } from "framer-motion";

const GestaoDeCultura = () => (
  <motion.div
    className="flex flex-col items-center justify-center py-16 text-red-400"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h1 className="text-4xl font-bold mb-4">Gestão de Cultura</h1>
    <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
      Saiba mais sobre nossos projetos e iniciativas de gestão cultural. Em
      breve, mais informações e novidades.
    </p>
  </motion.div>
);

export default GestaoDeCultura;

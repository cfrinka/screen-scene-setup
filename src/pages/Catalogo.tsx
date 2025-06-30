import { motion } from "framer-motion";

const Catalogo = () => (
  <motion.div
    className="flex flex-col items-center justify-center py-16"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h1 className="text-4xl font-bold mb-4">Catálogo</h1>
    <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
      Explore nosso catálogo de produtos e serviços. Em breve, mais informações
      e detalhes sobre cada item.
    </p>
  </motion.div>
);

export default Catalogo;

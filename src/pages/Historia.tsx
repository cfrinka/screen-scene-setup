import { motion } from "framer-motion";

const Historia = () => (
  <motion.div
    className="w-full flex flex-col items-center pt-20 px-2 mb-20 bg-white"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h1 className="text-4xl font-bold mb-4">História</h1>
    <div className="max-w-4xl w-full flex flex-col gap-12 items-center">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
          alt="Espetáculo Peter Pan"
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <p className="text-lg text-gray-700 text-center md:text-left">
          Nossa história começou há mais de uma década, quando um pequeno grupo
          de visionários decidiu unir forças para criar um espaço dedicado à
          cultura e à educação. O primeiro grande evento foi um espetáculo
          teatral que reuniu a comunidade e marcou o início de uma trajetória
          inspiradora.
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=600&q=80"
          alt="Projeto Mahogony"
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <p className="text-lg text-gray-700 text-center md:text-left">
          Ao longo dos anos, realizamos inúmeros projetos, oficinas e eventos
          que impactaram a vida de milhares de pessoas. Cada conquista é fruto
          do trabalho coletivo, da paixão e da perseverança de todos que
          acreditam em nosso sonho.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
          alt="Curso Infantil"
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <p className="text-lg text-gray-700 text-center md:text-left">
          Seguimos escrevendo novos capítulos dessa trajetória, sempre inovando
          e buscando formas de ampliar nosso alcance. O futuro reserva ainda
          mais histórias, conquistas e momentos inesquecíveis para todos que
          fazem parte dessa jornada.
        </p>
      </div>
    </div>
  </motion.div>
);

export default Historia;

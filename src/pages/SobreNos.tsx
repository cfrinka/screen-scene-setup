import { motion } from "framer-motion";

const SobreNos = () => (
  <motion.div
    className="w-full flex flex-col items-center pt-20 px-2 mb-20 bg-white"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h1 className="text-4xl font-bold mb-4">Sobre nós</h1>
    <div className="max-w-4xl w-full flex flex-col gap-12 items-center">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
          alt="Workshop"
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <p className="text-lg text-gray-700 text-center md:text-left">
          Somos uma organização dedicada à promoção da cultura, arte e educação
          em nossa comunidade. Fundada por um grupo de entusiastas apaixonados,
          nossa missão é criar oportunidades de aprendizado, expressão artística
          e integração social para pessoas de todas as idades.
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Equipe reunida"
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <p className="text-lg text-gray-700 text-center md:text-left">
          Valorizamos a diversidade, a criatividade e o compromisso com o
          desenvolvimento humano. Nossa equipe é formada por profissionais
          experientes e voluntários engajados, todos unidos pelo propósito de
          transformar vidas por meio da cultura.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
          alt="Atividade cultural"
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <p className="text-lg text-gray-700 text-center md:text-left">
          Junte-se a nós nessa jornada de transformação e descubra como a arte e
          a cultura podem impactar positivamente a sociedade. Estamos sempre de
          portas abertas para novos talentos, ideias e parcerias.
        </p>
      </div>
    </div>
    <a
      href="https://criarte.grupogorki.com.br"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-12 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
    >
      Acessar Sistema Criarte
    </a>
  </motion.div>
);

export default SobreNos;

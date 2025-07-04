import { motion } from "framer-motion";
import infantilImg from "../assets/cursos/infantil.png";
import adultoImg from "../assets/cursos/adulto.png";
import musicalImg from "../assets/cursos/musical.png";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";

const courses = [
  {
    title: "Curso Infantil",
    img: infantilImg,
    description:
      "Voltado para crianças, este curso estimula a criatividade e o desenvolvimento artístico desde cedo.",
    details:
      "Neste curso, as crianças participam de atividades lúdicas, jogos teatrais e exercícios de expressão corporal, promovendo o desenvolvimento social e emocional.",
    enrollUrl: "#inscricao-infantil",
  },
  {
    title: "Curso Adulto",
    img: adultoImg,
    description:
      "Para adultos que desejam explorar ou aprofundar seus conhecimentos em artes cênicas e expressão corporal.",
    details:
      "O curso abrange técnicas de interpretação, improvisação, voz e movimento, proporcionando um ambiente acolhedor para iniciantes e experientes.",
    enrollUrl: "#inscricao-adulto",
  },
  {
    title: "Curso Musical",
    img: musicalImg,
    description:
      "Focado em teatro musical, integrando canto, dança e interpretação para todas as idades.",
    details:
      "Os participantes desenvolvem habilidades em canto, dança e atuação, com montagens de musicais e apresentações ao final do curso.",
    enrollUrl: "#inscricao-musical",
  },
];

const Cursos = () => (
  <motion.div
    className="min-h-screen w-full flex flex-col items-center pt-20 px-2 bg-white"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-16 text-black tracking-tight">
      Cursos
    </h1>
    <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
      Descubra nossos cursos disponíveis. Confira abaixo as opções e escolha a
      que mais combina com você!
    </p>
    <div className="w-full max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {courses.map((course) => (
        <Dialog key={course.title}>
          <DialogTrigger asChild>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2 text-center">
                {course.title}
              </h2>
              <p className="text-gray-700 text-center">{course.description}</p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{course.title}</DialogTitle>
              <DialogDescription>{course.description}</DialogDescription>
            </DialogHeader>
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <p className="mb-4 text-gray-800">{course.details}</p>
            <DialogFooter>
              <a
                href={`/inscricao?curso=${
                  course.title.toLowerCase().includes("infantil")
                    ? "infantil"
                    : course.title.toLowerCase().includes("musical")
                    ? "musical"
                    : "adulto"
                }`}
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center font-semibold"
              >
                Inscreva-se
              </a>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  </motion.div>
);

export default Cursos;

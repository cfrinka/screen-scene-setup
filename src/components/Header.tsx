import logobranco from "../assets/logobranco.png";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Cursos",
      href: "/cursos",
    },
    {
      label: "Catálogo",
      href: "/catalogo",
    },
    {
      label: "Sobre nós",
      href: "/sobre-nos",
    },
    {
      label: "Gestão de Cultura",
      href: "/gestao-de-cultura",
    },
    {
      label: "História",
      href: "/historia",
    },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-3xl z-50 y-2">
      <div className="container flex flex-col items-center justify-center">
        <div>
          <img src={logobranco} alt="logo" className="h-24 mt-4" />
        </div>
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`transition-colors duration-200 tracking-wide border-b-2 pb-1 text-md ${
                      isActive
                        ? "text-yellow-400 border-yellow-400"
                        : "text-gray-300 hover:text-yellow-400 border-transparent hover:border-yellow-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

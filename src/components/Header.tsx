import logonewage from "../assets/images/logoStiker.png";
import { useNavigate } from "react-router";

const NAV_LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Quiénes somos", href: "#quienes-somos" },
  { name: "Categorias", href: "#categorias" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#003F6F] shadow-lg">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label="Ir al inicio"
          className="flex shrink-0 cursor-pointer items-center transition-opacity hover:opacity-80"
          onClick={() => navigate("/")}
        >
          <img
            src={logonewage}
            alt="Newage Logo"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </button>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="font-['Nexa'] text-sm font-extrabold italic uppercase tracking-wide text-[#FFB900] transition-colors hover:text-white"
            >
              {name}
            </a>
          ))}
        </nav>

        <a
          href="#clase-de-prueba"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[#FFB900] px-4 font-['Nexa'] text-sm font-extrabold italic uppercase tracking-wide text-[#231640] transition-colors hover:bg-[#ffd15c] sm:px-6"
        >
          Clase de prueba
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;

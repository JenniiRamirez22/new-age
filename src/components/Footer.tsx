import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

const EMAIL = "voleibolnewage@gmail.com";

const SOCIALS: { label: string; href: string; Icon: IconType }[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/voleibol.newage",
    Icon: FaInstagram,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/voleibol.newage",
    Icon: FaXTwitter,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@voleibol.newage",
    Icon: FaTiktok,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/voleibol.newage",
    Icon: FaFacebookF,
  },
];

export default function Footer() {
  return (
    <footer className="flex-shrink-0 border-t border-white/10 bg-[#7A22C3] text-xs text-white md:text-sm">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8 md:grid-cols-2 md:px-16">
        {/* Columna izquierda: redes sociales */}
        <div className="text-center md:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-wider md:text-sm">
            Síguenos en nuestras redes sociales
          </p>

          <div className="mb-4 flex items-center justify-center gap-6 md:justify-start">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-white transition-colors hover:text-[#F6AD38]"
              >
                <Icon className="text-xl md:text-2xl" />
              </a>
            ))}
          </div>

          <p className="font-semibold tracking-wider text-[#F6AD38]">
            @voleibol.newage
          </p>
        </div>

        {/* Columna derecha: contacto */}
        <div className="text-center md:text-right">
          <p className="mb-4 text-xs font-bold uppercase tracking-wider md:text-sm">
            Contáctanos
          </p>

          <ul className="space-y-3 font-medium tracking-wide">
            <li className="flex items-center justify-center gap-2 md:justify-end">
              <FaWhatsapp
                aria-hidden="true"
                className="text-xl text-green-500"
              />
              <a
                href="https://wa.me/5804125506782"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#F6AD38]"
              >
                0412-5506782
              </a>
            </li>

            <li className="flex items-center justify-center gap-2 md:justify-end">
              <FaEnvelope
                aria-hidden="true"
                className="text-xl text-[#F6AD38]"
              />
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-[#F6AD38]"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright centrado abajo */}
      <div className="border-t border-white/10 py-4 text-center">
        <p>&copy; Jennifer Ramirez. 2026.</p>
      </div>
    </footer>
  );
}

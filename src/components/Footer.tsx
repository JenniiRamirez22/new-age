//import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-7 md:py-4 text-center text-white border-t border-white/10 text-xs md:text-sm bg-[#7A22C3] flex-shrink-0">
      <p className="mb-2 text-white font-bold tracking-wider uppercase text-xs md:text-sm">
        Síguenos en nuestras redes sociales
      </p>
      
        <div className="flex justify-center items-center gap-6 mb-6">
          <a
            href="https://instagram.com/voleibol.newage"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#F6AD38] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl md:text-2xl" />
          </a>
          <a
            href="https://x.com/voleibol.newage"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#F6AD38] transition-colors"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="text-xl md:text-2xl" />
          </a>
          <a
            href="https://tiktok.com/@voleibol.newage"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#F6AD38] transition-colors"
            aria-label="TikTok"
          >
            <FaTiktok className="text-xl md:text-2xl" />
          </a>
          <a
            href="https://facebook.com/voleibol.newage"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#F6AD38] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-xl md:text-2xl" />
          </a>
        </div>
        <p className="mb-3 text-[#F6AD38] font-semibold tracking-wider">
          @voleibol.newage
        </p>

      <div className="flex justify-center items-center gap-2 mb-4 text-white font-medium tracking-wide">
        <FaWhatsapp className="text-xl text-green-500" />
        <a
          href="https://wa.me/5804125506782"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#F6AD38] transition-colors"
        >
          0412-5506782
        </a>
      </div>
      <p>&copy; Jennifer Ramirez. 2026.</p>
    </footer>
  );
}

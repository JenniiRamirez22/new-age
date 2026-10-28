import { useEffect } from "react";
import fondo from "../assets/images/fondo-pepon.png";
import isotipo from "../assets/images/isotipo2.png";

export default function Background() {
  useEffect(() => {
    const root = document.documentElement;

    const handleMove = (e: MouseEvent) => {
      root.style.setProperty("--mx", String(e.clientX / window.innerWidth - 0.5));
      root.style.setProperty("--my", String(e.clientY / window.innerHeight - 0.5));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-white"
    >
      <img src={fondo} alt="" className="app-bg h-full w-full object-cover" />

      {/* Isotipo: centrado en pantallas grandes, centrado y tenue en celular */}
      <div className="app-iso-stage absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center opacity-30 lg:opacity-40">
        <div className="app-iso-wrap w-[min(80vw,620px)]">
          <img src={isotipo} alt="" className="app-iso w-full" />
        </div>
      </div>
    </div>
  );
}
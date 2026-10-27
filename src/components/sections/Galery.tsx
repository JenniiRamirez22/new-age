"use client";

import foto1 from "../../assets/images/carrusel/1.png";
import foto2 from "../../assets/images/carrusel/2.png";
import foto3 from "../../assets/images/carrusel/3.png";
import foto4 from "../../assets/images/carrusel/4.png";
import foto5 from "../../assets/images/carrusel/5.png";
import foto6 from "../../assets/images/carrusel/6.jpg";
import foto7 from "../../assets/images/carrusel/7.jpg";


import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const IMAGES = [foto1, foto2, foto3, foto4, foto5, foto6, foto7];

export default function Galery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <section
      id="galeria"
      className="-mx-6 px-6 py-16 text-white md:-mx-16 md:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="font-['Nexa'] text-sm font-extrabold italic uppercase tracking-[0.3em] text-[#FFB900]">
          Galería / Informaciones
        </p>

        <h2 className="mt-3 max-w-3xl font-['Nexa'] text-2xl font-extrabold italic uppercase leading-tight text-[#7A22C3] sm:text-3xl lg:text-4xl">
          Más que un equipo, una familia, una pasión que nos une.
        </h2>
      </div>

      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {IMAGES.map((images, index) => (
            <div key={index} className="relative flex-[0_0_100%]">
              <img
                src={images}
                alt={`Galería ${index + 1}`}
                className="h-[700px] w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Flecha izquierda */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="
      absolute
      left-6
      top-1/2
      -translate-y-1/2
      z-10
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-[#FDBB03]
      text-[#000000]
    "
        >
          ←
        </button>

        {/* Flecha derecha */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="
      absolute
      right-6
      top-1/2
      -translate-y-1/2
      z-10
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-[#FDBB03]
      text-[#000000]
    "
        >
          →
        </button>

        {/* Puntos */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="
          h-3
          w-3
          rounded-full
          bg-[#FDBB03]
        "
            />
          ))}
        </div>
      </div>
    </section>
  );
}

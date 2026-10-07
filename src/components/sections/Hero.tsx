import foto from "../../assets/images/foto.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid min-h-[75vh] w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]"
    >
      {/* Columna izquierda: texto */}
      <div className="text-center lg:text-left">
        <p className="hero-rise font-['Nexa'] text-sm font-extrabold italic uppercase tracking-[0.3em] text-[#7843E9]">
          Escuela de voleibol
        </p>

        <h1
          className="hero-rise mt-4 font-['Nexa'] text-4xl font-extrabold italic uppercase leading-[1.05] sm:text-5xl xl:text-6xl"
          style={{ animationDelay: "0.15s" }}
        >
          La <span className="text-[#7843E9]">nueva era</span> comienza en la {" "}
          <span className="relative inline-block">
            <span className="relative z-10">cancha</span>
            <span
              aria-hidden="true"
              className="absolute -inset-x-1 bottom-[0.08em] z-0 h-[0.9em] -skew-x-20 bg-[#FFB900]"
            />
          </span>
        </h1>

        <p
          className="hero-rise mx-auto mt-6 max-w-xl text-lg text-[#000000] lg:mx-0"
          style={{ animationDelay: "0.3s" }}
        >
          Formamos grandes deportistas y mejores personas. Un espacio para
          crecer, competir y disfrutar el voleibol.
        </p>

        <div
          className="hero-rise mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#clase-de-prueba"
            className="inline-flex min-h-12 items-center gap-3 bg-[#FFB900] px-6 font-['Nexa'] text-sm font-extrabold italic uppercase tracking-wide text-[#231640] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ffd15c]"
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

          <a
            href="#quienes-somos"
            className="inline-flex min-h-12 items-center border-2 border-[#7843E9] px-6 font-['Nexa'] text-sm font-extrabold italic uppercase tracking-wide text-[#7843E9] transition hover:bg-[#7843E9] hover:text-white"
          >
            Conócenos
          </a>
        </div>
      </div>

      {/* Columna derecha: foto */}
      <div
        className="hero-rise relative w-full max-w-xl justify-self-center lg:max-w-none"
        style={{ animationDelay: "0.3s" }}
      >
        <div/>
        <img
          src={foto}
          alt="Foto de la escuela de voleibol"
          className="relative aspect-[3/2] w-full rounded-2xl object-cover object-[center_30%] shadow-2xl"
        />
      </div>
    </section>
  );
}

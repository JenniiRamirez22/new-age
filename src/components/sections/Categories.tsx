const VALUES = [
  {
    age: "7-9 años",
    title: "Iniciación",
    description: "Primer contacto con el balon, aprendemos divirtiendonos.",
  },
  {
    age: "10-11 años",
    title: "Formación",
    description:
      "Segunda etapa donde se forja conocimientos mas sólidos.",
  },
  {
    age: "12-13 años",
    title: "Voley mini",
    description:
      "En esta etapa se consolidan los conocimientos y se empieza a competir.",
  },
  {
    age: "14-15 años",
    title: "Infantil",
    description:
      "Mayor nivel de exigencia.",
  },
  {
    age: "16-17 años",
    title: "Juvenil",
    description:
      "Última etapa de formación.",
  },
];

export default function Categories() {
  return (
    <section
      id="categorias"
      className="-mx-6 bg-[#003F6F]/90 px-6 py-16 text-white sm:py-20 md:-mx-16 md:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="font-['Nexa'] text-sm font-extrabold italic uppercase tracking-[0.3em] text-[#FFB900]">
          Programas / Categorías
        </p>

        <h2 className="mt-3 font-['Nexa'] text-4xl font-extrabold italic uppercase leading-tight sm:text-5xl lg:text-7xl">
          UNA CANCHA PARA CADA ETAPA
        </h2>

        <ul className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-5">
          {VALUES.map(({ age, title, description }, index) => (
            <li
              key={title}
              className={`
                group
                relative
                min-h-[420px]
                overflow-hidden
                border-white/15
                px-8
                py-10
                transition-all
                duration-300
                hover:bg-purple-600/20
                ${index !== VALUES.length - 1 ? "lg:border-r" : ""}
              `}
            >
              {/* Decoración circular */}
              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-20
                  w-20
                  rounded-full
                  border
                  border-white/10
                "
              />

              {/* Edad */}
              <div className="mt-10 inline-flex border border-[#FFB900] px-4 py-2">
                <span className="font-bold text-[#FFB900]">{age}</span>
              </div>

              {/* Contenido */}
              <div className="mt-20">
                <h3
                  className="
                    font-['Nexa']
                    text-3xl
                    font-extrabold
                    italic
                    uppercase
                    leading-tight
                    transition-colors
                    duration-300
                    group-hover:text-[#FFB900]
                  "
                >
                  {title}
                </h3>

                <p className="mt-6 text-base leading-8 text-white/70">
                  {description}
                </p>
              </div>

              {/* Flecha */}
              <button
                type="button"
                className="
                  absolute
                  bottom-10
                  right-8
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFB900]
                  text-xl
                  font-bold
                  text-[#08246C]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

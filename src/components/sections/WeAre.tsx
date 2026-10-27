import logo from "../../assets/images/new-logo.png";

const VALUES = [
  {
    title: "Formación integral",
    description: "Trabajamos cuerpo, mente y valores para crecer con propósito.",
  },
  {
    title: "Equipo y comunidad",
    description: "Creamos vinculos sanos en un entorno seguro, cercano e inclusivo.",
  },
  {
    title: "Excelencia deportiva",
    description: "Entrenadores comprometidos y una metodología para cada etapa.",
  },
];

function VolleyballIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9 shrink-0">
      {/* Círculo exterior */}
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="#FFC107"
        stroke="#2E1065"
        strokeWidth="2"
      />

      {/* Panel 1 */}
      <path
        d="M24 4
       C31 9 34 18 33 24
       C32 30 28 37 24 44"
        stroke="#2E1065"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Panel 2 */}
      <path
        d="M8 16
       C15 12 23 12 28 16
       C33 20 35 28 32 40"
        stroke="#2E1065"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Panel 3 */}
      <path
        d="M40 14
       C32 12 24 15 20 22
       C16 29 15 35 18 44"
        stroke="#2E1065"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}


export default function WeAre() {
  return (
    <section
      id="quienes-somos"
      className="-mx-6 bg-[#7A22C3] px-6 py-16 text-white sm:py-20 md:-mx-16 md:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-['Nexa'] text-sm font-extrabold italic uppercase tracking-[0.3em] text-[#FFB900]">
            Quienes somos
          </p>
          <h2 className="mt-3 font-['Nexa'] text-4xl font-extrabold italic uppercase leading-tight sm:text-5xl">
            NEW AGE
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Somos una escuela de voleibol club con el objetivo firme de
            promover esta disciplina en niños, jóvenes y adolescentes en las categorías tanto femenina como masculina. Formamos atletas
            de alto rendimiento mediante técnicas y estrategias que fortalecen sus bases en la disciplina.
          </p>

          <div className="mt-7 border-l-4 border-[#FFB900] bg-white/10 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB900]">
              Nuestro objetivo
            </p>
            <p className="mt-1 font-['Nexa'] text-xl font-extrabold italic sm:text-2xl">
              Primero nos formamos, luego competimos.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {VALUES.map(({ title, description }) => (
              <li
                key={title}
                className="flex items-start gap-3 rounded-xl border border-white/15 bg-[#651BA5]/50 p-4"
              >
                <VolleyballIcon />
                <div>
                  <h3 className="font-['Nexa'] text-sm font-extrabold italic uppercase leading-snug text-[#FFB900]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-white/85">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute aspect-square w-[85%] rounded-full border border-dashed border-white/25"
          />
          <div
            aria-hidden="true"
            className="absolute -right-2 top-8 h-20 w-20 rounded-full bg-[#FFB900]/20 blur-2xl sm:right-4"
          />
          <img
            src={logo}
            alt="Logo de New Age, escuela de voleibol"
            className="relative w-full drop-shadow-[0_20px_30px_rgba(35,22,64,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}
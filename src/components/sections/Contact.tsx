import { useState } from "react";
import type { FormEvent } from "react";

// Cambia estos nombres por tus sedes reales
const SEDES = ["Coriano 2", "24 de julio"];

const labelClass =
  "mb-2 block font-['Nexa'] text-xs font-extrabold italic uppercase tracking-[0.2em] text-white";

const fieldClass =
  "w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 text-[#231640] outline-none transition placeholder:text-[#231640]/40 focus:border-[#FFB900]";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Aquí va el envío real (WhatsApp, correo, backend...). Por ahora solo lo muestra en consola.
    console.log(data);

    form.reset();
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="-mx-6 bg-[#7A22C3]/90 px-6 py-16 text-white md:-mx-16 md:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="font-['Nexa'] text-sm font-extrabold italic uppercase tracking-[0.3em] text-[#FFB900]">
          ¡Queremos conocerte!
        </p>

        <h2 className="mt-3 max-w-3xl font-['Nexa'] text-2xl font-extrabold italic uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
          CONTÁCTANOS
        </h2>

        <form
          onSubmit={handleSubmit}
          onChange={() => setSent(false)}
          className="mt-10 max-w-3xl rounded-2xl bg-[#003F6F]/90 p-6 ring-1 ring-white/20 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="given-name"
                placeholder="Tu nombre"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="apellido" className={labelClass}>
                Apellido
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                required
                autoComplete="family-name"
                placeholder="Tu apellido"
                className={fieldClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="correo" className={labelClass}>
                Correo electrónico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                autoComplete="email"
                placeholder="tucorreo@ejemplo.com"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="atleta" className={labelClass}>
                Nombre del atleta
              </label>
              <input
                id="atleta"
                name="atleta"
                type="text"
                required
                placeholder="Nombre del atleta"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="edad" className={labelClass}>
                Edad del atleta
              </label>
              <input
                id="edad"
                name="edad"
                type="number"
                inputMode="numeric"
                min={3}
                max={99}
                required
                placeholder="Ej. 12"
                className={fieldClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="sede" className={labelClass}>
                Sede
              </label>
              <select
                id="sede"
                name="sede"
                required
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Selecciona una sede
                </option>
                {SEDES.map((sede) => (
                  <option key={sede} value={sede}>
                    {sede}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#FFB900] px-8 font-['Nexa'] text-sm font-extrabold italic uppercase tracking-wide text-[#231640] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ffd15c] sm:w-auto"
          >
            Agendar cita
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
          </button>

          {sent && (
            <p role="status" className="mt-4 font-semibold text-[#FFB900]">
              ¡Gracias! Recibimos tus datos y te contactaremos pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

// ... (imports y otros componentes como StarIcon, etc.) ...

import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'; // Asegúrate de que sea 'react-router-dom' si estás en una versión moderna de React Router

export const Home = () => {
  const [openPhoneModal, setOpenPhoneModal] = useState(false)
  const phoneNumber = '+34 600 000 000' // <- ajusta el número real aquí

  const modalCloseRef = useRef<HTMLButtonElement | null>(null)

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      // Podríamos mostrar un pequeño tooltip/toast aquí
      alert('Número copiado al portapapeles!'); // Para el ejemplo
    } catch (err) {
      console.error('No se pudo copiar el número', err)
    }
  }

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5" // He quitado el color de aquí para que sea más flexible
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenPhoneModal(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (openPhoneModal) {
      setTimeout(() => modalCloseRef.current?.focus(), 60)
    }
  }, [openPhoneModal])


  return (
    <div className="space-y-10 text-brand-primary"> {/* Fondo general más suave */}

      {/* --- Hero Section --- */}
      <section className="rounded-3xl bg-brand-secondary p-6 sm:p-10 relative overflow-hidden">
        {/* Los detalles abstractos se pueden mantener o cambiar por algo más sutil */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-12 -right-8 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif text-brand-primary leading-tight">
              Realza tu mirada, <span className="block">siéntete radiante.</span>
            </h1>
            <p className="mt-4 max-w-xl text-brand-text-light">
              Tratamientos profesionales de cejas y pestañas: técnicas precisas, resultados naturales y atención personalizada.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={() => setOpenPhoneModal(true)} className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-full shadow-lg hover:bg-brand-primary/90 transition-transform transform hover:scale-105">
                Reservar Cita
              </button>
              <Link to="/servicios" className="px-6 py-3 text-center bg-white border border-brand-secondary text-brand-primary rounded-full shadow-sm hover:shadow-md transition">
                Ver servicios
              </Link>
            </div>
          </div>
          {/* Aquí podrías añadir una imagen a la derecha para la sección Hero */}
          <div>
            {/* Ejemplo de un placeholder de imagen */}
            <img src="https://via.placeholder.com/600x400/FDD8B0/B45309?text=Tu+Imagen+Aqui" alt="Mirada radiante" className="rounded-2xl shadow-lg w-full h-auto object-cover hidden md:block" />
          </div>

          {/* Modal de llamada */}
          {openPhoneModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/40" onClick={() => setOpenPhoneModal(false)} aria-hidden></div>
              <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
                <h3 id="modal-title" className="text-lg font-semibold text-brand-primary">Reservar Cita</h3>
                <p className="mt-2 text-sm text-gray-600">Llámanos y reserva tu cita.</p>

                <div className="mt-4 flex flex-col gap-4 py-4 items-center justify-between p-3 border-t border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="text-brand-primary font-medium text-xl">{phoneNumber}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="inline-flex text-white items-center px-4 py-2 bg-brand-primary rounded-full shadow-lg hover:bg-brand-primary/90 transition">
                      Llamar
                    </a>
                    <button onClick={copyNumber} className="inline-flex items-center px-4 py-2 bg-brand-secondary text-brand-primary rounded-full shadow-lg border border-brand-secondary hover:bg-brand-secondary/80 transition">
                      Copiar
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-right">
                  <button ref={modalCloseRef} onClick={() => setOpenPhoneModal(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">Cerrar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- Sección de Servicios Destacados (NUEVO ESTILO) --- */}
      <section id="servicios-section" className="px-0 sm:px-6 lg:px-8 rounded-3xl mx-1 sm:mx-0">
        <h2 className="text-3xl font-bold xl font-serif text-center text-brand-primary mb-4 mx-2">Servicios Estrella</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tarjeta de Servicio: Cejas */}
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-brand-secondary/50 transform transition-transform hover:scale-[1.02] duration-300">
            <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-3 relative pb-2 after:block after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1 after:bg-brand-accent after:rounded-full">
              Cejas
            </h3>
            <p className="text-sm md:text-base text-brand-text-light mt-4 leading-relaxed">
              Descubre el arte de unas cejas perfectas. Nuestros tratamientos de diseño, microblading y laminado están pensados para realzar tu mirada de forma natural y elegante, creando un marco armonioso para tus ojos.
            </p>
            <ul className="mt-6 space-y-2 text-sm md:text-base text-brand-text-light list-disc list-inside">
              <li>Diseño personalizado de cejas</li>
              <li>Microblading y microshading</li>
              <li>Laminado de cejas</li>
              <li>Depilación y tinte</li>
            </ul>
          </div>

          {/* Tarjeta de Servicio: Pestañas */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-brand-secondary/50 transform transition-transform hover:scale-[1.02] duration-300">
            <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-3 relative pb-2 after:block after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1 after:bg-brand-accent after:rounded-full">
              Pestañas
            </h3>
            <p className="text-sm md:text-base text-brand-text-light mt-4 leading-relaxed">
              Consigue una mirada impactante con nuestras técnicas avanzadas de pestañas. Desde extensiones con volumen hasta un lifting natural, te ofrecemos soluciones para unas pestañas más largas, densas y curvadas.
            </p>
            <ul className="mt-6 space-y-2 text-sm md:text-base text-brand-text-light list-disc list-inside">
              <li>Extensiones de pestañas (clásicas, volumen, híbridas)</li>
              <li>Lifting de pestañas</li>
              <li>Tinte de pestañas</li>
              <li>Tratamientos de fortalecimiento</li>
            </ul>
          </div>
        </div>
         {/* Enlace a la página completa de servicios */}
          <div className="text-center mt-10">
            <Link to="/servicios" className="text-base pb-4 font-semibold text-brand-primary hover:underline flex items-center justify-center gap-2">
              Ver todos los servicios
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
      </section>

      {/* --- Sección de Testimonios --- */}
      <section className="py-4 bg-brand-background rounded-xl">
        <h2 className="text-3xl font-serif text-center text-brand-primary mb-6 mx-2 font-bold">Lo que dicen nuestras clientas</h2>
        <div className="max-w-3xl mx-auto space-y-6 px-4 sm:px-0">
          {/* Testimonio */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-secondary/40">
            <div className="flex items-center mb-3">
              <div className="flex text-brand-accent"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
            </div>
            <p className="text-brand-text-light italic leading-relaxed">"¡Un trato increíble y unos resultados espectaculares! María es una gran profesional. Volveré sin duda, el diseño de cejas ha transformado mi mirada por completo."</p>
            <p className="text-right font-semibold text-brand-primary mt-4">- Lucía G.</p>
          </div>
          {/* Testimonio */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-secondary/40">
            <div className="flex items-center mb-3">
              <div className="flex text-brand-accent"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
            </div>
            <p className="text-brand-text-light italic leading-relaxed">"El lifting de pestañas es lo mejor que me he hecho. Salí con una mirada súper abierta y fresca. El ambiente es súper acogedor y relajante."</p>
            <p className="text-right font-semibold text-brand-primary mt-4">- Ana M.</p>
          </div>
        </div>
      </section>

      {/* --- Call to Action Final --- */}
      <section className="text-center py-8 bg-brand-secondary/50 rounded-3xl mx-3 sm:mx-0 px-2">
        <h2 className="text-3xl font-serif text-brand-primary">¿Lista para brillar?</h2>
        <p className="mt-4 text-brand-text-light max-w-xl mx-auto">Tu momento de relax y belleza te está esperando. No dudes en contactarnos para cualquier consulta o para reservar tu cita.</p>
        <button onClick={() => setOpenPhoneModal(true)} className="text-white mt-8 px-8 py-3 bg-brand-primary font-semibold rounded-full shadow-lg hover:bg-brand-primary/90 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          Contacta con Nosotras
        </button>
      </section>

    </div>
  );
}
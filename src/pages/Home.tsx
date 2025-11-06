// ... (imports y otros componentes como StarIcon, etc.) ...

import { useEffect } from 'react'
import { Link } from 'react-router-dom'; // Asegúrate de que sea 'react-router-dom' si estás en una versión moderna de React Router
import { PhoneModal } from '../components/PhoneModal';
import { usePhoneModal } from '../hooks/useOpenModal';

export const Home = () => {
  const { isModalOpen, openModal, closeModal, modalCloseRef } = usePhoneModal();

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
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeModal])

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => modalCloseRef.current?.focus(), 60)
    }
  }, [isModalOpen, modalCloseRef])


  return (
    <div className="space-y-10 text-brand-primary"> {/* Fondo general más suave */}

      {/* --- Hero Section --- */}
      <section className="rounded-3xl bg-brand-secondary p-6 sm:p-10 relative overflow-hidden items-center justify-center flex">
        {/* Los detalles abstractos se pueden mantener o cambiar por algo más sutil */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-12 -right-8 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>

        <div className="relative w-full mx-auto grid grid-cols-1 gap-6 items-center justify-center">
          {/* Texto centrado */}
          <div className='border flex flex-col items-center text-center'>
            <h1 className="text-3xl sm:text-4xl font-serif text-brand-text-light leading-tight">
              Realza tu mirada, <span className="block text-brand-highlight">siéntete radiante.</span>
            </h1>
            <p className="mt-4 max-w-xl text-brand-text-light">
              Tratamientos profesionales de uñas y pestañas: técnicas precisas, resultados naturales y atención personalizada.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={() => openModal()} className="px-6 py-3 bg-brand-primary text-brand-text-light font-semibold rounded-full shadow-lg hover:bg-brand-primary/90 transition-transform transform hover:scale-105">
                Reservar Cita
              </button>
              <Link to="/servicios" className="px-6 py-3 text-center bg-white border border-brand-secondary text-brand-text-light rounded-full shadow-sm hover:shadow-md transition">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* --- Sección de Servicios Destacados (NUEVO ESTILO) --- */}
      <section id="servicios-section" className="px-0 sm:px-6 lg:px-8 rounded-3xl mx-1 sm:mx-0">
        <h2 className="text-3xl font-bold xl font-serif text-center text-brand-highlight mb-4 mx-2">Servicios Estrella</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tarjeta de Servicio: Uñas */}
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-brand-secondary/50 transform transition-transform hover:scale-[1.02] duration-300">
            <h3 className="text-xl md:text-2xl font-serif text-brand-highlight mb-3 relative pb-2 after:block after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1 after:bg-brand-accent after:rounded-full">
              Uñas
            </h3>
            <p className="text-sm md:text-base text-brand-text-light mt-4 leading-relaxed">
              Descubre el arte de unas uñas perfectas. Ofrecemos uñas semipermanentes con diseños personalizados, refuerzos para mayor durabilidad y decoraciones únicas que reflejan tu estilo.
            </p>
            <ul className="mt-6 space-y-2 text-sm md:text-base text-brand-text-light list-disc list-inside">
              <li>Diseño personalizado de uñas</li>
              <li>Uñas semipermanentes</li>
              <li>Refuerzos para mayor durabilidad</li>
              <li>Decoraciones únicas</li>
            </ul>
          </div>
          {/* Tarjeta de Servicio: Pestañas */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-brand-secondary/50 transform transition-transform hover:scale-[1.02] duration-300">
            <h3 className="text-xl md:text-2xl font-serif text-brand-highlight mb-3 relative pb-2 after:block after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1 after:bg-brand-accent after:rounded-full">
              Pestañas
            </h3>
            <p className="text-sm md:text-base text-brand-text-light mt-4 leading-relaxed">
              Consigue una mirada impactante con nuestras técnicas avanzadas de pestañas. Desde extensiones con volumen hasta un lifting natural, te ofrecemos soluciones para unas pestañas más largas, densas y curvadas.
            </p>
            <ul className="mt-6 space-y-2 text-sm md:text-base text-brand-text-light list-disc list-inside">
              <li>Extensiones de pestañas</li>
              <li>Lifting de pestañas</li>
            </ul>
          </div>
        </div>
        {/* Enlace a la página completa de servicios */}
        <div className="text-center mt-10">
          <Link to="/servicios" className="text-base pb-4 font-semibold text-brand-highlight hover:underline flex items-center justify-center gap-2">
            Ver todos los servicios
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
  

      {/* --- Call to Action Final --- */}
      <section className="text-center py-8 bg-brand-secondary/50 rounded-3xl mx-3 sm:mx-0 px-2">
        <h2 className="text-3xl font-serif text-brand-highlight">¿Lista para brillar?</h2>
        <p className="mt-4 text-brand-highlight max-w-xl mx-auto">Tu momento de relax y belleza te está esperando. No dudes en contactarnos para cualquier consulta o para reservar tu cita.</p>
        {/* --- Call to Action Final (idéntico a Home y Servicios) --- */}
        <section className="text-center py-10 bg-brand-secondary/50 rounded-3xl mx-3 sm:mx-0 px-2">
          <h2 className="text-3xl font-serif text-brand-highlight">¿Lista para una mirada de impacto?</h2>
          <p className="mt-4 text-brand-highlight max-w-xl mx-auto">
            Reserva tu cita hoy mismo y déjanos realzar tu belleza natural.
          </p>
          <button
            onClick={openModal} // Usamos la función openModal del hook
            className="text-brand-highlight mt-8 px-8 py-3 bg-brand-primary font-semibold rounded-full shadow-lg hover:bg-brand-primary/90 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Contacta con nosotras
          </button>
        </section>

        {/* --- Modal de llamada (usamos el componente reutilizable) --- */}
        <PhoneModal isOpen={isModalOpen} onClose={closeModal} closeRef={modalCloseRef} />
      </section>

    </div>
  );
}
import { usePhoneModal } from '../hooks/useOpenModal';
import { PhoneModal } from '../components/PhoneModal';

// Array de datos para las imágenes de la galería.
// Es buena práctica tener esto fuera del componente o en un archivo de datos separado
// para facilitar su mantenimiento.
const galleryImages = [
  { id: 1, src: '/public/cejasProfesional.webp', alt: 'Diseño de Cejas Profesional' },
  { id: 2, src: '/public/extensionPestaña.webp', alt: 'Extensiones de Pestañas Volumen' },
  { id: 3, src: '/public/Microblading.webp', alt: 'Microblading de Cejas' },
  { id: 4, src: '/public/LiftingPestañasTinte.webp', alt: 'Lifting de Pestañas y Tinte' },
  { id: 5, src: '/public/LaminadoCejas.webp', alt: 'Laminado de Cejas' },
  { id: 6, src: '/public/ExtensionClasica.webp', alt: 'Extensiones de Pestañas Clásicas' },
  { id: 7, src: '/public/DepilacionCejas.webp', alt: 'Depilación y Tinte de Cejas' },
  { id: 8, src: '/public/NaturalesRealzadas.webp', alt: 'Pestañas Naturales Realzadas' },
];

export const Galeria = () => {
  // Usamos el hook personalizado para manejar la lógica del modal
  const { isModalOpen, openModal, closeModal, modalCloseRef } = usePhoneModal();

  return (
    <div className="space-y-12 py-4 text-brand-primary">

      {/* --- Cabecera de la Página --- */}
      <header className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-serif text-brand-highlight">
          Nuestra Galería
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text-light">
          Inspírate con algunos de nuestros trabajos más recientes de cejas y pestañas.
          Resultados que hablan por sí mismos.
        </p>
      </header>

      {/* --- Sección de la Galería de Imágenes --- */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">Imágenes de trabajos realizados</h2> {/* Oculto visualmente, pero útil para accesibilidad */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group rounded-xl shadow-md overflow-hidden bg-white 
                           transform transition-transform hover:scale-105 duration-300 ease-in-out"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
                />
                {/* Overlay con texto o información al pasar el ratón (opcional) */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center p-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

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
          Reserva tu Cita
        </button>
      </section>

      {/* --- Modal de llamada (usamos el componente reutilizable) --- */}
      <PhoneModal isOpen={isModalOpen} onClose={closeModal} closeRef={modalCloseRef}/>
    </div>
  );
};
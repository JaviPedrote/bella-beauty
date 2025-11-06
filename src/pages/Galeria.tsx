import { usePhoneModal } from "../hooks/useOpenModal";
import { PhoneModal } from "../components/PhoneModal";
import { useState } from "react";

// Lista de imágenes del directorio public (actualizada). Añado título/alt claros.
const galleryImages = [
  {
    id: 1,
    src: "/Lifting.jpeg",
    alt: "Lifting de pestañas",
    title: "Lifting de Pestañas",
  },
  {
    id: 2,
    src: "/Lifting2.jpeg",
    alt: "Lifting de pestañas (variante)",
    title: "Lifting de Pestañas",
  },
  {
    id: 3,
    src: "/PedicuraEsmaltado.webp",
    alt: "Pedicura - Esmaltado",
    title: "Pedicura y Esmaltado",
  },
  {
    id: 4,
    src: "/SemiPermanenteRefuerzo.jpeg",
    alt: "Semipermanente con refuerzo",
    title: "Semipermanente - Refuerzo",
  },
  {
    id: 5,
    src: "/SemiPermanenteRefuerzo1.jpeg",
    alt: "Semipermanente con refuerzo (variante)",
    title: "Semipermanente - Refuerzo",
  },
  {
    id: 6,
    src: "/SemiPermanenteRefuerzoAntes.jpeg",
    alt: "Antes - semipermanente refuerzo",
    title: "Semipermanente - Antes",
  },
   {
    id: 7,
    src: "/SemiPermanenteRefuerzoDesp2.jpeg",
    alt: "Después - semipermanente refuerzo (variante)",
    title: "Semipermanente - Después",
  },
  {
    id: 8,
    src: "/SemiPermanenteRefuerzoAnts.jpeg",
    alt: "Antes (posible typo) - semipermanente",
    title: "Semipermanente - Antes",
  },
  {
    id: 9,
    src: "/SemiPermanenteRefuerzoDesp.jpeg",
    alt: "Después - semipermanente refuerzo",
    title: "Semipermanente - Después",
  },
  {
    id: 10,
    src: "/SemipermanRefuerdDesp.jpeg",
    alt: "Después - semipermanente (nombre variante)",
    title: "Semipermanente - Después",
  },
];

// Helper para detectar si la imagen es un "antes" (nombres y variantes)
const isAntes = (src: string) => /antes|ants/i.test(src);

export const Galeria = () => {
  // Hook para el modal de reserva
  const { isModalOpen, openModal, closeModal, modalCloseRef } = usePhoneModal();

  // Estado para lightbox simple
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-12 py-6 text-brand-primary">
      <header className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-serif text-brand-highlight">
          Nuestra Galería
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text-light">
          Inspírate con algunos de nuestros trabajos más recientes de uñas y
          pestañas.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
            Imágenes de trabajos realizados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group rounded-xl shadow-md overflow-hidden bg-white"
              >
                {/* Badge "ANTES" si corresponde */}
                {isAntes(image.src) && (
                  <span className="absolute z-10 top-3 left-3 bg-white/90 text-red-600 font-bold text-xs px-2 py-1 rounded-full shadow">
                    ANTES
                  </span>
                )}
                <button
                  onClick={() => setSelected(image.id)}
                  className="block w-full text-left focus:outline-none "
                  aria-label={`Ver imagen: ${image.title}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover object-center transition-transform duration-300 transform group-hover:scale-105"
                  />
                </button>

                <div className="p-3 bg-white">
                  <p className="text-sm font-semibold text-brand-text-dark truncate text-brand-highlight">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox simple */}
      {selected &&
        (() => {
          const img = galleryImages.find((g) => g.id === selected)!;
          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              onClick={() => setSelected(null)}
            >
              <div className="relative max-w-4xl w-full">
                <button
                  className="absolute top-2 right-2 z-20 bg-white/90 rounded-full p-2 shadow"
                  onClick={() => setSelected(null)}
                  aria-label="Cerrar imagen"
                >
                  ✕
                </button>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="mt-2 bg-white p-3 rounded-b-lg text-center">
                  <p className="font-semibold">{img.title}</p>
                  <p className="text-sm text-gray-600">
                    {isAntes(img.src) ? "Antes" : "Después / Resultado"}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}

      <section className="text-center py-10 bg-brand-secondary/50 rounded-3xl mx-3 sm:mx-0 px-2">
        <h2 className="text-3xl font-serif text-brand-highlight">
          ¿Lista para una mirada de impacto?
        </h2>
        <p className="mt-4 text-brand-highlight max-w-xl mx-auto">
          Reserva tu cita hoy mismo y déjanos realzar tu belleza natural.
        </p>
        <button
          onClick={openModal}
          className="text-brand-highlight mt-8 px-8 py-3 bg-brand-primary font-semibold rounded-full shadow-lg hover:bg-brand-primary/90 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          Reserva tu Cita
        </button>
      </section>

      <PhoneModal
        isOpen={isModalOpen}
        onClose={closeModal}
        closeRef={modalCloseRef}
      />
    </div>
  );
};

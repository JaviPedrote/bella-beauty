import React from 'react'; // Necesario para componentes de React

// Definimos las "props" que el componente necesita para funcionar.
// Esto nos asegura que siempre le pasaremos la información correcta.
interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}

// El componente en sí. Recibe las props y las utiliza.
export const PhoneModal = ({ isOpen, onClose, closeRef }: PhoneModalProps) => {
  // El número de teléfono puede estar aquí o pasarse como una prop si cambia.
  const phoneNumber = '+34 600 000 000';

  // Función para copiar el número al portapapeles.
  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert('Número copiado al portapapeles!');
    } catch (err) {
      console.error('No se pudo copiar el número', err);
    }
  };

  // Si el modal no debe estar abierto, no renderizamos nada.
  if (!isOpen) {
    return null;
  }

  // Si está abierto, renderizamos el JSX del modal.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fondo oscuro y desenfocado que cierra el modal al hacer clic */}
      <div 
        className="absolute inset-0 backdrop-blur-xs bg-black/40" 
        onClick={onClose} 
        aria-hidden="true"
      ></div>

      {/* Contenedor principal del modal */}
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title" 
        className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-brand-primary"
      >
        <h3 id="modal-title" className="text-lg font-semibold text-brand-highlight">
          Reservar Cita
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Llámanos y reserva tu cita.
        </p>

        <div className="mt-4 flex flex-col gap-4 py-4 items-center justify-between p-3 border-t border-b border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Teléfono</p>
            <p className="text-brand-highlight font-medium text-xl">{phoneNumber}</p>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
              className="inline-flex text-brand-text-light items-center px-4 py-2 bg-brand-primary rounded-full shadow-lg hover:bg-brand-primary/90 transition"
            >
              Llamar
            </a>
            <button 
              onClick={copyNumber} 
              className="inline-flex items-center px-4 py-2 bg-brand-secondary text-brand-highlight rounded-full shadow-lg border border-brand-secondary hover:bg-brand-secondary/80 transition"
            >
              Copiar
            </button>
          </div>
        </div>

        <div className="mt-4 text-right">
          <button 
            ref={closeRef} 
            onClick={onClose} 
            className="px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
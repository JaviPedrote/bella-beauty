import { useEffect } from 'react';
import { usePhoneModal } from '../hooks/useOpenModal';
import { PhoneModal } from '../components/PhoneModal';

// Datos de los servicios. Tenerlos en un array hace que sea muy fácil añadir o quitar servicios en el futuro.
const serviciosData = [
    {
        category: 'Tratamientos de uñas',
        description: 'Técnicas especializadas para definir, dar forma y realzar tus uñas, creando el marco perfecto para tu manicura.',
        items: [
            { name: 'Uñas semipermanentes', price: '10€', details: 'Técnica para dejar tus uñas impecables y duraderas.' },
            { name: 'Uñas semipermanentes con refuerzo con 2 decoraciones', price: '12€', details: 'Técnica para dejar tus uñas impecables y duraderas con 2 decoraciones.' },
        ]
    },
    {
        category: 'Tratamientos de Pestañas',
        description: 'Soluciones para conseguir unas pestañas más largas, curvadas y con volumen, para una mirada abierta e impactante.',
        items: [
            { name: 'Extensiones de Pestañas', price: '15€', details: 'Técnica para alargar y dar volumen a tus pestañas.' },
            { name: 'Lifting de Pestañas + Tinte', price: '15€', details: 'Eleva y curva tus pestañas naturales desde la raíz. Incluye tinte.' },
        ]
    }
];

const WHATSAPP_NUMBER = '34616611801';

// Función para generar el mensaje
const generateWameLink = (serviceName: string) => {
    // Texto base del mensaje
    const baseMessage = `Hola, estoy interesado en contratar los servicios de ${serviceName}`;
    // Codificamos el mensaje para la URL
    const encodedMessage = encodeURIComponent(baseMessage);

    // Devolvemos el enlace completo
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const Servicios = () => {

    const { isModalOpen, openModal, closeModal, modalCloseRef } = usePhoneModal();


    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') openModal();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [openModal]);

    useEffect(() => {
        if (isModalOpen) {
            setTimeout(() => modalCloseRef.current?.focus(), 60);
        }
    }, [isModalOpen, modalCloseRef]);

    return (
        // CAMBIO RADICAL: Asumo que el color por defecto "text-brand-primary" está causando el problema.
        // Lo elimino de aquí y aplico colores explícitos en cada elemento.
        <div className="space-y-12 py-4">

            {/* --- Cabecera de la Página --- */}
            <header className="text-center px-4">
                {/* Usamos text-black para asegurar máxima visibilidad */}
                <h1 className="text-4xl sm:text-5xl font-serif text-black">
                    Nuestros Servicios
                </h1>
                {/* Usamos text-black para el texto descriptivo */}
                <p className="mt-4 max-w-2xl mx-auto text-black">
                    Descubre todos nuestros tratamientos diseñados para realzar tu belleza natural.
                    Nos dedicamos a ofrecer resultados impecables con una atención personalizada.
                </p>
            </header>

            {/* --- Lista de Servicios --- */}
            <main className="max-w-4xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
                {serviciosData.map((category) => (
                    <section key={category.category} aria-labelledby={category.category.replace(/\s+/g, '-')}>
                        <div className="text-center mb-8">
                            {/* Usamos text-black para los títulos de categoría */}
                            <h2 id={category.category.replace(/\s+/g, '-')} className="text-3xl font-serif text-black relative inline-block pb-2 after:block after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-1 after:bg-brand-accent after:rounded-full">
                                {category.category}
                            </h2>
                            {/* Usamos text-black para la descripción de categoría */}
                            <p className="mt-3 text-black">{category.description}</p>
                        </div>

                        <div className="space-y-6">
                            {category.items.map((service) => (
                                <div key={service.name} className="relative bg-white p-6 rounded-2xl shadow-lg border border-brand-secondary/50 transform transition-transform hover:scale-[1.02] duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="pr-4">
                                        {/* Usamos text-black para los nombres de los servicios */}
                                        <h3 className="text-lg font-semibold text-black">{service.name}</h3>
                                        {/* Usamos text-black para los detalles de los servicios */}
                                        <p className="text-sm text-black mt-1">{service.details}</p>
                                    </div>

                                    {/* Contenedor responsive para botón + precio */}
                                    <div className="w-full flex place-content-between justify-between flex-row sm:flex-col sm:items-end gap-3 mt-4 sm:mt-12 sm:pl-8 ">

                                        {/* Precio: en móvil aparece en línea; en sm+ se posiciona como badge en la esquina */}
                                        <div className="text-lg font-bold text-brand-highlight whitespace-nowrap bg-brand-secondary/50 px-4 py-2 rounded-full sm:mx-0 sm:absolute sm:top-4 sm:right-4 text-center flex items-center justify-center">
                                            {service.price}
                                        </div>

                                        <a
                                            href={generateWameLink(service.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center sm:items-end justify-end gap-3 p-2 rounded-full hover:bg-gray-50 transition-colors"
                                            aria-label={`Contactar por WhatsApp: ${service.name}`}
                                        >
                                            {/* Icono dentro de un círculo */}
                                            <div className="flex flex-col text-center items-center">
                                                <span className="flex items-center justify-center w-11 h-11 bg-green-500 text-white rounded-full shadow-md flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                                    </svg>
                                                </span>
                                                {/* Textos: título + subtítulo */}

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            {/* --- Call to Action Final (idéntico al de Home para coherencia) --- */}
            {/* Asumo que bg-brand-secondary/50 es un fondo CLARO, por eso el texto lo pongo en negro. */}
            <section className="text-center py-10 bg-brand-secondary/50 rounded-3xl mx-3 sm:mx-0 px-2">
                {/* Usamos text-black para asegurar el contraste en el título */}
                <h2 className="text-3xl font-serif text-black">¿Lista para brillar?</h2>
                {/* Usamos text-black para el texto descriptivo */}
                <p className="mt-4 text-black max-w-xl mx-auto">
                    Tu momento de relax y belleza te está esperando. Reserva tu cita y déjate cuidar.
                </p>
                <button
                    onClick={openModal} // Usamos la función openModal del hook
                    className="text-brand-highlight mt-8 px-8 py-3 bg-brand-primary font-semibold rounded-full shadow-lg hover:bg-brand-primary/90 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                >
                    Reservar Ahora
                </button>
            </section>

            {/* --- Modal de llamada (usamos el componente reutilizable) --- */}
            <PhoneModal isOpen={isModalOpen} onClose={closeModal} closeRef={modalCloseRef} />
        </div>
    );
};
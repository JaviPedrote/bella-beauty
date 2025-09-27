import { useEffect } from 'react';
import { usePhoneModal } from '../hooks/useOpenModal';
import { PhoneModal } from '../components/PhoneModal';

// Datos de los servicios. Tenerlos en un array hace que sea muy fácil añadir o quitar servicios en el futuro.
const serviciosData = [
    {
        category: 'Tratamientos de Cejas',
        description: 'Técnicas especializadas para definir, dar forma y realzar tus cejas, creando el marco perfecto para tu mirada.',
        items: [
            { name: 'Diseño Personalizado de Cejas', price: '20€', details: 'Análisis de visagismo, depilación con hilo/pinzas y definición.' },
            { name: 'Microblading', price: '180€', details: 'Técnica pelo a pelo para un resultado hiperrealista y natural.' },
            { name: 'Microshading', price: '200€', details: 'Efecto sombreado o maquillaje para cejas más densas y definidas.' },
            { name: 'Laminado de Cejas', price: '45€', details: 'Alisa y fija el vello para unas cejas peinadas y con más volumen.' },
            { name: 'Tinte de Cejas con Henna', price: '25€', details: 'Coloración natural para dar intensidad y rellenar pequeños huecos.' }
        ]
    },
    {
        category: 'Tratamientos de Pestañas',
        description: 'Soluciones para conseguir unas pestañas más largas, curvadas y con volumen, para una mirada abierta e impactante.',
        items: [
            { name: 'Extensiones de Pestañas Clásicas', price: '60€', details: 'Técnica pelo a pelo para un efecto de "rimel" natural.' },
            { name: 'Extensiones de Pestañas Volumen Ruso', price: '80€', details: 'Abanicos de extensiones para un volumen espectacular y denso.' },
            { name: 'Lifting de Pestañas + Tinte', price: '50€', details: 'Eleva y curva tus pestañas naturales desde la raíz. Incluye tinte.' },
            { name: 'Tinte de Pestañas', price: '15€', details: 'Oscurece tus pestañas para dar profundidad a la mirada sin maquillaje.' }
        ]
    }
];

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
                                <div key={service.name} className="bg-white p-6 rounded-2xl shadow-lg border border-brand-secondary/50 transform transition-transform hover:scale-[1.02] duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        {/* Usamos text-black para los nombres de los servicios */}
                                        <h3 className="text-lg font-semibold text-black">{service.name}</h3>
                                        {/* Usamos text-black para los detalles de los servicios */}
                                        <p className="text-sm text-black mt-1">{service.details}</p>
                                    </div>
                                    {/* Aquí mantenemos 'text-brand-primary' para el precio. Si 'brand-primary' es un color claro, cámbialo a 'text-black' */}
                                    <div className="text-lg font-bold text-brand-highlight whitespace-nowrap bg-brand-secondary/50 px-4 py-2 rounded-full">
                                        {service.price}
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
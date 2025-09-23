import React, { useState } from 'react';

// --- Iconos para las categorías de servicios ---
const EyeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

// SparklesIcon eliminado (no usado)

const EyebrowIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 10c-2 0-4-1-4-3s2-3 4-3 4 1 4 3-2 3-4 3Z"></path>
        <path d="M6 10c-2 0-4-1-4-3s2-3 4-3 4 1 4 3-2 3-4 3Z"></path>
        <path d="M14 18s-2-2-4-2-4 2-4 2"></path>
    </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);
const ChevronDownIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9"></polyline></svg>);


// --- Datos de los servicios (Cejas y Pestañas) ---
const serviceCategories = [
    {
        category: "Cejas",
        icon: <EyebrowIcon className="w-8 h-8" />,
        gradient: "from-orange-400 to-amber-500",
        description: "Tratamientos especializados para diseñar, dar color y mejorar la textura de tus cejas.",
        services: [
            { name: "Diseño de cejas personalizado", description: "Diseño adaptado a tus rasgos faciales.", duration: "30-45 min", price: "30€" },
            { name: "Microblading", description: "Relleno y forma natural pelo a pelo.", duration: "90-150 min", price: "Desde 180€" },
            { name: "Tinte de cejas", description: "Color, intensidad y homogeneidad.", duration: "20-30 min", price: "18€" },
            { name: "Laminación / Alisado de cejas", description: "Definir y peinar los vellos para un acabado pulido.", duration: "45-60 min", price: "40€" },
            { name: "Depilación con hilo o pinza", description: "Dar forma y limpiar con precisión.", duration: "20-30 min", price: "20€" },
            { name: "Extensiones de cejas", description: "Aumentar volumen y densidad de forma natural.", duration: "60-90 min", price: "Desde 50€" }
        ]
    },
    {
        category: "Pestañas",
        icon: <EyeIcon className="w-8 h-8" />,
        gradient: "from-amber-400 to-amber-500",
        description: "Servicios para realzar la mirada: volumen, rizo y color.",
        services: [
            { name: "Extensiones de pestañas", description: "Añade longitud y volumen con técnicas adaptadas a tu ojo.", duration: "2-3 horas", price: "Desde 45€" },
            { name: "Lifting / Permanente de pestañas", description: "Riza y levanta las pestañas naturales para una mirada abierta.", duration: "45-60 min", price: "35€" },
            { name: "Tinte de pestañas", description: "Oscurece las pestañas sin necesidad de máscara.", duration: "20-30 min", price: "20€" },
            { name: "Retirada de extensiones", description: "Eliminación segura de extensiones anteriores.", duration: "20-30 min", price: "20€" },
            { name: "Diseño y cuidado de la mirada", description: "Tratamientos complementarios para intensificar la mirada de forma natural.", duration: "30-45 min", price: "30€" }
        ]
    }
];


// --- Componente de Acordeón para una categoría de servicio ---
const ServiceAccordion = ({ category, icon, gradient, description, services }: { category: string; icon: React.ReactNode; gradient: string; description: string; services: Array<{ name: string; description: string; duration: string; price: string }> }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white/70 backdrop-blur-sm border border-amber-200/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-[1.01] sm:hover:scale-[1.02]">
            {/* --- Cabecera del acordeón (botón) --- */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 sm:p-6 lg:p-8 text-left group"
            >
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-amber-900 group-hover:text-amber-700 transition-colors duration-300">{category}</h3>
                        <p className="text-xs sm:text-sm text-amber-800/70 mt-1 hidden sm:block">Toca para explorar nuestros servicios</p>
                    </div>
                </div>
                <ChevronDownIcon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-amber-700 transition-all duration-300 group-hover:text-amber-600 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
            {/* --- Contenido desplegable --- */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 pt-0 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
                    {/* Separador visual */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mb-4 sm:mb-6"></div>
                    
                    <div className="bg-gradient-to-br from-amber-50/80 to-white/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-100/50">
                        <p className="text-amber-800/90 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed border-l-4 border-amber-300 pl-4 sm:pl-6 italic">
                            {description}
                        </p>
                        
                        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-amber-200/30 hover:shadow-md transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105">
                                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                                        <h4 className="font-semibold text-amber-900 text-base sm:text-lg pr-2">{service.name}</h4>
                                        <span className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                                            {service.price}
                                        </span>
                                    </div>
                                    <p className="text-amber-800/70 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{service.description}</p>
                                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-amber-700">
                                        <span className="flex items-center gap-1 sm:gap-2 bg-amber-50 px-2 py-1 sm:px-3 rounded-full">
                                            <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                            {service.duration}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Botón de reserva para la categoría */}
                        <div className="mt-6 sm:mt-8 text-center">
                            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
                                Reservar {category}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Componente principal de la página de Servicios ---
export const Servicios = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100/30">
            {/* Hero Section */}
            <section className="relative px-4 py-8 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
                {/* Elementos decorativos de fondo */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-16 -left-16 w-64 h-64 sm:w-96 sm:h-96 sm:-top-24 sm:-left-24 bg-gradient-to-br from-amber-200/20 to-amber-300/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 sm:-bottom-32 sm:-right-32 bg-gradient-to-tl from-amber-300/15 to-amber-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/3 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-amber-200/30 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-24 h-24 sm:w-40 sm:h-40 bg-amber-100/40 rounded-full blur-2xl"></div>
                </div>

                {/* Contenido principal del hero */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center space-y-6 sm:space-y-8">
                        {/* Título principal */}
                        <div className="space-y-3 items-center place-content-between w-full sm:space-y-4">
                            <h1 className="flex text-center font-bold border-l-2 border-amber-600 pl-2 text-3xl sm:text-5xl lg:text-6xl font-serif text-amber-900 leading-tight">
                                Nuestros
                                <div className="block ml-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                                    Servicios
                                </div>
                            </h1>
                        </div>
                        
                        {/* Descripción */}
                        <p className="text-sm sm:text-lg lg:text-xl text-amber-800/90 max-w-3xl mx-auto leading-relaxed px-4">
                            Descubre nuestra gama completa de tratamientos de belleza especializados en cejas y pestañas. 
                            Cada servicio está diseñado para realzar tu mirada natural con técnicas profesionales y productos de alta calidad.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4">
                            <button className="group bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
                                <span className="flex items-center gap-2">
                                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                                    Reservar Cita
                                </span>
                            </button>
                            <button className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 ease-out">
                                Consultar Precios
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios Section */}
            <section className="relative px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Título de sección */}
                    <div className="text-center mb-8 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-amber-900 mb-3 sm:mb-4">
                            Especialidades en Belleza
                        </h2>
                        <p className="text-base sm:text-lg text-amber-800/80 max-w-2xl mx-auto px-4">
                            Explora nuestras categorías de servicios y encuentra el tratamiento perfecto para ti
                        </p>
                    </div>

                    {/* Grid de servicios */}
                    <div className="space-y-4 sm:space-y-6">
                        {serviceCategories.map((cat, index) => (
                            <ServiceAccordion key={index} {...cat} />
                        ))}
                    </div>

                    {/* Call to Action Final */}
                    <div className="text-center mt-8 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-amber-100/50 to-amber-50/50 rounded-2xl sm:rounded-3xl border border-amber-200/50 mx-2 sm:mx-0">
                        <h3 className="text-xl sm:text-2xl font-serif text-amber-900 mb-3 sm:mb-4">
                            ¿Listo para realzar tu mirada?
                        </h3>
                        <p className="text-sm sm:text-base text-amber-800/80 mb-4 sm:mb-6 max-w-lg mx-auto px-2">
                            Nuestro equipo de profesionales está aquí para ayudarte a conseguir el look que siempre has deseado.
                        </p>
                        <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
                            Contactar Ahora
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

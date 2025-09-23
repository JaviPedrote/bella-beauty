// --- Iconos ---
const PhoneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const ImageIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
);

// --- Datos de ejemplo para la galería ---
const galleryItems = [
    { title: "Microblading - Resultado", category: "Cejas", before_placeholder: "Antes", after_placeholder: "Después", description: "Técnica de microblading para cejas naturales y definidas" },
    { title: "Laminado de Cejas", category: "Cejas", before_placeholder: "Antes", after_placeholder: "Después", description: "Proceso de laminado para un look más pulido y estructurado" },
    { title: "Extensiones Volumen Ruso", category: "Pestañas", before_placeholder: "Antes", after_placeholder: "Después", description: "Extensiones con técnica rusa para máximo volumen" },
    { title: "Lifting + Tinte", category: "Pestañas", before_placeholder: "Antes", after_placeholder: "Después", description: "Lifting natural con tinte para pestañas más largas y definidas" },
    { title: "Diseño de Cejas Personalizado", category: "Cejas", before_placeholder: "Antes", after_placeholder: "Después", description: "Diseño adaptado a la forma del rostro" },
    { title: "Extensiones Clásicas", category: "Pestañas", before_placeholder: "Antes", after_placeholder: "Después", description: "Look natural con extensiones clásicas pelo a pelo" }
];

// --- Componente de tarjeta de comparación ---
const ComparisonCard = ({ title, category, before_placeholder, after_placeholder, description }: { title: string; category: string; before_placeholder: string; after_placeholder: string; description: string }) => (
    <div className="bg-white/70 backdrop-blur-sm border border-amber-200/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-[1.01] sm:hover:scale-[1.02]">
        <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div>
                    <h3 className="text-base sm:text-lg font-serif text-amber-900">{title}</h3>
                    <span className="inline-block bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium mt-1">
                        {category}
                    </span>
                </div>
                <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
            </div>
            
            <p className="text-sm sm:text-base text-amber-800/70 mb-3 sm:mb-4 leading-relaxed">{description}</p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Contenedor "Antes" */}
                <div className="relative aspect-square group">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                        <div className="text-center">
                            <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mx-auto mb-1 sm:mb-2" />
                            <span className="text-gray-500 text-xs sm:text-sm font-medium">{before_placeholder}</span>
                        </div>
                    </div>
                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs font-semibold px-2 py-0.5 sm:py-1 rounded-full shadow-md">
                        ANTES
                    </div>
                </div>
                
                {/* Contenedor "Después" */}
                <div className="relative aspect-square group">
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-300">
                        <div className="text-center">
                            <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 mx-auto mb-1 sm:mb-2" />
                            <span className="text-amber-600 text-xs sm:text-sm font-medium">{after_placeholder}</span>
                        </div>
                    </div>
                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-semibold px-2 py-0.5 sm:py-1 rounded-full shadow-md">
                        DESPUÉS
                    </div>
                </div>
            </div>
        </div>
    </div>
);


// --- Componente principal de la página de Galería ---
export const Galeria = () => {
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
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-amber-900 leading-tight">
                                Galería de
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                                    Transformaciones
                                </span>
                            </h1>
                            <div className="w-16 h-1 sm:w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
                        </div>
                        
                        {/* Descripción */}
                        <p className="text-sm sm:text-lg lg:text-xl text-amber-800/90 max-w-3xl mx-auto leading-relaxed px-4">
                            Descubre el antes y después de nuestros trabajos más destacados. 
                            Cada transformación cuenta una historia única de belleza y profesionalidad.
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
                                Ver Más Trabajos
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería Section */}
            <section className="relative px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Título de sección */}
                    <div className="text-center mb-8 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-amber-900 mb-3 sm:mb-4">
                            Nuestros Mejores Resultados
                        </h2>
                        <p className="text-base sm:text-lg text-amber-800/80 max-w-2xl mx-auto px-4">
                            Cada imagen representa la dedicación y profesionalidad de nuestro equipo
                        </p>
                    </div>

                    {/* Grid de la galería */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
                        {galleryItems.map((item, index) => (
                            <ComparisonCard key={index} {...item} />
                        ))}
                    </div>

                    {/* Call to Action Final */}
                    <div className="text-center mt-8 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-amber-100/50 to-amber-50/50 rounded-2xl sm:rounded-3xl border border-amber-200/50 mx-2 sm:mx-0">
                        <h3 className="text-xl sm:text-2xl font-serif text-amber-900 mb-3 sm:mb-4">
                            ¿Inspirada por lo que ves?
                        </h3>
                        <p className="text-sm sm:text-base text-amber-800/80 mb-4 sm:mb-6 max-w-lg mx-auto px-2">
                            Permítenos crear una transformación igual de increíble para ti. 
                            Tu próximo resultado favorito te está esperando.
                        </p>
                        <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
                            Reservar mi Transformación
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

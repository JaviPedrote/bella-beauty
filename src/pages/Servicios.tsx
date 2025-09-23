

// --- Iconos SVG mejorados para cada servicio ---
const EyeIcon = ({ className }: { className: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const SparklesIcon = ({ className }: { className: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
);

const EyebrowIcon = ({ className }: { className: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const serviceCategories = [
  {
    category: "Extensiones de Pestañas",
    icon: <EyeIcon className="w-10 h-10 mb-3"/>,
    gradient: "from-amber-400 via-amber-500 to-amber-600",
    description: "Consigue una mirada de infarto con nuestras extensiones. Adaptadas a tu estilo y la forma de tu ojo para un resultado espectacular.",
    services: [
      { 
        name: "Clásicas (Pelo a Pelo)", 
        description: "Un look natural y elegante. Se aplica una extensión por cada pestaña natural.",
        duration: "2-3 horas",
        price: "Desde 45€"
      },
      { 
        name: "Volumen Ruso (2D-6D)", 
        description: "Para una mirada más densa y glamurosa, aplicando abanicos de extensiones ultrafinas.",
        duration: "3-4 horas", 
        price: "Desde 65€"
      },
      { 
        name: "Híbridas", 
        description: "La combinación perfecta entre la técnica clásica y el volumen ruso para un efecto texturizado.",
        duration: "2.5-3.5 horas",
        price: "Desde 55€"
      },
    ]
  },
  {
    category: "Lifting y Tintes",
    icon: <SparklesIcon className="w-10 h-10 mb-3"/>,
    gradient: "from-rose-400 via-pink-500 to-rose-600",
    description: "Realza tu belleza natural sin necesidad de extensiones. Pestañas más largas y oscuras al instante.",
    services: [
        { 
          name: "Lifting de Pestañas", 
          description: "Curva y eleva tus pestañas naturales desde la raíz, creando un efecto de mayor longitud.",
          duration: "45-60 min",
          price: "35€"
        },
        { 
          name: "Tinte de Pestañas", 
          description: "Aporta color y profundidad a tus pestañas, ideal para no usar máscara de pestañas.",
          duration: "20-30 min",
          price: "20€"
        },
        { 
          name: "Lifting + Tinte", 
          description: "El combo perfecto para unas pestañas visiblemente más largas, curvadas y oscuras.",
          duration: "60-75 min",
          price: "50€"
        },
    ]
  },
  {
    category: "Diseño de Cejas",
    icon: <EyebrowIcon className="w-10 h-10 mb-3"/>,
    gradient: "from-amber-500 via-yellow-500 to-amber-600",
    description: "Unas cejas bien definidas son el marco de tu mirada. Déjanos darles la forma perfecta para ti.",
    services: [
      { 
        name: "Diseño y Depilación con Hilo", 
        description: "Técnica precisa para un diseño limpio y definido, ideal para pieles sensibles.",
        duration: "30-45 min",
        price: "25€"
      },
      { 
        name: "Laminado de Cejas", 
        description: "Consigue unas cejas 'peinadas' hacia arriba, más gruesas y con un aspecto pulido.",
        duration: "45-60 min",
        price: "40€"
      },
      { 
        name: "Henna para Cejas", 
        description: "Tinte natural que colorea tanto el pelo como la piel para un efecto sombreado y duradero.",
        duration: "60-75 min",
        price: "35€"
      }
    ]
  }
];

export const Servicios = () => {
  return (
      <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
        {/* Header elegante */}
        <div className="text-center py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ 
              color: '#d4af37',
              fontFamily: 'Playfair Display, serif'
            }}>
              Nuestros Servicios
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Especialistas en realzar tu belleza natural con técnicas profesionales 
              y productos de alta calidad para cejas, pestañas y cuidado de ojos
            </p>
            
            {/* Línea decorativa mejorada */}
            <div className="flex items-center justify-center mt-6 space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-600"></div>
              <div className="w-3 h-3 rounded-full border-2 border-amber-400 bg-white"></div>
              <div className="w-16 h-px bg-gradient-to-r from-amber-600 via-amber-400 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Contenedor principal */}
        <div className="max-w-6xl mx-auto px-4 pb-24">
          <div className="grid gap-8 lg:gap-12">
            {serviceCategories.map((category) => (
              <div key={category.category} className="group">
                {/* Card principal mejorada */}
                <div className="bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                     style={{ 
                       boxShadow: '0 10px 40px rgba(0,0,0,0.08)', 
                       border: '1px solid rgba(212, 175, 55, 0.1)' 
                     }}>
                  
                  {/* Header de categoría rediseñado */}
                  <div className={`relative p-8 bg-gradient-to-br ${category.gradient} text-white overflow-hidden`}>
                    {/* Elementos decorativos de fondo */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-8 w-24 h-24 rounded-full border-2 border-white"></div>
                      <div className="absolute bottom-4 left-8 w-16 h-16 rounded-full border border-white"></div>
                      <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full border border-white"></div>
                    </div>
                    
                    <div className="relative flex items-center gap-6">
                      <div className="flex-shrink-0 p-3 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {category.category}
                        </h2>
                        <p className="text-lg opacity-95 leading-relaxed font-light">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lista de servicios mejorada */}
                  <div className="p-8">
                    <div className="grid gap-6">
                      {category.services.map((service) => (
                        <div key={service.name} 
                             className="group/service p-6 rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-amber-200 bg-gradient-to-r from-gray-50 to-white hover:from-amber-50 hover:to-white">
                          
                          {/* Header del servicio */}
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {service.name}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                            
                            {/* Precio y duración */}
                            <div className="text-right ml-6 flex-shrink-0">
                              <div className="text-2xl font-bold mb-1" style={{ color: '#d4af37' }}>
                                {service.price}
                              </div>
                              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {service.duration}
                              </div>
                            </div>
                          </div>
                          
                          {/* Botones de acción mejorados */}
                          <div className="flex gap-3 pt-4 border-t border-gray-100">
                            <button className="flex-1 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105 active:scale-95"
                                    style={{ 
                                      background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                                    }}>
                              Reservar Cita
                            </button>
                            <button className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105 border-2"
                                    style={{ 
                                      color: '#d4af37', 
                                      borderColor: '#d4af37',
                                      backgroundColor: 'white'
                                    }}>
                              Más Info
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action final mejorado */}
          <div className="mt-16 text-center p-12 rounded-3xl relative overflow-hidden" 
               style={{ 
                 backgroundColor: '#E2CEC7',
                 boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
               }}>
            
            {/* Elementos decorativos */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-8 left-8 w-20 h-20 rounded-full border-2 border-amber-400"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-amber-400"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full border border-amber-400"></div>
            </div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ 
                color: '#d4af37',
                fontFamily: 'Playfair Display, serif'
              }}>
                ¿Lista para realzar tu belleza?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Agenda tu cita y descubre el poder de una mirada perfectamente enmarcada. 
                Más de 500 clientas satisfechas confían en nosotras.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 active:scale-95"
                        style={{ 
                          background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                          boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)'
                        }}>
                  📞 Contactar Ahora
                </button>
                <button className="px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2"
                        style={{ 
                          color: '#d4af37',
                          borderColor: '#d4af37',
                          backgroundColor: 'white'
                        }}>
                  📅 Ver Disponibilidad
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mt-6">
                ⭐ Calificación 4.9/5 • 📍 Centro de Belleza • 🕒 Horarios flexibles
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

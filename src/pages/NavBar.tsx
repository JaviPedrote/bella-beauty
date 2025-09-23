import { Outlet, Link, useLocation } from 'react-router-dom'

export const NavBar = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen" style={{
            backgroundColor: '#E2CEC7',
            margin: '0',
            padding: '0',
            border: 'none',
            outline: 'none'
        }}>
            {/* Header */}
            <header className="relative overflow-hidden" style={{
                backgroundColor: '#E2CEC7',
                margin: '0',
                padding: '0',
                border: 'none'
            }}>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4 w-20 h-20 rounded-full border border-amber-300"></div>
                    <div className="absolute top-12 right-8 w-16 h-16 rounded-full border border-amber-200"></div>
                    <div className="absolute bottom-8 left-1/3 w-12 h-12 rounded-full border border-amber-300"></div>
                </div>


                {/* Fondo que cubre toda la zona */}

                <img
                    src="/Logo-header.png"
                    alt="Bella Beauty - María Rodríguez"
                    className="max-h-80 w-auto object-contain"
                    style={{
                        backgroundColor: 'transparent',
                        display: 'block',
                        border: 'none',
                        outline: 'none',
                        maxWidth: '100%'
                    }}
                    onError={(e) => {
                        // Fallback si la imagen no se encuentra
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) {
                            fallback.style.display = 'block';
                        }
                    }}
                />

            </header>

            {/* Content */}
            <main className="flex-1 px-4 py-6" style={{ backgroundColor: 'white', marginTop: '0', paddingTop: '0' }}>
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-md" style={{
                backgroundColor: '#E2CEC7',
                borderTop: 'none'
            }}>
                <div className="flex justify-around items-center px-4 py-3">
                    <Link
                        to="/"
                        className={`flex flex-col items-center py-2 px-3 transition-all duration-300 rounded-lg ${location.pathname === '/'
                            ? 'text-amber-600 transform scale-110'
                            : 'text-amber-700 opacity-70 hover:opacity-100 hover:scale-105'
                            }`}
                        style={{
                            backgroundColor: location.pathname === '/' ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
                        }}
                    >
                        <div className={`w-6 h-6 mb-1 transition-all duration-300 ${location.pathname === '/' ? 'drop-shadow-md' : ''
                            }`}>
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </div>
                        <span className="text-xs font-medium tracking-wide">Inicio</span>
                        {location.pathname === '/' && (
                            <div className="w-4 h-0.5 bg-amber-600 rounded-full mt-1"></div>
                        )}
                    </Link>

                    <Link
                        to="/servicios"
                        className={`flex flex-col items-center py-2 px-3 transition-all duration-300 rounded-lg ${location.pathname === '/servicios'
                            ? 'text-amber-600 transform scale-110'
                            : 'text-amber-700 opacity-70 hover:opacity-100 hover:scale-105'
                            }`}
                        style={{
                            backgroundColor: location.pathname === '/servicios' ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
                        }}
                    >
                        <div className={`w-6 h-6 mb-1 transition-all duration-300 ${location.pathname === '/servicios' ? 'drop-shadow-md' : ''
                            }`}>
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                            </svg>
                        </div>
                        <span className="text-xs font-medium tracking-wide">Servicios</span>
                        {location.pathname === '/servicios' && (
                            <div className="w-4 h-0.5 bg-amber-600 rounded-full mt-1"></div>
                        )}
                    </Link>

                    <div className="flex flex-col items-center py-2 px-3 text-amber-700 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 rounded-lg cursor-pointer hover:bg-amber-100 hover:bg-opacity-20">
                        <div className="w-6 h-6 mb-1">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                            </svg>
                        </div>
                        <span className="text-xs font-medium tracking-wide">Galería</span>
                    </div>

                    <div className="flex flex-col items-center py-2 px-3 text-amber-700 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 rounded-lg cursor-pointer hover:bg-amber-100 hover:bg-opacity-20">
                        <div className="w-6 h-6 mb-1">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                            </svg>
                        </div>
                        <span className="text-xs font-medium tracking-wide">Citas</span>
                    </div>

                    <div className="flex flex-col items-center py-2 px-3 text-amber-700 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 rounded-lg cursor-pointer hover:bg-amber-100 hover:bg-opacity-20">
                        <div className="w-6 h-6 mb-1">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                            </svg>
                        </div>
                        <span className="text-xs font-medium tracking-wide">Precios</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
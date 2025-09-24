import { Outlet, Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    label: string;
}

// --- Iconos Outline (Estado inactivo) ---
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);
const ServicesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path><path d="M19.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M4.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M12 5.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path><path d="M12 19.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
    </svg>
);
const GalleryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></svg>
);
// const AppointmentsIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path>
//     </svg>
// );
// const PricesIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 2H2v10l9.29 9.29a2.82 2.82 0 0 0 4 0l6-6a2.82 2.82 0 0 0 0-4L12 2Z"></path><path d="M7 7h.01"></path>
//     </svg>
// );

// --- Iconos Filled (Estado activo) ---
const HomeIconFilled = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>);
const ServicesIconFilled = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path><path d="M19.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M4.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M12 5.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path><path d="M12 19.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
    </svg>);
const GalleryIconFilled = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></svg>);
// const AppointmentsIconFilled = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg>);
// const PricesIconFilled = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.22-1.05-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path></svg>);


// --- Componente NavLink con animación (ancho fijo para evitar reflow) ---
const NavLink = ({ to, icon, activeIcon, label }: NavLinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    const isIconOnly = label === '';

    return (
        <Link
            to={to}
            className={`flex items-center gap-2.5 transition-all duration-300 ease-in-out h-12 rounded-full ${isIconOnly ? 'w-12 px-2' : 'w-32 px-3'} flex-shrink-0 ${
                isActive 
                ? 'bg-amber-800 text-white shadow-lg justify-center' 
                : 'text-gray-500 hover:bg-amber-100/60 justify-center'
            }`}
        >
            <div className={`flex items-center justify-center ${isIconOnly ? 'w-6 h-6' : 'w-6 h-6'}`}>
                {isActive ? activeIcon : icon}
            </div>
            {/* Mostrar label sólo si existe (pero el ancho fijo evita reflow) */}
            {!isIconOnly && (
                <span className={`ml-2 text-sm font-medium whitespace-nowrap overflow-hidden transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {label}
                </span>
            )}
        </Link>
    );
};

// --- Componente principal NavBar ---
export const NavBar = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FBF7F4]">
            
            {/* Encabezado con logo y nombre, posicionado a la izquierda */}
            <header className="w-full py-3 px-4 sm:px-6 sticky top-0 z-10 bg-[#FBF7F4]/80 backdrop-blur-xl" style={{ borderBottom: '1px solid #EADED7' }}>
                <div className="flex items-center justify-center gap-3">
                    <img
                        src="/Logo.png"
                        alt="Logo de Bella Beauty"
                        className="max-h-60 items-center justify-center"
                        onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.textContent = 'BB';
                            fallback.className = 'flex items-center justify-center h-12 w-12 rounded-full bg-amber-200 text-xl font-serif text-amber-800';
                            target.parentNode?.insertBefore(fallback, target);
                        }}
                    />
                </div>
            </header>

            {/* Área de contenido principal */}
            <main className="flex-1 bg-white px-4 sm:px-6 py-6">
                <Outlet />
                {/* Espaciador para evitar que el contenido final quede oculto por la barra de navegación */}
                <div className="h-18"></div>
            </main>

            {/* Menú de navegación flotante y animado */}
            <nav className="fixed bottom-2 w-full left-1/2 -translate-x-1/2 z-20">
                <div className="flex justify-between rounded-3xl mx-2 items-center gap-2 p-2 bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/10 ring-1 ring-black/5">
                    <NavLink to="/" icon={<HomeIcon />} activeIcon={<HomeIconFilled />} label="" />
                    <NavLink to="/servicios" icon={<ServicesIcon />} activeIcon={<ServicesIconFilled />} label="" />
                    <NavLink to="/galeria" icon={<GalleryIcon />} activeIcon={<GalleryIconFilled />} label="" />
                    {/* <NavLink to="/citas" icon={<AppointmentsIcon />} activeIcon={<AppointmentsIconFilled />} label="Citas" />
                    <NavLink to="/precios" icon={<PricesIcon />} activeIcon={<PricesIconFilled />} label="Precios" /> */}
                </div>
            </nav>
        </div>
    );
}


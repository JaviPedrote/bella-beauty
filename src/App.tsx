// definir las rutas de la aplicacion
import { Routes, Route } from 'react-router'
import { Home } from './pages/Home.tsx'
import { Servicios } from './pages/Servicios.tsx'
import { NavBar } from './pages/NavBar.tsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
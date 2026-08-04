import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ProductRoutes from './pages/Products/ProductRoutes.tsx';
import { useTheme } from './theme/ThemeContext.tsx';


function App() {
  const { toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Products
          </NavLink>
        </nav>
        <button type='button' onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Note the '/*' -> this tells React Router to hand off routing to ProductRoutes */}
          <Route path="products/*" element={<ProductRoutes />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ProductRoutes from './pages/Products/ProductRoutes.tsx';


function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
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
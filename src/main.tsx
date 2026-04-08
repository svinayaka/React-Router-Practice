import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './App.tsx';
import Product from './Product.tsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">Home Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

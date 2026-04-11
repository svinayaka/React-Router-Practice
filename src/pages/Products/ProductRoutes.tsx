import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import ProductCategoryDetail from './ProductCategoryDetail';

export default function ProductRoutes() {
  return (
    <Routes>
      {/* The 'index' route matches exactly /products */}
      <Route index element={<Products />} />
      
      {/* The ':id' route matches /products/123 */}
      <Route path=":id" element={<ProductDetails />} />
      <Route path="categories/:category" element={<ProductCategoryDetail />} />
    </Routes>
  );
}

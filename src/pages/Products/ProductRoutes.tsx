import { Routes, Route, Navigate } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';
import ProductCategoryDetail from './ProductCategoryDetail';

export default function ProductRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductHomePage />}>
        <Route index element={<Navigate to="all" replace />} />
        <Route path="all" element={<AllProducts />} />
        {/* Important: Now the details will safely render in the Outlet! */}
        <Route path="categories/:category" element={<ProductCategoryDetail />} />
      </Route>
      {/* Product Details stands alone since it doesn't need the Category Sidebar */}
      <Route path=":id" element={<ProductDetails />} />
    </Routes>
  );
}

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProductCategory.css';

async function getProductCategories() {
  const response = await fetch('https://dummyjson.com/products/categories');
  const productCategories = await response.json();
  return productCategories;
}

function ProductCategory() {
  const [categoriesList, setCategoriesList] = useState<any[]>([]);

  // 1. Hook into React Router!
  const navigate = useNavigate();
  const location = useLocation();

  // 2. Simple navigation when radio is clicked
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    navigate(`/products/categories/${id}`);
  }

  const handleAllCategoriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    const initializeCategories = async () => {
      const productCategories = await getProductCategories();
      setCategoriesList(productCategories);
    }
    initializeCategories();
  }, []);

  return (
    <nav className="product-category">
      <ul className="product-category-list">
        <li>
          <input type="radio" id="all" name="category" value="all" checked={location.pathname.includes(`/products/all`)} onChange={handleAllCategoriesChange} />
          <label htmlFor="all">All</label>
        </li>
        {categoriesList?.map((category) => {
          return (
            <li key={category.slug}>
              <input
                type="radio"
                id={category.slug}
                name="category"
                value={category.name}
                checked={location.pathname.includes(`/products/categories/${category.slug}`)}
                onChange={handleCategoryChange}
              />
              <label htmlFor={category.slug}>{category.name}</label>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ProductCategory;
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProductCategory.css';

// Simple in-memory cache to store categories across components/renders
let categoriesCache: any[] | null = null;

async function getProductCategories(signal?: AbortSignal) {
  if (categoriesCache) {
    return categoriesCache;
  }

  // Try to retrieve from localStorage to persist across refreshes
  const cached = localStorage.getItem('product_categories');
  if (cached) {
    try {
      categoriesCache = JSON.parse(cached);
      return categoriesCache!;
    } catch {
      // Ignore parse error and proceed to fetch
    }
  }

  const response = await fetch('https://dummyjson.com/products/categories', { signal });
  const productCategories = await response.json();
  
  try {
    localStorage.setItem('product_categories', JSON.stringify(productCategories));
  } catch {
    // Ignore quota errors
  }
  
  categoriesCache = productCategories;
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
    const controller = new AbortController();

    const initializeCategories = async () => {
      try {
        const productCategories = await getProductCategories(controller.signal);
        setCategoriesList(productCategories);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error("Http Request failed to fetch categories:", err.message);
        }
      }
    }
    initializeCategories();

    return () => {
      controller.abort();
    };
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
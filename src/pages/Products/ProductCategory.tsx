import { useEffect, useState, useMemo } from 'react';
import AnchorPill from '../../components/AnchorPill';
import './ProductCategory.css';

async function getProductCategories() {
  const response = await fetch('https://dummyjson.com/products/categories');
  const productCategories = await response.json();
  return productCategories;
}

function ProductCategory() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const initializeCategories = async() => {
      const productCategories = await getProductCategories();
      setCategories(productCategories);
    }
    initializeCategories();
  }, []);

  return (
    <nav className="product-category">
      <ul className="product-category-list">
        {categories?.map((category) => {
          return (
            <li key={category.slug}>
              <AnchorPill text={category.name} link={`/products/category/${category.slug}`} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ProductCategory;
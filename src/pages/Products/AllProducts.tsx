import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card';
import './AllProducts.css';
import './ProductCategoryDetail.css'; /* Importing the generic grid styles */

function AllProducts() {
  // Providing a type to useState fixes the 'never' type issue:
  // Now TypeScript knows that `info` will eventually hold an object with a `products` array
  const [info, setInfo] = useState<any>();

  useEffect(() => {
    const apiRequest = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setInfo(data);
    };
    apiRequest();
  }, []);

  return (
    <section className="products-list-wrapper" aria-labelledby="products-heading">
      <h2 id="products-heading" style={{ marginBottom: 'var(--space-md)' }}>All Products</h2>
      <ul className='products-grid'>
        {info?.products.map((item: any) => {
          return (
            <li key={item.id}>
              {/* Make the entire card clickable by wrapping it in NavLink */}
              <NavLink to={`/products/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card product={item} />
              </NavLink>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default AllProducts;

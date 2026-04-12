import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AllProducts.css';

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
      <section className="products-list">
        {info?.products.map((item: any) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <nav>
                <NavLink 
                  to={`/products/${item.id}`}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {item.title}
                </NavLink>
              </nav>
            </div>
          )
        })}
      </section>
  )
}

export default AllProducts;

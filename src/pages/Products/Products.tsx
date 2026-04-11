import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';
import SearchButton from '../../components/SearchButton';
import './Products.css';

function Products() {
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
    <div className="products-container">
      <section className="search-section">
        <SearchInput searchCategory="Products" />
        <SearchButton searchCategory="Products" />
      </section>
      <section className="products-list">
        {info?.products.map((item: any) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <nav>
                <Link to={`/products/${item.id}`}>Product Page</Link>
              </nav>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Products

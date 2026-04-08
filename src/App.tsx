import './App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
    <>
      {info && info.products.map((item: any) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <nav>
              <Link to={`/product/${item.id}`}>Product Page</Link>
            </nav>
          </div>
        )
      })}
    </>
  )
}

export default Home

import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './ProductCategoryDetail.css';

function ProductCategoryDetail() {
  const [products, setProducts] = useState<any[]>([]);
  const params = useParams();
  
  useEffect(() => {
    const controller = new AbortController();

    const getProductsFromAPI = async() => {
      try {
        const productDetails = await fetch(
          `https://dummyjson.com/products/category/${params.category}`,
          { signal: controller.signal }
        );
        const data = await productDetails.json();
        // The API returns an object with a 'products' array, so we must access it specifically!
        setProducts(data.products);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error("Http Request failed to fetch category products:", err.message);
        }
      }
    }

    getProductsFromAPI();

    return () => {
      controller.abort();
    };
  }, [params.category])

  return (
    <section className="products-list" aria-labelledby="products-heading">
        <h2 id="products-heading">Our Products</h2>
        <ul className='products-grid'>
        {products?.map((item: any) => {
          return (
            <li key={item.id}>
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

export default ProductCategoryDetail;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './ProductCategoryDetail.css';

function ProductCategoryDetail() {
  const [products, setProducts] = useState<any[]>([]);
  const params = useParams();
  
  useEffect(() => {
    const getProductsFromAPI = async() => {
      const productDetails = await fetch(`https://dummyjson.com/products/category/${params.category}`);
      const data = await productDetails.json();
      // The API returns an object with a 'products' array, so we must access it specifically!
      setProducts(data.products);
    }
    getProductsFromAPI();
  }, [params.category])

  return (
    <section className="products-list" aria-labelledby="products-heading">
        <h2 id="products-heading">Our Products</h2>
        <ul className='products-grid'>
        {products?.map((item: any) => {
          return (
            <li key={item.id}>
              <Card product={item} />
            </li>
          )
        })}
        </ul>
    </section>
  )
}

export default ProductCategoryDetail;

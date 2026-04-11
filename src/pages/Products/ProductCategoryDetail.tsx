import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <section className="products-list">
        {products?.map((item: any) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <nav>
                {/* We can safely link to the details page, since its route is in ProductRoutes */}
                <Link to={`/products/${item.id}`}>{item.title}</Link>
              </nav>
            </div>
          )
        })}
    </section>
  )
}

export default ProductCategoryDetail;

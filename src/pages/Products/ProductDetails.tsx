import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import './ProductDetails.css';


function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<any>();
  useEffect(() => {
    const getProductFromAPI = async () => {
      const productDetails = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await productDetails.json();
      setProduct(data);
    }
    getProductFromAPI();
  }, [params.id])
  return (
    <div className="product-details-container">
      {product ? (
        <section className="product-main-view">
          {/* The Single Product Card */}
          <div className="card-wrapper">
            <Card product={product} />
          </div>

          {/* The Product Images Gallery (This is what we map over!) */}
          <div className="gallery-wrapper">
            <h2>Image Gallery</h2>
            {product.images?.length > 0 ? (
              <ul className="gallery-grid">
                {product.images.map((image: string) => (
                  <li key={image} className="gallery-item">
                    <img src={image} alt={`${product.title} angle`} loading='lazy'/>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No extra images found</p>
            )}
          </div>
        </section>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  )
}

export default ProductDetails;
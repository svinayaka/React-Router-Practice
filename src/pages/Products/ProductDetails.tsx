import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<any>();
  useEffect(() => {
    const getProductFromAPI = async() => {
      const productDetails = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await productDetails.json();
      setProduct(data);
    }
    getProductFromAPI();
  }, [params.id])
  return (
    <div>
      {product?.images?.length > 0 && product.images.map((image: string) => (
        <div key={image}>
          <img src={image} alt={product.title} loading='lazy'/>
        </div>
      ))}
      { product?.images?.length === 0 && <p>No images found</p> }
    </div>
  )
}

export default ProductDetails;
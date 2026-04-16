import type { ReactNode } from 'react';
import './Card.css';

function Card({ product, children }: Readonly<{ product: any; children?: ReactNode }>) {
  return (
    <article>
      <div className="card-image-container">
        <img src={product.thumbnail} alt={product.title} loading='lazy' />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-meta">
          {product.brand && <span className="card-brand">{product.brand}</span>}
          {product.brand && <span className="separator">•</span>}
          <span className="card-category">{product.category}</span>
        </p>
        <p className="card-description">{product.description}</p>
      </div>
      <div className="card-footer">
        <h3 className="card-price">${product.price}</h3>
        <div className="card-stats">
          <span className="card-rating">⭐ {product.rating}</span>
          <span className="separator">|</span>
          <span className={`card-stock ${product.availabilityStatus === 'In Stock' ? 'in-stock' : 'low-stock'}`}>
            {product.availabilityStatus === 'In Stock' ? '✅ ' : '⚠️ '}
            {product.availabilityStatus}
          </span>
        </div>
        <div className="card-tags">
          {product?.tags.map((tag: string) => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
        {children}
      </div>
    </article>
  )
}

export default Card;

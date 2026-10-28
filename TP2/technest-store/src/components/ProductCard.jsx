import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../store/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [added, setAdded] = useState(false);

  const inCart = cartItems.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      {product.badge && (
        <span className={`product-badge badge-${product.badge.toLowerCase().replace(' ', '-')}`}>
          {product.badge}
        </span>
      )}
      {discount > 0 && (
        <span className="discount-tag">-{discount}%</span>
      )}
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x280/1a1a2e/6366f1?text=${encodeURIComponent(product.name)}`;
          }}
        />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span className="rating-value">{product.rating}</span>
          <span className="rating-count">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="product-pricing">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button
          className={`add-to-cart-btn ${inCart ? 'in-cart' : ''} ${added ? 'just-added' : ''}`}
          onClick={handleAddToCart}
        >
          {added ? '✓ Added!' : inCart ? `🛒 In Cart (${inCart.quantity})` : '+ Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

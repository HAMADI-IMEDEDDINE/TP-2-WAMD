import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
        onError={(e) => {
          e.target.src = `https://placehold.co/80x80/1a1a2e/6366f1?text=IMG`;
        }}
      />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <span className="cart-item-category">{item.category}</span>
        <span className="cart-item-price">${item.price.toFixed(2)}</span>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            −
          </button>
          <span className="qty-display">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
        </div>
        <span className="cart-item-subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
          title="Remove item"
        >
          🗑
        </button>
      </div>
    </div>
  );
}

export default CartItem;

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, selectCartCount, clearCart } from '../store/cartSlice';
import CartItem from './CartItem';

function Cart({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const count = useSelector(selectCartCount);

  return (
    <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <div className="cart-title">
          <span>🛒</span>
          <h2>Your Cart</h2>
          {count > 0 && <span className="cart-count-pill">{count}</span>}
        </div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="cart-body">
        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛍️</span>
            <h3>Your cart is empty</h3>
            <p>Add some products to get started!</p>
          </div>
        ) : (
          <div className="cart-items-list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="cart-footer">
          <div className="cart-summary">
            <div className="summary-row">
              <span>Items ({count})</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-shipping">FREE</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout-btn">
            Proceed to Checkout →
          </button>
          <button
            className="clear-cart-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </aside>
  );
}

export default Cart;

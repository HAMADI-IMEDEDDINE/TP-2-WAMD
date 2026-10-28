import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/cartSlice';

function Navbar({ onCartOpen, search, onSearchChange }) {
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">TechNest</span>
          <span className="logo-sub">Store</span>
        </div>

        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          {search && (
            <button className="search-clear" onClick={() => onSearchChange('')}>✕</button>
          )}
        </div>

        <button className="cart-btn" onClick={onCartOpen}>
          <span className="cart-icon">🛒</span>
          <span className="cart-label">Cart</span>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

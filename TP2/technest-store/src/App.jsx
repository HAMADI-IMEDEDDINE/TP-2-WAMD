import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products, { categories } from './data/products';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products
    .filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="app">
      <Navbar
        onCartOpen={() => setIsCartOpen(true)}
        search={search}
        onSearchChange={setSearch}
      />
      <main className="main-content">
        <div className="hero">
          <div className="hero-content">
            <span className="hero-badge">✦ Premium Electronics</span>
            <h1>Welcome to <span className="gradient-text">TechNest</span></h1>
            <p>Discover the latest in technology. From cutting-edge laptops to premium audio gear.</p>
          </div>
        </div>

        <div className="controls-bar">
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="sort-wrapper">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="results-info">
          <span>{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</span>
        </div>

        <ProductList products={filteredProducts} />
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />}
    </div>
  );
}

export default App;

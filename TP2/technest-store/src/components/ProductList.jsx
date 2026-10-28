import ProductCard from './ProductCard';

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🔍</span>
        <h3>No products found</h3>
        <p>Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

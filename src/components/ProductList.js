import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

function ProductList() {
  return (
    <div className="container">
      <h2>Alle Produkte</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;



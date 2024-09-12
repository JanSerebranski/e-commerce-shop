import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
      </Link>
      <p>{product.price} €</p>
      <button onClick={() => addToCart(product)}>In den Warenkorb</button>
    </div>
  );
}

export default ProductCard;



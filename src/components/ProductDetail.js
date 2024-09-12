import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Produkt nicht gefunden!</h2>;
  }

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Preis: {product.price} €</p>
      <button onClick={() => addToCart(product)}>In den Warenkorb</button>
    </div>
  );
}

export default ProductDetail;




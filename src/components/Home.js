import React from 'react';
import { Link } from 'react-router-dom';  // Importiere Link für Navigation
import products from '../data/products';

function Home({ addToCart }) {
  // Zeige nur 3 Produkte auf der Home-Seite
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="container">
      <h2>Empfohlene Produkte</h2>
      <div className="highlighted-products">
        {featuredProducts.map((product) => (
          <div className="highlighted-product" key={product.id}>
            <Link to={`/product/${product.id}`}>  {/* Link zur Produktdetailseite */}
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <h3>
                <Link to={`/product/${product.id}`}>{product.name}</Link>  {/* Produktname anklickbar */}
              </h3>
              <p>{product.price} €</p>
              <button onClick={() => addToCart(product)}>In den Warenkorb</button>  {/* In den Warenkorb-Button */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


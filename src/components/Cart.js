import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p>Dein Warenkorb ist leer</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} width="50" />
                <span>{item.name}</span>
                <span>{item.price} €</span>
                <span>Menge: {item.qty}</span>
                <button onClick={() => removeFromCart(item)}>Entfernen</button>
              </li>
            ))}
          </ul>
          <h3>Gesamtpreis: {totalPrice.toFixed(2)} €</h3>
          <Link to="/checkout">
            <button>Zur Kasse</button>  {/* Button zur Checkout-Seite */}
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;



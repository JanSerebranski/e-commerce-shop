import React, { useState } from 'react';

function Checkout({ cartItems }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  if (orderSubmitted) {
    return (
      <div>
        <h2>Bestellbestätigung</h2>
        <p>Vielen Dank für deine Bestellung, {name}!</p>
        <p>Deine Bestellung wird an folgende Adresse geliefert:</p>
        <p>{address}</p>
        <h3>Bestellübersicht:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.qty} Stück - {item.price * item.qty} €
            </li>
          ))}
        </ul>
        <p>Gesamtpreis: {totalPrice.toFixed(2)} €</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h3>Warenkorb-Zusammenfassung:</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.qty} Stück - {item.price * item.qty} €
          </li>
        ))}
      </ul>
      <h3>Gesamtpreis: {totalPrice.toFixed(2)} €</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Lieferadresse:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Bestellung abschicken</button>
      </form>
    </div>
  );
}

export default Checkout;

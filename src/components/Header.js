import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

function Header({ cartItems }) {
  const { user, logout } = useContext(UserContext);

  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <span>E-Commerce-Shop</span>  {/* Shop-Name links */}
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          {user ? (
            <>
              <li>Willkommen, {user.username}</li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;



import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/');
  };

  return (
    <div className="auth-form">  {/* CSS-Klasse anwenden */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Benutzername:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Passwort:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Noch kein Konto? <Link to="/register">Hier registrieren</Link></p>
    </div>
  );
}

export default Login;



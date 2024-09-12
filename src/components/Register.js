import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    register(username, password);
    navigate('/login');
  };

  return (
    <div className="auth-form">  {/* CSS-Klasse anwenden */}
      <h2>Registrieren</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
}

export default Register;



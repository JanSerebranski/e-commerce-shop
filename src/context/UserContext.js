import React, { createContext, useState } from 'react';

// Erstelle den User-Kontext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Aktuell eingeloggter Benutzer
  const [users, setUsers] = useState([]); // Liste der registrierten Benutzer

  const login = (username, password) => {
    const foundUser = users.find((u) => u.username === username && u.password === password);
    if (foundUser) {
      setUser({ username });
    } else {
      alert('Ungültiger Benutzername oder Passwort');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = (username, password) => {
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      alert('Benutzername bereits vergeben');
    } else {
      setUsers([...users, { username, password }]); // Füge neuen Benutzer zur Liste hinzu
      alert('Registrierung erfolgreich! Du kannst dich jetzt einloggen.');
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};


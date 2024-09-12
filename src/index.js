import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Verwende createRoot statt ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

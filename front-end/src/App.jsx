// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';

import './index.css'; // Asegúrate de que la ruta a tu CSS sea correcta

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Aquí puedes añadir más rutas según necesites */}
      </Routes>
    </Router>
  );
};

export default App;

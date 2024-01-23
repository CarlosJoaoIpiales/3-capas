// Ejemplo en un componente React
import React, { useEffect, useState } from 'react';

const Backend = () => {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(data => setMensaje(data.message));
  }, []);

  return <div>{mensaje}</div>;
};

export default Backend;

// back_end/server.js
const express = require('express');
const app = express();
const port = 3001; // Usa un puerto diferente al del front-end

app.use(express.json());

// Rutas de ejemplo
app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el servidor!' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

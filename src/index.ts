// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Rutas de la API REST
app.use('/api', apiRouter);

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

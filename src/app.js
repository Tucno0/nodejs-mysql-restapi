import express from 'express';

// Importar las rutas
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

// Configurar express para poder recibir datos en formato json
app.use(express.json());

// Usar las rutas
app.use(indexRoutes);
app.use('/api', employeesRoutes);

// Middleware para manejar errores 404
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint Not Found'
  });
});

export default app;

import app from './app.js';

// Importar las variables de entorno
import { PORT } from './config.js';

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

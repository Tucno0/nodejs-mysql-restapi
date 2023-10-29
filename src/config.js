import dotenv from 'dotenv';
// Configurar dotenv para poder usar las variables de entorno
dotenv.config();

// Configurar las variables de entorno
export const PORT = process.env.PORT ?? 3000;

// El operator ?? es el operador de nullish coalescing que se usa para asignar un valor por defecto en caso de que la variable de entorno no exista o sea null o undefined o 0
export const DB_CONFIG = {
  host: process.env.DB_HOST ?? 'localhost',
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '70205787',
  port: process.env.DB_PORT ?? 3306,
  database: process.env.DB_DATABASE ?? 'companydb'
};

/**
 * ! Coneccion a la base de datos con mysql2
 * * Se crea un pool de conexiones para que se puedan hacer varias consultas a la vez sin que se bloquee la base de datos
 * * Mientras que con createConnection solo se puede hacer una consulta a la vez
 */

import { createPool } from 'mysql2/promise';

// Importar las variables de entorno
import { DB_CONFIG } from './config.js';

// Desestructurar las variables de entorno para poder usarlas en la configuracion del pool de conexiones
const { host, user, password, port, database } = DB_CONFIG;

export const pool = createPool({
  host,
  user,
  password,
  port,
  database
});

// Una vez creado el pool de conexiones se exporta para poder usarlo en cualquier parte del proyecto
// pool tiene dos metodos query y promiseQuery que son los que se usan para hacer las consultas a la base de datos
// query solo se puede usar con callbacks
// promiseQuery se puede usar con async await
// pool.query('SELECT * FROM employees', (err, rows) => {
//   console.log(rows);
// });

import { request, response } from 'express';
// Importar la configuracion de la base de datos de db.js
import { pool } from '../db.js';

export const ping = async (req = request, res = response) => {
  // pool.query('SELECT * FROM employees', (err, rows) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send('Error obteniendo empleados');
  //   } else {
  //     res.send(rows);
  //   }
  // });

  try {
    const result = await pool.query('SELECT "Pong" AS result');
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error obteniendo empleados');
  }
};

import { request, response } from 'express';
// Importar la configuracion de la base de datos de db.js
import { pool } from '../db.js';

export const getEmployees = async (req = request, res = response) => {
  try {
    const [result] = await pool.query('SELECT * FROM employee');
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error obteniendo empleados'
    });
  }
};

export const getEmployee = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('SELECT * FROM employee WHERE id = ?', [
      id
    ]);

    if (result.length <= 0) {
      return res.status(404).json({
        message: 'Empleado no encontrado'
      });
    }

    console.log({ result });
    res.json(result[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error obteniendo empleado'
    });
  }
};

export const createEmployee = async (req = request, res = response) => {
  const { name, salary, age, address } = req.body;

  // con pool.query() se puede ejecutar cualquier consulta SQL que se quiera ejecutar en la base de datos
  // pool.query() recibe 3 parametros:
  // 1. La consulta SQL que se quiere ejecutar
  // 2. Los valores que se quieren insertar en la consulta SQL
  // 3. Un callback que recibe 2 parametros:
  //    - error: si hubo un error al ejecutar la consulta SQL
  //    - rows: los registros que se obtuvieron de la consulta SQL
  // Pero en este caso se va a usar async/await para ejecutar la consulta SQL y obtener los registros, por lo que no se va a usar el callback
  // la funcion pool.query() devuelve un array de 2 elementos:
  // 1. Un array con los registros que se obtuvieron de la consulta SQL
  // 2. Un objeto con informacion sobre la consulta SQL que se ejecuto

  const [rows] = await pool.query(
    'INSERT INTO employee (name, salary, age, address) VALUES (?, ?, ?, ?)',
    [name, salary, age, address]
  );

  res.json({
    id: rows.insertId,
    name,
    salary,
    age,
    address
  });
};

export const updateEmployee = async (req = request, res = response) => {
  const { id } = req.params;
  const { name, salary, age, address } = req.body;

  try {
    //* Con PUT se actualiza todo el recurso, por lo que si no se envia un campo en el body, este se va a actualizar a null
    // const [result] = await pool.query(
    //   'UPDATE employee SET name = ?, salary = ?, age = ?, address = ? WHERE id = ?',
    //   [name, salary, age, address, id]
    // );

    //* Con PATCH se actualiza solo una parte del recurso, por lo que si no se envia un campo en el body, este no se va a actualizar
    const [result] = await pool.query(
      'UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary), age = IFNULL(?, age), address = IFNULL(?, address) WHERE id = ?',
      [name, salary, age, address, id]
    );

    // console.log({ result });
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'Empleado no encontrado'
      });
    }

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [
      id
    ]);

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: 'Error actualizando empleado',
      error
    });
  }
};

export const deleteEmployee = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [
      id
    ]);

    // console.log({ result });
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'Empleado no encontrado'
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: 'Error eliminando empleado',
      error
    });
  }
};

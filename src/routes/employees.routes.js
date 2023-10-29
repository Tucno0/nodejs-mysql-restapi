import { Router } from 'express';
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee
} from '../controllers/employees.controller.js';

const router = Router();

router.get('/employees', getEmployees); // Esto es la forma corta de hacerlo, la forma larga es:
// router.get('/employees', (req, res) => {
//   getEmployees(req, res);
// });

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);

//* Cuando usamos PUT estamos diciendo que queremos actualizar todo el recurso y no solo una parte de el
// router.put('/employees/:id', updateEmployee);

// Por lo que en este caso se va a usar PATCH para actualizar solo una parte del recurso
router.patch('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

export default router;

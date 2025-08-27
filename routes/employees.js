import express from 'express';
import {
  addEmployee,
  getEmployeeById,
  getEmployees,
  getRandomEmployee,
  removeEmployee,
  updateEmployee,
} from '#controllers/employeeController';

const router = express.Router();

router.get('/', getEmployees);

router.get('/random', getRandomEmployee);

router.get('/:id', getEmployeeById);

router.post('/', addEmployee);

router.put('/:id', updateEmployee);

router.delete('/:id', removeEmployee);

export default router;

import express from 'express';
import {
  addEmployee,
  getEmployeeById,
  getEmployees,
  getRandomEmployee,
} from '#controllers/employeeController';

const router = express.Router();

router.get('/', getEmployees);

router.get('/random', getRandomEmployee);

router.get('/:id', getEmployeeById);

router.post('/', addEmployee);

export default router;

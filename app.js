import express from 'express';

import logger from '#middleware/logger';
import employeeRoutes from '#routes/employees';
import errorHandler from '#middleware/errorHandler';

const app = express();

app.use(express.json());

app.use(logger);

app.use(errorHandler);

app.use('/employees', employeeRoutes);

app.get('/', (req, res) => {
  res.send('Hello employees!');
});

export default app;

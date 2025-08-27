import employees from '#db/employees';

// @route GET /employees
export const getEmployees = (req, res, next) => {
  res.send(employees);
};

// @route GET /employees/:id
export const getEmployeeById = (req, res, next) => {
  const { id } = req.params;
  const targetEmployee = employees.find(
    (employee) => employee.id === parseInt(id)
  );

  if (!targetEmployee) {
    return res.status(404).send('Employee not found');
  }

  res.send(targetEmployee);
};

// @route GET /employees/random
export const getRandomEmployee = (req, res, next) => {
  const randomIndex = Math.floor(Math.random() * employees.length);

  res.send(employees[randomIndex]);
};

// @route POST /employees
export const addEmployee = (req, res, next) => {
  if (!req.body) res.status(400).send('error: body not provided');
  if (!req.body.name) res.status(400).send('error: name not provided');

  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
  };

  employees.push(newEmployee);

  res.status(201).send(newEmployee);
};

// @route PUT /employees/:id
export const updateEmployee = (req, res, next) => {
  if (!req.body) res.status(400).send('error: body not provided');
  if (!req.body.name) res.status(400).send('error: name not provided');

  const id = parseInt(req.params.id);
  const targetEmployee = employees.find((employee) => employee.id === id);

  targetEmployee.name = req.body.name;

  res.send(targetEmployee);
};

// @route DELETE /employees/:id
export const removeEmployee = (req, res, next) => {
  const id = parseInt(req.params.id);
  const targetIndex = employees.findIndex((employee) => employee.id === id);

  res.send(employees.splice(targetIndex, 1));
};

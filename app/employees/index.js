const express = require('express');
const router = express.Router();
const employeeController = require('./EmployeeController');

const controllerHandler = (promise, params) => async (req, res, next) => {
  const boundParams = params ? params(req, res, next) : [];
  try {
    const result = await promise(...boundParams);
    return res.json(result || { message: 'OK' });
  } catch (error) {
    return res.status(500) && next(error);
  }
};
const c = controllerHandler;

/* GET all Employees listing. */
router.get('/', c(employeeController.getAllEmployees, (req, res, next) => []));

/* Add a Employee. */
router.post('/', c(employeeController.addEmployee, (req, res, next) => [req.body.employee]));

/* Update a Employee. */
router.put('/:email', c(employeeController.updateEmployee, (req, res, next) => [req.params.email, req.body.employee]));

/* GET a single Employee. */
router.get('/:email', c(employeeController.getEmployee, (req, res, next) => [req.params.email]));

/* Delete a Employee */
router.delete('/:email', c(employeeController.deleteEmployee, (req, res, next) => [req.params.email]));

module.exports = router;
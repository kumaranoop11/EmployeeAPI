const EmployeeService = require('./EmployeeService');

export async function getAllEmployees() {
    const employees = await EmployeeService.getAllEmployees();
    return employees;
}

export async function addEmployee(newEmployee) {
    const employee = await EmployeeService.addEmployee(newEmployee);
    return employee;
}

export async function updateEmployee(email, uEmployee) {
    const updatedEmployee = await EmployeeService.updateEmployee(email, uEmployee);
    return updatedEmployee;
}

export async function getEmployee(email) {
    const employee = await EmployeeService.getEmployee(email);
    return employee;
}

export async function deleteEmployee(email) {
    const employee = await EmployeeService.deleteEmployee(email);
    return employee;
}
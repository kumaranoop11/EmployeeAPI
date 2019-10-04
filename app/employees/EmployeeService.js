const Employee = require('./EmployeeModel');

export function getAllEmployees(empName) {
    return Employee.find({}).exec();    
}

export async function addEmployee(nEmployee) {
    let newEmployee = new Employee({
        firstName: nEmployee.firstName, 
        lastName: nEmployee.lastName, 
        email: nEmployee.email,
        contactNumber: nEmployee.contactNumber,
        otherContactNumber: nEmployee.otherContactNumber,
        vehicleNumber: nEmployee.vehicleNumber
    });
    let addedEmployee = await newEmployee.save();
    return addedEmployee;
}

export async function updateEmployee(uEmail, uEmployee) {
    let updatedEmployee = Employee.findOneAndUpdate({email: uEmail}, {$set:{
        email: uEmployee.email,
        firstName: uEmployee.firstName,
        lastName: uEmployee.lastName,
        contactNumber: uEmployee.contactNumber,
        otherContactNumber: uEmployee.otherContactNumber,
        vehicleNumber: uEmployee.vehicleNumber
    }}, {new: true});
    return updatedEmployee;
}

export async function getEmployee(email) {
    return Employee.findOne({email: email});
}

export async function deleteEmployee(email) {
    let deletedEmployee = Employee.deleteOne({email: email});
    return deletedEmployee;
}
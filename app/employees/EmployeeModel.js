const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const EmployeeSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    contactNumber: {
        type: String
    },
    otherContactNumber: {
        type: String
    },
    vehicleNumber: {
        type: String
    }
});

EmployeeSchema.plugin(autoIncrement.plugin, {
    model: 'employee',
    field: 'empId',
    startAt: 100,
    incrementBy: 1
});

const EmployeeModel = mongoose.model('employee', EmployeeSchema);

module.exports = EmployeeModel;
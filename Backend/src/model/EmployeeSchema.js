const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    employeeName: {
        type: String,
        required: [true, "Employee Name Required"]
    },
    description: {
        type: String,
        required: [true, "Description Required"]
    },
    date: {
        type: Date,
        required: [true, "Date Required"]
    }
});

module.exports = mongoose.model("Employee", employeeSchema)
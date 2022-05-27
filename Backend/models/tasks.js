const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    projectId: Number,
    employeeId: Number,
    nameTask: String,
    description: String,
    priority: Number,
    statusTask: String,
});

module.exports = mongoose.model('Tasks', TaskSchema);

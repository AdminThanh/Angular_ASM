const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    idProject: { type: String, unique: true },
    nameProject: String,
    noteProject: String,
    expense: String,
    startDate: String,
    deadline: String,
    leader: String,
    numEmployee: String,
    employees: Number,
    statusProject: String,
});

module.exports = mongoose.model('Projects', ProjectSchema);

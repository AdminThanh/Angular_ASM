const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const EmployeeSchema = new Schema({
    employeeId: { type: String, unique: true },
    nameEmployee: String,
    password: String,
    email: { type: String, unique: true },
    zone: String,
    role: { type: String, default: 'Employee' },
    // image: String,
    phone: String,
    joinDate: { type: Date, default: Date.now },
    statusEmployee: { type: Number }
});

// EmployeeSchema.methods.gravatar = function (size) {
//     if (!this.size) size = 200;
//     if (!this.email) {
//         return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
//     } else {
//         var md5 = bcrypt.hashSync(this.email, 10);
//         return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro';
//     }
// }
module.exports = mongoose.model('employee', EmployeeSchema);
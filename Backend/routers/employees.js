const router = require('express').Router();
const Employee = require('../models/employees');
const bcrypt = require('bcryptjs');
const config = require('../config');

router.post('/', async (req, res, next) => {

    let employee = new Employee();

    employee.employeeId = req.body.employeeId;
    employee.nameEmployee = req.body.nameEmployee;
    employee.email = req.body.email;
    employee.password = bcrypt.hashSync(req.body.password);
    // employee.password = req.body.password;
    employee.zone = req.body.zone.name;
    employee.role = req.body.role.name;
    employee.phone = req.body.phone;
    // employee.image= employee.gravatar();
    employee.statusEmployee = 0;

    try {
        console.log(employee);

        employee = await employee.save();
        if (!employee) {
            return res.status(500).json({
                success: false,
                message: 'Đã xảy ra lỗi',
            });
        }
        res.json({
            success: true,
            data: employee
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
            error: error
        });
    }
})


router.put('/:id', async (req, res, next) => {
    let employeeEdit = await Employee.findById(req.params.id);

    if (!employeeEdit) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }

    let passwordNew = req.body.password ? bcrypt.hashSync(req.body.password) : employeeEdit.password;

    let employee = {
        employeeId: req.body.employeeId,
        nameEmployee: req.body.nameEmployee,
        email: req.body.email,
        // employee.password : bcrypt.hashSync(req.body.password),
        password: passwordNew,
        zone: req.body.zone.name,
        role: req.body.role.name,
        phone: req.body.phone,
        // image: employee.gravatar(),
        statusEmployee: req.body.statusEmployee,
    }

    try {
        const emp = await Employee.findByIdAndUpdate(req.params.id, employee, { new: true });
        if (!emp) {
            return res.status(500).json({
                success: false,
                message: 'Đã xảy ra lỗi',
            });
        }
        res.json({
            success: true,
            employee: emp
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
            error: error
        });
    }
})

router.get('/', async (req, res, next) => {
    res.send(`<h1 style="text-align: center;">Bạn không có quyền truy cập API này</br>Vui lòng liên hệ Admin để được hỗ trợ </br><a href="https://zalo.me/0387578520">0387578520</a></h1>`);
})

router.get('/list', async (req, res, next) => {

    const employeeList = await Employee.find().select('-password');

    if (!employeeList) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }
    res.json({
        success: true,
        employees: employeeList
    })

})

router.get('/:id', async (req, res, next) => {

    const employeeOne = await Employee.findById(req.params.id);

    if (!employeeOne) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }
    res.json({
        success: true,
        employees: employeeOne
    })

})

router.delete('/:id', async (req, res, next) => {

    const project = await Employee.deleteOne({ "_id": req.params.id });

    if (!project) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }
    res.json({
        success: true,
        projects: project,
    })

})

module.exports = router;
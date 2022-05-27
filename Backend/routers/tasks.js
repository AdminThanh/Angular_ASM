const router = require('express').Router();
const Task = require('../models/tasks');
const config = require('../config');

router.get('/', (req, res, next) => {
    res.send(`<h1 style="text-align: center;">Bạn không có quyền truy cập API này</br>Vui lòng liên hệ Admin để được hỗ trợ </br><a href="https://zalo.me/0387578520">0387578520</a></h1>`);
})


router.get('/list', async (req, res, next) => {

    const taskList = await Task.find();

    if (!taskList) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }
    res.json({
        success: true,
        tasks: taskList,
    })

})


router.get('/:id', async (req, res, next) => {

    const taskOne = await Task.findById(req.params.id);

    if (!taskOne) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }
    res.json({
        success: true,
        task: taskOne
    })

})


router.post('/', async (req, res, next) => {
    let task = new Task();
    if (req.body.projectId) {
        task.projectId = req.body.projectId.idProject;
    }
    // task.employeeId = req.body.employeeId.employeeId;
    task.employeeId = "1";
    task.nameTask = req.body.nameTask;
    task.description = req.body.description;
    task.priority = req.body.priority.employeeId;
    task.statusTask = req.body.statusTask.name;

    console.log(this.task);
    try {
        taskAct = await task.save();
        if (!taskAct) {
            return res.status(500).json({
                success: false,
                message: 'Đã xảy ra lỗi',
            });
        }
        res.json({
            success: true,
            data: taskAct
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
            error: error
        });
    }
})


router.delete('/:id', async (req, res, next) => {

    const task = await Task.deleteOne({ "_id": req.params.id });

    if (!task) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }
    res.json({
        success: true,
        tasks: task,
    })

})


router.put('/:id', async (req, res, next) => {
    let taskEdit = await Task.findById(req.params.id);
    if (!taskEdit) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }

    let task = {
        projectId: req.body.projectId.idProject,
        employeeId: req.body.employeeId,
        nameTask: req.body.nameTask,
        description: req.body.description,
        priority: req.body.priority.employeeId,
        statusTask: req.body.statusTask.name,
    }

    console.log(task);
    try {
        taskAct = await Task.findByIdAndUpdate(req.params.id, task, { new: true });
        if (!taskAct) {
            return res.status(500).json({
                success: false,
                message: 'Đã xảy ra lỗi',
            });
        }
        res.json({
            success: true,
            task: taskAct
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
            error: error
        });
    }
})

module.exports = router;

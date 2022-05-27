const router = require('express').Router();
const Project = require('../models/projects');
const config = require('../config');

router.get('/', (req, res, next) => {
    res.send(`<h1 style="text-align: center;">Bạn không có quyền truy cập API này</br>Vui lòng liên hệ Admin để được hỗ trợ </br><a href="https://zalo.me/0387578520">0387578520</a></h1>`);
})


router.get('/list', async (req, res, next) => {

    const projectList = await Project.find();

    if (!projectList) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }
    res.json({
        success: true,
        projects: projectList,
    })

})


router.get('/:id', async (req, res, next) => {

    const projectOne = await Project.findById(req.params.id);

    if (!projectOne) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }
    res.json({
        success: true,
        projects: projectOne
    })

})


router.post('/', async (req, res, next) => {
    let project = new Project();

    project.idProject = req.body.idProject;
    project.nameProject = req.body.nameProject;
    project.noteProject = req.body.noteProject;
    project.expense = req.body.expense;
    project.startDate = req.body.startDate;
    project.deadline = req.body.deadline;
    project.leader = req.body.leader;
    project.numEmployee = req.body.numEmployee;
    project.employees = req.body.employees;
    project.statusProject = req.body.statusProject.name;

    console.log(this.project);

    try {
        console.log(this.project);
        projectAct = await project.save();
        if (!projectAct) {
            return res.status(500).json({
                success: false,
                message: 'Đã xảy ra lỗi',
            });
        }
        res.json({
            success: true,
            project: projectAct
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

    let projectEdit = await Project.findById(req.params.id);
    if (!projectEdit) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi',
        });
    }

    let project = {
        idProject: req.body.idProject,
        nameProject: req.body.nameProject,
        noteProject: req.body.noteProject,
        expense: req.body.expense,
        startDate: req.body.startDate,
        deadline: req.body.deadline,
        leader: req.body.leader,
        numEmployee: req.body.numEmployee,
        employees: req.body.employees,
        statusProject: req.body.statusProject.name,
    }
    console.log(project);
    try {
        projectAct = await Project.findByIdAndUpdate(req.params.id, project, { new: true });
        if (!projectAct) {
            return res.status(500).json({
                success: false,
                message: 'Đã xảy ra lỗi',
            });
        }
        res.json({
            success: true,
            project: projectAct
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

    const project = await Project.deleteOne({ "_id": req.params.id });

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

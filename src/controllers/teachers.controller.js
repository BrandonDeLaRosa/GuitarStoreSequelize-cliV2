const teacherServices = require ('../services/teachers.service');

const getAllTeachers = async (req,res,next) => {
    try {
        const allTeachers = await teacherServices.teachersArray();
        res.status(201).json(allTeachers)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createNewTeacher = async (req,res,next) => {
    try {
        const body = req.body
        const newTeacher = await teacherServices.createTeacher(body);
        res.status(201).json(newTeacher)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
        
    }
}

const getOneTeacher = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result = await teacherServices.getTeacher(id);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateTeacher = async (req,res,next) => {
    try {
        const {id} = req.params;
        const teacherBody = req.body;
        const updatedTeacher = await teacherServices.updateOneTeacher(id,teacherBody);
        res.status(201).json(updatedTeacher)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTeacher = async (req,res,next) => {
    try {
        const {id} = req.params;
        const deletedTeacher = await teacherServices.deleteOneTeacher(id);
        res.status(201).json(deletedTeacher)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllTeachers,
    createNewTeacher,
    getOneTeacher,
    updateTeacher,
    deleteTeacher
}

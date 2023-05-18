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

module.exports = {
    getAllTeachers,
    createNewTeacher
}

const studentServices = require ('../services/students.service');

const getAllStudents = async (req,res,next) => {
    try {
        const allStudents = await studentServices.studentsArray();
        res.status(201).json(allStudents)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}

const createNewStudent = async (req,res,next) => {
    try {
        const body = req.body
        const newStudent = await studentServices.createStudent(body);
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
        
    }
}

module.exports = {
    getAllStudents,
    createNewStudent
}
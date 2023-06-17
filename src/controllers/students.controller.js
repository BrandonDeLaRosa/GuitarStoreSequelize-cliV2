const studentServices = require ('../services/students.service');
const {StudentsTeachers} = require('../database/models')


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

const getOneStudent = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result = await studentServices.getStudent(id);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateStudent = async (req,res,next) => {
    try {
        const {id} = req.params;
        const studentBody = req.body;
        const updatedStudent = await studentServices.updateOneStudent(id,studentBody);
        res.status(201).json(updatedStudent)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteStudent = async (req,res,next) => {
    try {
        const {id} = req.params;
        const deletedstudent = await studentServices.deleteOneStudent(id);
        res.status(201).json(deletedstudent)
    } catch (error) {
        res.status(400).json(error)
    }
}

const studentTeacherJoin = async (req,res,next) => {
    try {
        const {studentsId, teachersId} = req.body
        await StudentsTeachers.create({studentsId,teachersId});
        res.status(201).json({
            message: "Student Teacher data created successfuly"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json(erro)
    }
}

module.exports = {
    getAllStudents,
    createNewStudent,
    getOneStudent,
    updateStudent,
    deleteStudent,
    studentTeacherJoin
}
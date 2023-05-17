const ClassesServices = require('../services/classes.services');


const getAllClasses = async (req,res,next) => {
    try {
        const classes = await ClassesServices.getClasses();
        res.status(201).json(classes)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getOneClass = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result = await ClassesServices.getClass(id);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
}

const createNewClass = async (req,res,next) => {
    try {
        const newClass = req.body;
        const create =await ClassesServices.createNewClass(newClass)
        res.status(201).json(create)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateClass = async (req,res,next) => {
    try {
        const {id} = req.params;
        const classBody = req.body;
        const updatedClass = await ClassesServices.updateOneClass(id,classBody);
        res.status(201).json(updatedClass)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteClass = async (req,res,next) => {
    try {
        const {id} = req.params;
        const deletedAdmin = await ClassesServices.deleteOneClass(id);
        res.status(201).json(deletedAdmin)
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = {
    getAllClasses,
    createNewClass,
    getOneClass,
    updateClass,
    deleteClass
}
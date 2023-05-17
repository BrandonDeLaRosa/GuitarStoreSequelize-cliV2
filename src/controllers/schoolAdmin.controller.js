const SchoolAdminServices = require('../services/schoolAdmin.service.js');

const getAllAdmin = async (req,res,next) => {
    try {
        const schoolAdmin = await SchoolAdminServices.getSchoolAdmin();
        res.status(201).json(schoolAdmin)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}

const getOneAdmin = async (req,res,next) => {
    try {
        const {id} = req.params;
        const admin = await SchoolAdminServices.getAdmin(id);
        res.status(201).json(admin);
    } catch (error) {
        res.status(400).json(error)
    }
}

const createNewAdmin = async (req,res,next) => {
    try {
        const newAdmin = req.body;
        const create =await SchoolAdminServices.createNewSchoolAdmin(newAdmin)
        res.status(201).json(create)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}

const updateAdmin = async (req,res,next) => {
    try {
        const {id} = req.params;
        const adminBody = req.body;
        const updatedAdmin = await SchoolAdminServices.updateOneAdmin(id,adminBody);
        res.status(201).json(updatedAdmin)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteAdmin = async (req,res,next) => {
    try {
        const {id} = req.params;
        const deletedAdmin = await SchoolAdminServices.deleteOneAdmin(id);
        res.status(201).json(deletedAdmin)
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = {
    getAllAdmin,
    createNewAdmin,
    getOneAdmin,
    updateAdmin,
    deleteAdmin
}
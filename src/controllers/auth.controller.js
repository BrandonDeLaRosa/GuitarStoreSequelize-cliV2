const SchoolAdminServices = require("../services/schoolAdmin.service");
const bcrypt = require('bcrypt')
const adminLogin = async (req,res,next) => {
    try {
        const {username,password} = req.body;
        const admin = await SchoolAdminServices.getAdmin(username)
        if(!admin){
            return res.status(400).json(error)
        }

        const isValid = await bcrypt.compare(password, admin.password)
        if(!isValid){
            return res.status(400).json(error)
        }

        res.json({
            id: admin.id,
            email: admin.email,
            username: admin.username,
            firstname:admin.firstname,
            lastname:admin.lastname,
            password: admin.password
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = adminLogin
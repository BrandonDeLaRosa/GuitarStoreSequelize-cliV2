const AuthServices = require("../services/auth.service");
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
        const {id,firstname,lastname,email} = admin
        const token = AuthServices.genToken({id,username,lastname,firstname,email})

        res.json({
            id,firstname,lastname,username,email, token
        })
    } catch (error) {
        res.status(400).json(error)
    }
}



module.exports = adminLogin
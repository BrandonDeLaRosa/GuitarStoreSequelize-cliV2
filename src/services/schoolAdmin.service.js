// const SchoolAdmin = require('../database/models/schooladmin');
const {SchoolAdmin} = require('../database/models')

class SchoolAdminServices  {
    //Todo Get´s

    static async getSchoolAdmin() {
        try {
            const admin = await SchoolAdmin.findAll()
            return admin
        } catch (error) {
            throw(error)
        }
    }

    static async getAdmin(id){
        console.log(id);
        try {
            const admin = await SchoolAdmin.findByPk(id)
            return admin
        } catch (error) {
            throw(error)
        }
    }

    static async createNewSchoolAdmin(newAdmin){
       
        try {
            const creating = await SchoolAdmin.create(newAdmin)
            return creating
        } catch (error) {
            throw(error)
        }
    }

    static async updateOneAdmin(id,adminBody){
        try {
            const updated = await SchoolAdmin.update(adminBody,{
                where: {id}
            });
            return updated
        } catch (error) {
            throw(error)
        }
    }

    static async deleteOneAdmin(id){
        try {
            const deleted = await SchoolAdmin.destroy({
                where: {id}
            })
            return deleted
        } catch (error) {
            throw(error)
        }
    }

    // todo AUTH login

    static async getAdmin(username){
        try {
            const administrator = await SchoolAdmin.findOne({
                where: {username}
            })
            return administrator
        } catch (error) {
            throw (error)
        }
    }
};

module.exports = SchoolAdminServices;
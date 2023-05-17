// const Classes = require('../models/Classes');
const {Classes} = require('../database/models');


class ClassesServices {

    static async getClasses() {
        try {
            const classes = await Classes.findAll()
            return classes
        } catch (error) {
            throw(error)
        }
    }

    static async getClass(id){
        try {
            const result = await Classes.findByPk(id)
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async createNewClass(newClass){
       
        try {
            const creating = await Classes.create(newClass)
            return creating
        } catch (error) {
            throw(error)
        }
    }

    static async updateOneClass(id,ClassBody){
        try {
            const updated = await Classes.update(ClassBody,{
                where: {id}
            });
            return updated
        } catch (error) {
            throw(error)
        }
    }

    static async deleteOneClass(id){
        try {
            const deleted = await Classes.destroy({
                where: {id}
            })
            return deleted
        } catch (error) {
            throw(error)
        }
    }

};

module.exports = ClassesServices;

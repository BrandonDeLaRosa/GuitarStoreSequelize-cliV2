const {Students} = require ('../database/models');


class studentServices {
    static async studentsArray(){
        try {
            const allStudents = await Students.findAll();
            return allStudents
        } catch (error) {
            throw (error)
        }
    }

    static async createStudent(body) {
        try {
            const newStudent = await Students.create(body);
            return newStudent
        } catch (error) {
            throw (error)
        }
    }
    
    static async getStudent(id){
        try {
            const result = await Students.findByPk(id)
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async updateOneStudent(id,studentBody){
        try {
            const updated = await Students.update(studentBody,{
                where: {id}
            });
            return updated
        } catch (error) {
            throw(error)
        }
    }

    static async deleteOneStudent(id){
        try {
            const deleted = await Students.destroy({
                where: {id}
            })
            return deleted
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = studentServices;
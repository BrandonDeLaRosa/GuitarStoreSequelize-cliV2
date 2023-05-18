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
}

module.exports = studentServices;
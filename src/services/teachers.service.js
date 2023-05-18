const {Teachers} = require ('../database/models');


class teacherServices {
    static async teachersArray(){
        try {
            const allTeachers = await Teachers.findAll();
            return allTeachers
        } catch (error) {
            throw (error)
        }
    }

    static async createTeacher(body) {
        try {
            const newTeacher = await Teachers.create(body);
            return newTeacher
        } catch (error) {
            throw (error)
        }
    }
}

module.exports = teacherServices;
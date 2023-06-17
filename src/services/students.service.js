// const {Students} = require ('../database/models');
const { Classes, SchoolAdmin, Teachers, StudentsClasses, Students } = require('../database/models');


class studentServices {
    static async studentsArray(){
        try {
            const allStudents = await Students.findAll(
                {
                    // attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        {
                            model: SchoolAdmin,
                            attributes: ['firstname', 'lastname', 'username']
                        },
                        {
                            model: StudentsClasses, include: [{
                                    model: Classes,
                                    attributes: ["id", "name", "description"],
                                    include:[{
                                        model:Teachers,
                                        attributes: ['id','firstname', 'lastname']
                                    }]
                                }]
                        }
                    ]
                }
            );
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
            const result = await Students.findByPk(id,
                {
                    // attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        {
                            model: SchoolAdmin,
                            attributes: ['firstname', 'lastname', 'username']
                        },
                        {
                            model: StudentsClasses, include: [{
                                    model: Classes,
                                    attributes: ["id", "name", "description"],
                                    include:[{
                                        model:Teachers,
                                        attributes: ['id','firstname', 'lastname']
                                    }]
                                }]
                        }
                    ]
                })
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
const { Teachers } = require('../database/models');
const { SchoolAdmin, StudentsTeachers, Students, Classes } = require('../database/models');


class teacherServices {
    static async teachersArray() {
        try {
            const allTeachers = await Teachers.findAll(
                {
                    // attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        {
                            model: SchoolAdmin,
                            attributes: ['firstname', 'lastname', 'username']
                        },
                        {
                            model: StudentsTeachers, include: [{
                                model: Students,
                                attributes: ['id', 'firstname', 'lastname'],
                            }]
                        },
                        {
                            model: Classes,
                            attributes: ["id", "name", "description"],
                        }
                    ]
                }
            );
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

    static async getTeacher(id) {
        try {
            const result = await Teachers.findByPk(id,
                {
                    // attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        {
                            model: SchoolAdmin,
                            attributes: ['firstname', 'lastname', 'username']
                        },
                        {
                            model: StudentsTeachers, include: [{
                                model: Students,
                                attributes: ['id', 'firstname', 'lastname'],
                            }]
                        },
                        {
                            model: Classes,
                            attributes: ["id", "name", "description"],
                        }
                    ]
                })
            return result
        } catch (error) {
            throw (error)
        }
    }

    static async updateOneTeacher(id, teacherBody) {
        try {
            const updated = await Teachers.update(teacherBody, {
                where: { id }
            });
            return updated
        } catch (error) {
            throw (error)
        }
    }

    static async deleteOneTeacher(id) {
        try {
            const deleted = await Teachers.destroy({
                where: { id }
            })
            return deleted
        } catch (error) {
            throw (error)
        }
    }
}

module.exports = teacherServices;
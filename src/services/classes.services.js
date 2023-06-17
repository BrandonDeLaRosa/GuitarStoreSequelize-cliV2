// const { Model } = require('sequelize');
const { Classes, SchoolAdmin, Teachers, StudentsClasses, Students } = require('../database/models');
// const schooladmin = require('../database/models/schooladmin');


class ClassesServices {

    static async getClasses() {
        try {
            const classes = await Classes.findAll({
                // attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    {
                        model: SchoolAdmin,
                        attributes: ['firstname', 'lastname', 'username']
                    },
                    {
                        model: Teachers,
                        attributes: ['firstname', 'lastname']
                    },
                    {
                        model: StudentsClasses, include: [{
                                model: Students,
                                attributes: ["id", "firstname", "lastname"]
                            }]
                    }
                ]
            });
            return classes
        } catch (error) {
            throw (error)
        }
    }
    // attributes: ['studentsId','classesId']

    static async createNewClass(newClass) {

        try {
            const creating = await Classes.create(newClass)
            return creating
        } catch (error) {
            throw (error)
        }
    }

    static async getClass(id) {
        try {
            const result = await Classes.findByPk(id,
                {
                    // attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        {
                            model: SchoolAdmin,
                            attributes: ['firstname', 'lastname', 'username']
                        },
                        {
                            model: Teachers,
                            attributes: ['firstname', 'lastname']
                        },
                        {
                            model: StudentsClasses, include: [{
                                    model: Students,
                                    attributes: ["id", "firstname", "lastname"]
                                }]
                        }
                    ]
                })
            return result
        } catch (error) {
            throw (error)
        }
    }

    static async updateOneClass(id, ClassBody) {
        try {
            const updated = await Classes.update(ClassBody, {
                where: { id }
            });
            return updated
        } catch (error) {
            throw (error)
        }
    }

    static async deleteOneClass(id) {
        try {
            const deleted = await Classes.destroy({
                where: { id }
            })
            return deleted
        } catch (error) {
            throw (error)
        }
    }

};

module.exports = ClassesServices;

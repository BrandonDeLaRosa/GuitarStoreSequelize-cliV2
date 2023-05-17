'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentsTeachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentsTeachers.belongsTo(models.Students ,{foreignKey:"studentsId"})
      StudentsTeachers.belongsTo(models.Teachers ,{foreignKey:"teachersId"})
    }
  }
  StudentsTeachers.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    studentsId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    teachersId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'StudentsTeachers',
  });
  return StudentsTeachers;
};
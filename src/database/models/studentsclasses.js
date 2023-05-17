'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentsClasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentsClasses.belongsTo(models.Students,{foreignKey: "studentsId"})  
      StudentsClasses.belongsTo(models.Classes,{foreignKey: "classesId"})
    }
  }
  StudentsClasses.init({
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
    classesId: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
    }, {
    sequelize,
    modelName: 'StudentsClasses',
  });
  return StudentsClasses;
};
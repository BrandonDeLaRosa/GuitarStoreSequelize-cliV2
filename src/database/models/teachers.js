'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Teachers.belongsTo(models.SchoolAdmin,{foreignKey: 'schoolAdminId'});
      Teachers.hasMany(models.Classes, {foreignKey: 'teacherId'});
      Teachers.hasMany(models.StudentsTeachers,{foreignKey:"teachersId"})
    }
  }
  Teachers.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    firstname: {
      type:DataTypes.STRING(25),
      allowNull:false
    },
    lastname: {
      type:DataTypes.STRING(25),
      allowNull:false
    },
    location: {            //!  Tabla agregada con migracion, post modelo creado.
      type:DataTypes.STRING,
    },
    img:{
      type:DataTypes.STRING
    },
    schoolAdminId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      field:"school_admin_id"
    }
  }, {
    sequelize,
    modelName: 'Teachers',
  });
  return Teachers;
};
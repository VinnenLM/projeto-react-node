'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atividades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Atividades.belongsTo(models.Usuarios, {
        foreignKey: 'userId'
      })
    }
  }
  Atividades.init({
    questao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resposta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    acerto: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Atividades',
  });
  return Atividades;
};
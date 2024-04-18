'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.User, {
          foreignKey: 'user_id',
          targetKey: 'id',
          onDelete: "cascade",
          onUpdate: "no action",
      })
    }
  }
  Book.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
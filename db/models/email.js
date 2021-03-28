'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
  };
  Email.init({
    id: { type: DataTypes.STRING, primaryKey: true },
      type: DataTypes.STRING,
      value: DataTypes.STRING,
      privacy: DataTypes.STRING,
      user_id: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Email',
    tableName: 'email',
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    associations: true,
  });
  return Email;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  };
  Auth.init({
    id: { type: DataTypes.STRING, primaryKey: true },
    user_id: DataTypes.STRING,
    token : DataTypes.STRING,
    password: DataTypes.STRING,
    otp: DataTypes.STRING,
    source: DataTypes.STRING,
    verification_code: DataTypes.STRING,
    generated_at: DataTypes.DATE,
    device_token: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Auth',
    tableName: 'auth',
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    associations: true,
  });
  return Auth;
};
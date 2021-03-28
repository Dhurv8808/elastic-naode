'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Email, { foreignKey: 'user_id', onDelete: 'CASCADE' });
      this.hasMany(models.Phone, { foreignKey: 'user_id', onDelete: 'CASCADE' });
      this.hasOne(models.Auth, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
  };
  User.init({
    id: { type: DataTypes.UUID, primaryKey: true },
      avatar: DataTypes.STRING,
      account_type: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      username: DataTypes.STRING,
      bio: DataTypes.STRING,
      location: DataTypes.STRING,
      dob: DataTypes.DATEONLY,
      gender: DataTypes.INTEGER,
      hobbies: DataTypes.STRING,
      is_active: { type: DataTypes.BOOLEAN, defaultValue: false },
      birth_year: DataTypes.INTEGER,
      full_name: {
        type: DataTypes.VIRTUAL,
        get () {
          return this.getDataValue('first_name') + ' ' + this.getDataValue('last_name')
        }
      }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    associations: true,
  });
  return User;
};
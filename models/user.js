'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_pic_url: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Goal, { foreignKey: 'user_id'}) 
    User.hasMany(models.Journal, { foreignKey: 'user_id'})
  };
  return User;
};
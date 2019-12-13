'use strict';
module.exports = (sequelize, DataTypes) => {
  const Journal = sequelize.define('Journal', {
    title: DataTypes.STRING,
    thoughts: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, { timeStamps: true });
  Journal.associate = function(models) {
    Journal.belongsTo(models.User, { foreignKey: 'user_id'})
  };
  return Journal;
};
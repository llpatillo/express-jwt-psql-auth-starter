'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    category: DataTypes.STRING,
    target_completion__date: DataTypes.DATE,
    goal: DataTypes.STRING,
    status: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Goal.associate = function(models) {
    Goal.belongsTo(models.User, { foreignKey: 'user_id'})
  };
  return Goal;
};
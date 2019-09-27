'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Room, {
      as: 'User',
      foreignKey: 'User',
      onDelete: 'CASCADE',
    });

  };
  return User;
};
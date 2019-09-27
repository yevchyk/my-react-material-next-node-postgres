'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING
  }, {});
  Room.associate = function(models) {
    Room.hasMany(models.Message, {
      as: 'Room',
      onDelete: 'CASCADE',
    })
    Room.belongsToMany(models.User, {
      as: 'roomId',
      through: 'Rooms_test',
      foreignKey: 'Room'
    })
  };
  return Room;
};
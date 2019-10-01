'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    roomId: DataTypes.INTEGER,
    userId: DataTypes.STRING,
  }, {});
  Room.associate = function(models) {
    Room.hasMany(models.Message, {
      as: 'Room',
      onDelete: 'CASCADE',
    })
  };
  return Room;
};
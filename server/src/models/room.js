'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    roomId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    userId: {
      type: DataTypes.UUID,
      onDelete: 'CASCADE',
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
  }, {});
  Room.associate = function(models) {
    Room.hasMany(models.Message, {
      as: 'Room',
      onDelete: 'CASCADE',
    })
  };
  return Room;
};
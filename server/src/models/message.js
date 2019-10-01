'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: DataTypes.STRING,
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    roomId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Rooms',
        key: 'roomId',
      }
    },
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
  Message.associate = function(models) {
    Message.belongsToMany(models.User, {
      as: 'message',
      through: 'Rooms',
      foreignKey: 'message'
    })
  };
  return Message;
};
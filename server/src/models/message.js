'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: DataTypes.STRING,
    roomId: DataTypes.INTEGER,
    userId: DataTypes.STRING,
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
const bcryptjs = require('bcryptjs');
const models = require('../models');
const sequelize = require('sequelize');
const {Op} = sequelize

class MessageController {

  static async room(req, res) {
    const {id} = req.params;
    await models.Room.findOrCreate({
      where: { userId: id }
    }).then((room) => {
      if (!room) res.status(409).send({ error: 'щось сталось' })
      return res.status(200).json(room);
    });
  }

  static async createRoom(req, res) {
    const {id} = req.params;
    console.log(id, 20)
    let userId = id
    await models.Room.findOrCreate({
      where: { userId, }
    }).then((room) => {
      if (!room) res.status(409).send({ error: 'Email already in use' })
      return res.status(200).json(room);
    });
  }

  static async send(req, res) {
    const {
      id,
      text,
      roomId
    } = req.body;

    await models.Message.findOrCreate({
      where: { id: roomId }
    }).then((room) => {
      if (!room) res.status(409).send({ error: 'Email already in use' })
      return res.status(200).json(room);
    });
  }

  static async roomsList(req, res) {
    const {
      id,
      text,
      roomId
    } = req.body;

    await models.Message.findOrCreate({
      where: { id: roomId }
    }).then((room) => {
      if (!room) res.status(409).send({ error: 'Email already in use' })
      return res.status(200).json(room);
    });
  }

}

module.exports = MessageController;

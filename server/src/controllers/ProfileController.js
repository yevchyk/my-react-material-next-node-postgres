const models = require('../models');
const sequelize = require('sequelize');
const {Op} = sequelize

class ProfileController {
  static async usersList(req, res) {
    await models.User.findAll({
      attributes: ['firstName', 'lastName', 'email', 'id']
    }).then(list=> {
      res.status(200).json(list);
    })
  }
}

module.exports = ProfileController;

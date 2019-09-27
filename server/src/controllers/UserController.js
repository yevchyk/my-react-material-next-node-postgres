const bcryptjs = require('bcryptjs');
const Authorization = require('../middlewares/Authorization');
const models = require('../models');
const sequelize = require('sequelize');
const {Op} = sequelize

class UserController {
  static async register(req, res) {
    const {
      firstName,
      lastName,
      password,
      email,
    } = req.body;

    await models.User.findOrCreate({
      where: { email, password, },
      defaults: {
        firstName,
        lastName,
        password,
        email
      }
    }).then(([newUser, created]) => {
      if (!created) return res.status(409).send({ error: 'Email already in use' })
      const token = Authorization.generateToken(newUser);
      return res.status(200).json({user: newUser, token});
    });
  }

  static async login(req, res) {
    const {
      email,
      password,
    } = req.body;
    
    await models.User.findOne({
      where: {
        email,
        password,
      },
      attributes: [
        'email',
        'firstName',
        'lastName'
      ]
    }).then((user)=>{
      if (!user) {
        return res.status(200).json("user email fon't exist")
      }
      const token = Authorization.generateToken({id: user.id, email: user.email});
      return res.status(200).json({user, token})
    }).catch(err=>console.log(err))
  }

  static refresh(req, res) {
    const token = Authorization.generateToken({id: req.id, email: req.email});
    models.User.findOne({
      where: {id : req.id},
      attributes: ['firstName', 'lastName', 'email']
    }).then(user=> {
        res.status(200).json({user, token})
      })
  }
}

module.exports = UserController;

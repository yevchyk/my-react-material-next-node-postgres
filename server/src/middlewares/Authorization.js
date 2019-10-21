const jwt = require('jsonwebtoken');
const models = require('../models');
const UserController = require('../controllers/UserController');
require('dotenv').config();

class Authorization {
  constructor(type) {
    this.type = type;
  }

  static getToken(req) {
    if (req.params.token) {
      return req.params.token
    }
    if (req.headers.authorization) {
      const token = req.headers.authorization.split('Bearer = ')[1];
      return token;
    }
    const bearerToken = req.headers.cookie.split(';').find(c => c.trim().startsWith('token=')).split('=')[1];
    const token = bearerToken && bearerToken.replace('Bearer ', '');
    console.log(token)
    return token;
  }

  static generateToken(user) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email.toLowerCase(),
      },
      process.env.SECRET,
      {
        expiresIn: 172800
      }
    );
    return token;
  }

  static async refreshToken(req, res) {
    const authUser = await models.User.findOne({ where: { email: req.email } });
    const user = UserController.getUserObj({ ...authUser.dataValues });
    const token = Authorization.generateToken(user);

    return res.status(200).json({ user, token });
  }

  static authorize(req, res, next) {
    const token = Authorization.getToken(req);
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ error: 'User authorization token is expired' });
        }
        return res.status(401).json({ error: 'Failed to authenticate token' });
      }
      const foundUser = await models.User.findOne({ where: { email: decoded.email } });

      req.id = foundUser.id;
      req.email = foundUser.email;

      return next();
    });
  }
}

module.exports = Authorization;

const uuidv4 = require('uuid/v4');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Messages', [{
        id: 1,
        text: 'hi',
        createdAt: new Date(),
        updatedAt: new Date(),
        roomId: 1,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Messages', null, {});
  }
};

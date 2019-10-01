const uuidv4 = require('uuid/v4');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Rooms', [{
        id: 1,
        name: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: uuidv4(),
      }], {});
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Rooms', null, {});
  }
};

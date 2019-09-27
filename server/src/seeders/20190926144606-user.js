const uuidv4 = require('uuid/v4');
const bcryptjs = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        id: uuidv4(),
        firstName: "Taras",
        lastName: "Yevchyk",
        email: "yevchyk5@gmail.com",
        password: "123123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        firstName: "sfsdfras",
        lastName: "fsdfsdfvbYevchyk",
        email: "fsdfsdfvbyesafk5@gmail.com",
        password: "123123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        firstName: "sdg",
        lastName: "sdgak",
        email: "gdsdg@gmail.com",
        password: "123123",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};

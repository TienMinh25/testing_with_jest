'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        email: "test1@gmail.com",
        password: "123456",
        name: "test 1",
        mobile_phone: "1234567",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "test2@gmail.com",
        password: "123456",
        name: "test 2",
        mobile_phone: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "test3@gmail.com",
        password: "123456",
        name: "test 3",
        mobile_phone: "092834",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

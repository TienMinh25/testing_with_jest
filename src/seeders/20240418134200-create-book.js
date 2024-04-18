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
    return queryInterface.bulkInsert('Books', [
      {
        user_id: 1,
        name: 'Book 1',
        title: 'Test 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: 'Book 2',
        title: 'Test 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: 'Book 3',
        title: 'Test 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        name: 'Book 4',
        title: 'Test 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        name: 'Book 5',
        title: 'Test 5',
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('Books', null, {});
  }
};

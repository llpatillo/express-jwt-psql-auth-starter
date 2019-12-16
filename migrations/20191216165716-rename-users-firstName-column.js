'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return ( 
     queryInterface.renameColumn('Users', 'firstName', 'profile_pic_url')
   
    )},


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

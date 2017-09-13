const Sequelize = require('sequelize');
const db = require('../db');


const Room = db.define('room', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Room

/*
 * instanceMethods
 */




/*
 * classMethods
 */



/**
 * hooks
 */


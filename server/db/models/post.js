const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  authorId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  upVotes: {
    type: Sequelize.INTEGER
  },
  downVotes: {
    type: Sequelize.INTEGER
  }
})


module.exports = Post

/*
 * instanceMethods
 */




/*
 * classMethods
 */



/**
 * hooks
 */

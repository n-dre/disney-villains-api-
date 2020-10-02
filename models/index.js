const Sequelize = require('sequelize')
const villainsModel = require('./villains')

const connection = new Sequelize('disney', 'disney', '4218', {
  host: 'localhost', dialect: 'mysql',
})

const villains = villainsModel(connection, Sequelize)

module.exports = { villains }

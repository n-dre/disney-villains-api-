const Sequelize = require('sequelize')
const VillainsModel = require('./villains')

const connection = new Sequelize('disney', 'disney', '4218', {
  host: 'localhost', dialect: 'mysql',
})

const Villains = VillainsModel(connection, Sequelize)

module.exports = { Villains }

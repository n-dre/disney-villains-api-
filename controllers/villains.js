const models = require('../models')
const villains = require('../models/villains')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll({ attributes: ['name', 'movie', 'slug'] })

  return response.send(villains)
}

const getVillainBySlug = async (request, response) => {
  try {
    const { slug } = request.params

    const villain = await models.villains.findOne({ where: { slug } })

    return villains
      ? response.send(villain)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain, please try again')
  }
}

const saveNewVillain = async (request, response) => {
  try {
    const { name, movie, slug } = request.body

    if (!name || !movie || !slug) {
      return response.status(400).send('The following parameters are required: name, movie, slug')
    }

    const newVillain = await models.villains.create({ name, movie, slug })

    return response.status(201).send(newVillain)
  } catch (error) {
    return response.status(500).send('Unable to create new villain, please try again')
  }
}

module.exports = { getAllVillains, getVillainBySlug, saveNewVillain }

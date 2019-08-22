import { PlatilloModel } from '../database/models'

const createPlatillo = async (platillo) => {
  try {
    return await PlatilloModel.create(platillo)
  } catch (error) {
    return null
  }
}

const getPlatillos = async () => {
  try {
    return await PlatilloModel.find()
  } catch(error) {
    return null
  }
}

module.exports = {
  createPlatillo,
  getPlatillos
}

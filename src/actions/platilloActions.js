import { PlatilloModel } from '../database/models'
import { updateRestaurant } from './restaurantActions'

const createPlatillo = async (platillo) => {
  try {
    const platilloNuevo = await PlatilloModel.create(platillo)
    const filter = { _id: platillo.restaurantID }
    const update = { $push: { 'platillos': platilloNuevo._id }}
    await updateRestaurant(filter, update)
    return platilloNuevo
  } catch (error) {
    return error
  }
}

const getPlatillos = async () => {
  try {
    return await PlatilloModel.find()
  } catch(error) {
    return error
  }
}

module.exports = {
  createPlatillo,
  getPlatillos
}

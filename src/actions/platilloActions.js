import { PlatilloModel } from '../database/models'
import { updateRestaurant } from './restaurantActions'
import { updateCategoria } from './categoriaActions'

const createPlatillo = async (platillo) => {
  try {
    const platilloNuevo = await PlatilloModel.create(platillo)
    // Actualizar Restaurants
    let filter = { _id: platillo.restaurant }
    const update = { $push: { platillos: platilloNuevo._id } }
    await updateRestaurant(filter, update)

    // Actualizar Categorias
    filter = { _id: platillo.categoria }
    await updateCategoria(filter, update)

    return platilloNuevo
  } catch (error) {
    return error
  }
}

const getPlatillos = async () => {
  try {
    const platillos = await PlatilloModel.find()
      .populate('categoria', 'name')
      .populate('restaurant', 'name')
    console.log(`platillos: ${platillos[0].categoria}`)
    return platillos
  } catch (error) {
    return error
  }
}

module.exports = {
  createPlatillo,
  getPlatillos
}

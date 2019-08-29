import { CarritoModel } from '../database/models'

const addCarrito = async (carrito) => {
  try {
    // Si existia un un carrito guardado para el usuario se elimina y se carga uno nuevo.
    await removeCarrito(carrito.usuario)
    const newCarrito = await CarritoModel.create(carrito)
    return newCarrito
  } catch (error) {
    return error
  }
}

const getCarrito = async (usuario) => {
  try {
    const carrito = await CarritoModel.findOne({ usuario })
      .populate('restaurant')
      .populate('usuario')
      .populate('detail.platillo')
    return carrito
  } catch (error) {
    return error
  }
}

const removeCarrito = async (usuarioID) => {
  try {
    const carrito = await CarritoModel.findOneAndRemove({ usuario: usuarioID })
    return carrito
  } catch (error) {
    return error
  }
}
module.exports = {
  addCarrito,
  getCarrito,
  removeCarrito
}

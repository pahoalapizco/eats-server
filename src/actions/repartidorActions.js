import { RepartidorModel } from '../database/models'

const createRepartidor = async (repartidor) => {
  try {
    const newRepartidor = await RepartidorModel.create(repartidor)
    return  newRepartidor
  } catch (error) {
    return error
  }
}

const getRepartidores = async () => {
  try {
    const repartidores = await RepartidorModel.find()
      .populate('pedidos')
      .populate('calificaciones')
      .exec()
      console.log(repartidores[0].calificaciones[0].estrellas)
    return repartidores
  } catch (error) {
    return error
  }
}

const updateRepartidor = async (filter, update) => {
  try {
    const repartidorActualizado = await RepartidorModel.findOneAndUpdate(filter, update, { new: true })
    return repartidorActualizado
  } catch (error) {
    return error
  }
}

module.exports = {
  createRepartidor,
  getRepartidores,
  updateRepartidor
}

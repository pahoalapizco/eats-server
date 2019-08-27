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
      repartidores.forEach((repartidor, index) => {
        let totalEstrellas = 0  
        repartidor.calificaciones.forEach(calificacion => {
          totalEstrellas += calificacion.estrellas
        })
        const totalCalificaciones = repartidor.calificaciones.length === 0 ? 1 :  repartidor.calificaciones.length
        repartidores[index].promedio = totalEstrellas / totalCalificaciones
      })
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

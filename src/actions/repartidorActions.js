import { RepartidorModel } from '../database/models'
import { isArray } from 'util';

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

    return calcularCalificacion(repartidores)
  } catch (error) {
    return error
  }
}

const getRepartidor = async (repartidorID) => {
  try {
    const repartidor = await RepartidorModel.findOne({ _id: repartidorID })
      .populate('pedidos')
      .populate('calificaciones')
      .exec()
    
    let totalEstrellas = 0
    repartidor.calificaciones.forEach(calificacion => {
      totalEstrellas += calificacion.estrellas
    })
    const totalCalificaciones = repartidor.calificaciones.length === 0 ? 1 :  repartidor.calificaciones.length
    repartidor.promedio = totalEstrellas / totalCalificaciones

    return repartidor
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

const calcularCalificacion = (repartidores) => {
  repartidores.forEach((repartidor, index) => {
    let totalEstrellas = 0  
    repartidor.calificaciones.forEach(calificacion => {
      totalEstrellas += calificacion.estrellas
    })
    const totalCalificaciones = repartidor.calificaciones.length === 0 ? 1 :  repartidor.calificaciones.length
    repartidores[index].promedio = totalEstrellas / totalCalificaciones
  })
  return repartidores
}

module.exports = {
  createRepartidor,
  getRepartidores,
  updateRepartidor,
  getRepartidor
}

import { CalificacionModel } from '../database/models'
import { updateRepartidor } from '../actions/repartidorActions'

const calificarRepartidor = async (calificacion) => {
  try {
    // Si se intenta enviar una calificacion mayor a las 5 estrellas se cambia al maximo posible "5"
    const calificacionValida = { ...calificacion, estrellas: calificacion.estrellas > 5 ? 5 : calificacion.estrellas }

    const calificacionRep = await CalificacionModel.create(calificacionValida)
    const filter = { _id: calificacion.repartidor }
    const update = { $push: { calificaciones: calificacionRep._id } }
    await updateRepartidor(filter, update)
    return calificacionRep
  } catch (error) {
    return error
  }
}

module.exports = {
  calificarRepartidor
}

import { PedidoModel } from '../database/models'
import { PEDIDO_PENDIENTE, PEDIDO_PROCESO } from '../config/globals'
import { updateRepartidor } from '../actions/repartidorActions'

const addPedido = async (pedido) => {
  try {
    const pedidoCreated = await PedidoModel.create(pedido)
    const filter = { _id: pedidoCreated._id }
    const update = { $push: { estatus: PEDIDO_PENDIENTE } }
    await updatePedido(filter, update)

    return pedidoCreated
  } catch (error) {
    return error
  }
}

const updatePedido = async (filter, update) => {
  try {
    const pedidoActualizado = await PedidoModel.findOneAndUpdate(filter, update, { new: true })
    return pedidoActualizado
  } catch (error) {
    return error
  }
}

const getPedidos = async (filter) => {
  try {
    const pedidos = await PedidoModel.find(filter)
      .populate('repartidor')
      .populate('restaurant', 'name')
      .populate('usuario')
      .populate('detail.platillo')
    return pedidos
  } catch (error) {
    return error
  }
}

const takePedido = async (pedidoID, repartidorID) => {
  try {
    let filter = { _id: repartidorID }
    let update = { $push: { pedidos: pedidoID } }
    await updateRepartidor(filter, update)

    filter = { _id: pedidoID }
    update = { $push: { estatus: PEDIDO_PROCESO }, $set: { repartidor: repartidorID } }
    return await updatePedido(filter, update)
  } catch (error) {
    return error
  }
}

module.exports = {
  addPedido,
  getPedidos,
  updatePedido,
  takePedido
}

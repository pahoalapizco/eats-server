import { PedidoModel } from '../database/models'
import { PEDIDO_PENDIENTE } from '../config/globals'

const addPedido = async (pedido) => {
  try {
    const pedidoCreated = await PedidoModel.create(pedido)
    const filter = { _id: pedidoCreated._id }
    const update = { $push: { 'estatus': PEDIDO_PENDIENTE } }
    await updatePedido(filter, update)

    return pedidoCreated
  } catch (error) {
    return error
  }
}

const updatePedido = async (filter, update) => {
  try {
    await PedidoModel.findOneAndUpdate(filter, update, { new: true })
  } catch (error) {
    return error;
  }
}

const getPedidos = async () => {
 try {
  return await PedidoModel.find()
 } catch (error) {
   return error
 }
}

module.exports = {
  addPedido,
  getPedidos,
  updatePedido
}
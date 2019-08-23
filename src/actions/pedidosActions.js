import { PedidoModel } from '../database/models'

const addPedido = async (pedido) => {
  try {
    return PedidoModel.create(pedido)
  } catch (error) {
    return error
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
  getPedidos
}
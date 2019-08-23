import { PedidoModel } from '../database/models'

const addPedido = async (pedido) => {
  try {
    return PedidoModel.create(pedido)
  } catch (error) {
    return error
  }
}

const getPedidoById = async () => {

}

module.exports = {
  addPedido,
  getPedidoById
}
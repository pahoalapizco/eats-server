'use strict'

import mongoose from 'mongoose'
import
{
  PEDIDO_PENDIENTE,
  PEDIDO_PROCESO,
  PEDIDO_ENVIADO,
  PEDIDO_ETREGADO
} from '../../config/globals'

const Schema = mongoose.Schema
const metodoPago = ['PayPal', 'Tarjeta', 'Efectivo']
const estatus = [PEDIDO_PENDIENTE, PEDIDO_PROCESO, PEDIDO_ENVIADO, PEDIDO_ETREGADO]

const pedidoSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'restaurantes'
  },
  usuario: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'usuarios'
  },
  repartidor: {
    type: Schema.Types.ObjectId,
    ref: 'repartidores'
  },
  total: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  metodoPago: {
    type: String,
    required: true,
    enum: metodoPago
  },
  estatus: [{
    type: Number,
    default: PEDIDO_PENDIENTE,
    required: true,
    enum: estatus
  }],
  detail: [{
    platillo: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'platillos'
    },
    cantidad: {
      type: Number,
      required: true
    },
    importe: {
      type: Number,
      required: true
    }
  }]
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = pedidoSchema

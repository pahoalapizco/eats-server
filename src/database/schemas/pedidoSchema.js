'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const pedidoSchema = new Schema({
  restaurantID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  usuarioID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  repartidorID: {
    type: Schema.Types.ObjectId
  },
  total: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  detail: [{
    platilloID: {
      type: Schema.Types.ObjectId,
      required: true
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

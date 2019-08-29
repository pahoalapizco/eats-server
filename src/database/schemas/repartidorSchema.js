'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const vehiculos = {
  values: ['Bicicleta', 'Motocicleta', 'Automovil']
}
const repartidorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String
  },
  img: {
    type: String
  },
  vehiculo: {
    type: String,
    default: 'Motocicleta',
    enum: vehiculos
  },
  pedidos: [{
    type: Schema.Types.ObjectId,
    ref: 'pedidos'
  }],
  calificaciones: [{
    type: Schema.Types.ObjectId,
    ref: 'calificaciones'
  }]
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = repartidorSchema

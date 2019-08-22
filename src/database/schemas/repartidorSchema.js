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
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String
  },
  img: {
    type: String
  },
  vehicle: {
    type: String,
    default: 'Motocicleta',
    enum: vehiculos
  },
  order: [{
    type: Schema.Types.ObjectId,
    ref: 'orders'
  }]
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = repartidorSchema

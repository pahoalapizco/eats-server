'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vehicles = {
  values: ['Bike', 'Motorcycle', 'Car']
}
const roundsmanSchema = new Schema({
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
    type: String,
  },
  img: {
    type: String
  },
  vehicle: {
    type: String,
    default: 'Motorcycle',
    enum: vehicles
  },
  order: [{
    type: Schema.Types.ObjectId,
    ref: 'orders'
  }]
})

module.exports = roundsmanSchema

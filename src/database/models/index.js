'use strict'

import mongoose from 'mongoose'
import userSchema from '../schemas/userSchema'
import repartidorSchema from '../schemas/repartidorSchema'
import platilloSchema from '../schemas/platilloSchema'
import orderSchema from '../schemas/orderSchema'

const userModel = mongoose.model('users', userSchema)
const RepartidorModel = mongoose.model('repartidor', repartidorSchema)
const PlatilloModel = mongoose.model('platillos', platilloSchema)
const oderModel = mongoose.model('order', orderSchema)

module.exports = {
  userModel,
  RepartidorModel,
  PlatilloModel,
  oderModel
}

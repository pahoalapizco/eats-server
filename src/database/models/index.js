'use strict'

import mongoose from 'mongoose'
import userSchema from '../schemas/usuarioSchema'
import repartidorSchema from '../schemas/repartidorSchema'
import platilloSchema from '../schemas/platilloSchema'
import pedidoSchema from '../schemas/pedidoSchema'
import restaurantSchema from '../schemas/restaurantSchema'

const UserModel = mongoose.model('usuarios', userSchema)
const RepartidorModel = mongoose.model('repartidor', repartidorSchema)
const PlatilloModel = mongoose.model('platillos', platilloSchema)
const PedidoModel = mongoose.model('order', pedidoSchema)
const RestaurantModel = mongoose.model('restaurantes', restaurantSchema)

module.exports = {
  UserModel,
  RepartidorModel,
  PlatilloModel,
  PedidoModel,
  RestaurantModel
}

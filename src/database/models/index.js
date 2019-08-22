'use strict'

import mongoose from 'mongoose'
import userSchema from '../schemas/userSchema'
import roundsmanSchema from '../schemas/roundsmanSchema'
import saucerSchema from '../schemas/saucerSchema'
import orderSchema from '../schemas/orderSchema'

const userModel = mongoose.model('users', userSchema)
const roundsmanModel = mongoose.model('roundsmen', roundsmanSchema)
const saucerModel = mongoose.model('saucers', saucerSchema)
const oderModel = mongoose.model('order', orderSchema)

module.exports = {
  userModel,
  roundsmanModel,
  saucerModel,
  oderModel
}

'use strict'

const mongoose = require('mongoose')
const userSchema = require('../schemas/userSchema')
const roundsmanSchema = require('../schemas/roundsmanSchema')
const saucerSchema = require('../schemas/saucerSchema')
const orderSchema = require('../schemas/orderSchema')

const userModel = mongoose.model('users', userSchema)
const roundsmanModel = mongoose.model('roundsmen', roundsmanSchema)
const saucerModel = mongoose.model('saucers', saucerSchema)
const oderModel = mongoose.model('orders', orderSchema)

module.exports = {
  userModel,
  roundsmanModel,
  saucerModel,
  oderModel
}

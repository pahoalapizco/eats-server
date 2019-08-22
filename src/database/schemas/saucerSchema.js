'use stric'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const saucerTypes = {
  values: ['Food', 'Drink', 'Dessert']
}
const saucerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  type: {
    type: String,
    default: 'Food',
    enum: saucerTypes
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String
  }
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = saucerSchema

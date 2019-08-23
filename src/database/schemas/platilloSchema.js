'use stric'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const platilloTypes = {
  values: ['Food', 'Drink', 'Dessert']
}
const platilloSchema = new Schema({
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
    enum: platilloTypes
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String
  },
  restaurantID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'restaurantes'
  }
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = platilloSchema

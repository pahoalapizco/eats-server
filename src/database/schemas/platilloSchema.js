'use stric'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const platilloSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'restaurantes'
  },
  categoria: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'categorias'
  }
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = platilloSchema

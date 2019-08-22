'use stric'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const saucerTypes = {
  values: ['Food', 'Drink', 'Dessert']
}
export const saucerSchema = new Schema({
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
  }
})

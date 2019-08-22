'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const orderSchema = new Schema({
  restaurant: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  saucer: [{
    type: Schema.Types.ObjectId,
    ref: 'soucers'
  }]
})

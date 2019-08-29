import mongoose from 'mongoose'

const Schema = mongoose.Schema

const carritoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'usuarios'
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'restaurantes'
  },
  total: {
    type: Number,
    required: true
  },
  detail: [{
    platillo: {
      type: Schema.Types.ObjectId,
      ref: 'platillos',
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    },
    importe: {
      type: Number,
      required: true
    }
  }]
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = carritoSchema

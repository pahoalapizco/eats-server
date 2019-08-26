import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema
const estrellas = { values: [1, 2, 3, 4, 5] }

const calificacionSchema = new Schema({
  estrellas: {
    type: Number,
    required: true,
    enum: estrellas
  },
  comentario: {
    type: String    
  },
  repartidor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'repartidores'
  }
} , { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = calificacionSchema
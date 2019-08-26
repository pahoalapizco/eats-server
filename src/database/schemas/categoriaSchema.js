import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categoriaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  platillos: [{
    type: Schema.Types.ObjectId,
    ref: 'platillos'
  }]
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = categoriaSchema

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String
  },
  open: {
    type: String
  },
  closed: {
    type: String
  },
  platillos: [{
    type: Schema.Types.ObjectId,
    ref: 'platillos'
  }]
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = restaurantSchema

import { RepartidorModel } from '../database/models'

const createRepartidor = async (repartidor) => {
  try {
    return await RepartidorModel.create(repartidor)
  } catch (error) {
    return error
  }
}

const getRepartidores = async () => {
  try {
    return await RepartidorModel.find()
  } catch (error) {
    return error
  }
}


const updateRepartidor = async (filter, update) => {
  try {
    return await RepartidorModel.findOneAndUpdate(filter, update, { new: true })
  } catch (error) {
    return error;
  }
}

module.exports = {
  createRepartidor,
  getRepartidores,
  updateRepartidor
}
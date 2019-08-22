import { RepartidorModel } from '../database/models'
import { builtinModules } from 'module';

const createRepartidor = async (repartidor) => {
  try {
    return await RepartidorModel.create(repartidor)
  } catch (error) {
    return null
  }
}

const getRepartidores = async () => {
  try {
    return await RepartidorModel.find()
  } catch (error) {
    return null
  }
}

module.exports = {
  createRepartidor,
  getRepartidores
}
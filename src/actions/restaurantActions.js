import { RestaurantModel } from '../database/models'

const addRestaurant = async (restaurant) => {
  try {
    return await RestaurantModel.create(restaurant)
  } catch (error) {
    return error
  }
}

const getRestaurants = async () => {
  try {
    return await RestaurantModel.find().populate('platillos')
  } catch (error) {
    return error
  }
}

const updateRestaurant = async (filter, update) => {
  try {
    return await RestaurantModel.findOneAndUpdate(filter, update, { new: true })
  } catch (error) {
    return error
  }
}

module.exports = {
  addRestaurant,
  getRestaurants,
  updateRestaurant
}

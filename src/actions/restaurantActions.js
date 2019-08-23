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
    return await RestaurantModel.find()
  } catch (error) {
    return error
  }
}

module.exports = {
  addRestaurant,
  getRestaurants
}
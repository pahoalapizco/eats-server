import { UserModel } from '../database/models'

const createUser = async (user) => {
  try {
    return await UserModel.create(user)
  } catch (error) {
    return error
  }
}

const getUsers = async (userID) => {
  try {
    return await UserModel.find()
  } catch (error) {
    return error
  }
}

module.exports = {
  createUser,
  getUsers
}
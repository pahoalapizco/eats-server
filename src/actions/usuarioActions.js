import { UserModel } from '../database/models'

const createUser = async (user) => {
  try {
    return await UserModel.create(user)
  } catch (error) {
    return error
  }
}

const getUserById = async (userID) => {
  
}

module.exports = {
  createUser,
  getUsers
}
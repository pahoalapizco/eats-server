import { UserModel } from '../database/models'
import bcrypt from 'bcrypt'

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

const login = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email })
    if(!user || !bcrypt.compareSync(password, user.password)) { return null }

    return user
  } catch (error) {
    return error
  }  
}

module.exports = {
  createUser,
  getUsers,
  login
}

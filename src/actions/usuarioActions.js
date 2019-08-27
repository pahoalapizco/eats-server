import { UserModel } from '../database/models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Agrega función a Date para agregarle días al día actual.
Date.prototype.addDay  = function(days) {
  const day = new Date(this.valueOf())
  day.setDate(day.getDate() + days)
  return day
}

const createToken = user => {
  const expiration = new Date().addDay(5).getTime()
  const payload = {
    _id: user._id,
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    expiration
  }
  const token = jwt.sign(payload, process.env.SECRET)
  return { token }
}

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

    return createToken(user)
  } catch (error) {
    return error
  }  
}

module.exports = {
  createUser,
  getUsers,
  login
}

import { CategoriaModel } from '../database/models'

const getCategoria = async () => {
  try {
    const categorias = await CategoriaModel.find().populate('platillos').exec()
    return categorias
  } catch (error) {
    return error
  }
}

const addCategoria = async (categoria) => {
  try {
    const newCategoria = CategoriaModel.create(categoria)
    return newCategoria
  } catch (error) {
    return error
  }
}

const updateCategoria = async (filter, update) => {
  try {
    const categoria = CategoriaModel.findOneAndUpdate(filter, update, { new: true })
    return categoria
  } catch (error) {
    return error
  }
}

module.exports = {
  getCategoria,
  addCategoria,
  updateCategoria
}

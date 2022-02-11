import categoriesData from '../data/categories.js'

export default {
  getCategories: (req, res) => {
    res.status(200).json(categoriesData)
  },
}

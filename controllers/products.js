import productsData from '../data/products.js'

export default {
  getProducts: (req, res) => {
    res.status(200).json(productsData)
  },
  getProduct: (req, res) => {
    const { id } = req.params
    const foundProduct = productsData.find(el => el._id === id)
    res.status(200).json(foundProduct)
  },
}

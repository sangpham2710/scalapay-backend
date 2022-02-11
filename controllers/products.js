import productsData from '../data/products.js'

export default {
  getProducts: (req, res) => {
    const { category } = req.query
    res
      .status(200)
      .json(
        category
          ? productsData.filter(el => el.category === category)
          : productsData
      )
  },
  getProduct: (req, res) => {
    const { id } = req.params
    const foundProduct = productsData.find(el => el._id === id)
    res.status(200).json(foundProduct ? foundProduct : {})
  },
}

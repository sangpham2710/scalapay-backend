import express from 'express'
import productsController from '../controllers/products.js'

const router = express.Router()

router.route('/').get(productsController.getProducts)
router.route('/:id').get(productsController.getProduct)

export default router

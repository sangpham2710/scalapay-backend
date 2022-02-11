import express from 'express'
import categoriesController from '../controllers/categories.js'

const router = express.Router()

router.route('/').get(categoriesController.getCategories)

export default router

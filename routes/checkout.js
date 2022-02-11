import express from 'express'
import { validateCheckout } from '../middlewares/checkout.js'
import checkoutController from '../controllers/checkout.js'

const router = express.Router()

router.route('/').post(validateCheckout, checkoutController.callAPI)

export default router

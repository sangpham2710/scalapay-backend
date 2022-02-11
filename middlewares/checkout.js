import ExpressError from '../utils/ExpressError.js'
import { checkoutValidationSchema } from '../validation/checkout.js'

export const validateCheckout = (req, res, next) => {
  const { error } = checkoutValidationSchema.validate(req.body, {
    allowUnknown: true,
  })
  if (error) {
    const message = error.details.map(el => el.message).join(', ')
    throw new ExpressError(message, 400)
  } else next()
}

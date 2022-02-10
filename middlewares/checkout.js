const ExpressError = require('../utils/ExpressError')
const { checkoutValidationSchema } = require('../validation/checkout')

module.exports.validateCheckout = (req, res, next) => {
  const { error } = checkoutValidationSchema.validate(req.body, {
    allowUnknown: true,
  })
  if (error) {
    const message = error.details.map(el => el.message).join(',')
    throw new ExpressError(message, 400)
  } else next()
}

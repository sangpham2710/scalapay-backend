import baseJoi from 'joi'
import sanitizeHtml from 'sanitize-html'

const extension = joi => ({
  type: 'string',
  base: joi.string(),
  messages: {
    'string.escapeHTML': '{{#label}} must not include HTML!',
  },
  rules: {
    escapeHTML: {
      validate(value, helpers) {
        const clean = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {},
        })
        if (clean !== value)
          return helpers.error('string.escapeHTML', { value })
        return clean
      },
    },
  },
})

const Joi = baseJoi.extend(extension)

export const checkoutValidationSchema = Joi.object({
  totalAmount: Joi.object({
    amount: Joi.string().required().escapeHTML(),
    currency: Joi.string().required().escapeHTML(),
  }).required(),
  consumer: Joi.object({
    givenNames: Joi.string().required().escapeHTML(),
    surname: Joi.string().required().escapeHTML(),
    phoneNumber: Joi.string().escapeHTML(),
    email: Joi.string().escapeHTML(),
  }).required(),
  shipping: Joi.object({
    phoneNumber: Joi.string().escapeHTML(),
    countryCode: Joi.string().required().escapeHTML(),
    name: Joi.string().required().escapeHTML(),
    postcode: Joi.string().required().escapeHTML(),
    line1: Joi.string().required().escapeHTML(),
  }).required(),
  items: Joi.array()
    .items(
      Joi.object({
        gtin: Joi.string().escapeHTML(),
        brand: Joi.string().escapeHTML(),
        quantity: Joi.number().integer().required().min(0),
        price: Joi.object({
          amount: Joi.string().required().escapeHTML(),
          currency: Joi.string().required().escapeHTML(),
        }).required(),
        name: Joi.string().required().escapeHTML(),
        category: Joi.string().required().escapeHTML(),
        sku: Joi.string().required().escapeHTML(),
      })
    )
    .required(),
  merchant: Joi.object({
    redirectCancelUrl: Joi.string().required().escapeHTML(),
    redirectConfirmUrl: Joi.string().required().escapeHTML(),
  }).required(),
})

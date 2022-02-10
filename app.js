const express = require('express')
const morgan = require('morgan')
const { validateCheckout } = require('./middlewares/checkout')

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// POST route for checkout
app.post('/api/v1/checkout', validateCheckout, (req, res) => {
  res.status(200).json({ message: 'hello' })
})

// Catch Express Errors
app.use((err, req, res, next) => {
  const { message = 'Something went wrong', statusCode = 500 } = err
  console.log(err)
  res.status(statusCode).send(message)
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

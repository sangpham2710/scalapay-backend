import express from 'express'
import morgan from 'morgan'
import fetch from 'node-fetch'
import cors from 'cors'
import { validateCheckout } from './middlewares/checkout.js'

const app = express()
const port = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

// POST route for checkout
app.post('/api/v1/checkout', validateCheckout, async (req, res) => {
  const url = 'https://staging.api.scalapay.com/v2/orders'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer qhtfs87hjnc12kkos',
    },
    body: JSON.stringify(req.body),
  }
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  res.status(200).json(data)
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

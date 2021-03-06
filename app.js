import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import checkoutRoutes from './routes/checkout.js'
import productsRoutes from './routes/products.js'
import categoriesRoutes from './routes/categories.js'

if (process.env.NODE_ENV !== 'production') dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: process.env.FE_URL,
  })
)

app.use('/api/v1/categories', categoriesRoutes)
app.use('/api/v1/products', productsRoutes)
app.use('/api/v1/checkout', checkoutRoutes)

// Catch Express Errors
app.use((err, req, res, next) => {
  const { message = 'Something went wrong', statusCode = 500 } = err
  console.log(err)
  res.status(statusCode).send(message)
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

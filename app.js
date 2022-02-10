const express = require('express')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

const express = require('express')
const server = express()
const mongoose = require('mongoose')
require('dotenv').config()

server.use('/api/v1/portfolios', require('./routes/portfolios'))

const PORT = parseInt(process.env.PORT) || 3001

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log('Connect to MongoDB!')
    server.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  })
  .catch((error) => console.log(`${error} did not connect`))

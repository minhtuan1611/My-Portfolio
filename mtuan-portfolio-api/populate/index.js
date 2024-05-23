const express = require('express')
const mongoose = require('mongoose')
const fakeDB = require('./FakeDB')
require('dotenv').config()

const server = express() // Create an Express application
const PORT = process.env.PORT || 3000 // Define the port

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log('Connected to MongoDB!')

    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

    console.log('> Starting populating DB...')
    fakeDB.populate()
    console.log('> DB has been populated...')
  })
  .catch((error) => console.log(`${error} did not connect`))

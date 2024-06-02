const express = require('express')
const server = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors') // Import the cors middleware

require('dotenv').config()

// Middleware
server.use(bodyParser.json())
server.use(cors()) // Use cors middleware before defining routes

// Routes
server.use('/api/v1/portfolios', require('./routes/portfolios'))

// Environment Variables
const PORT = parseInt(process.env.PORT) || 3001

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log('Connected to MongoDB!')
    // Start Server
    server.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
  })
  .catch((error) => {
    console.error(`Failed to connect to MongoDB: ${error.message}`)
    // Exit process on MongoDB connection error
    process.exit(1)
  })

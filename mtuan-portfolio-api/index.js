const express = require('express')
const server = express()

server.use('/api/v1/portfolios', require('./routes/portfolios'))

const PORT = parseInt(process.env.PORT) || 3001
server.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log(`Server is running at port ${PORT}`)
})

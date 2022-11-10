const path = require('path')
const express = require('express')
require('dotenv').config()
require('colors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

const app = express()

connectDB()

// Init Middleware
app.use(express.json())

//Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to the DevConnector' })
  })
}

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`.yellow.bold)
)

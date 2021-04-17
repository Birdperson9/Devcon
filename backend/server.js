const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db.js')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => res.send('API Running'))

//Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

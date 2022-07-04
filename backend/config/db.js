const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })

    console.log('MongoDB Connected... ')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectDB

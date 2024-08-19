import mongoose from 'mongoose'
import 'dotenv/config'

export default async function dbConnection () {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('✅ Database connected successfully')
  } catch (err) {
    console.error(err)
  }
}

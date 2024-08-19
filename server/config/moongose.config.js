import mongoose from 'mongoose'
import 'dotenv/config'

export default async function dbConnection () {
  const uri = process.env.MONGO_URI
  if (!uri) {
    console.error('Error: MONGO_URI is not defined')
    return
  }

  try {
    await mongoose.connect(uri)
    console.log('✅ Database connected successfully')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

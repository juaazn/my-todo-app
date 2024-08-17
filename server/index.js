import express from 'express'
import 'dotenv/config'
import dbConnection from './config/moongose.config.js'
import task from './routes/task.js'

dbConnection()

const app = express()
app.use(express.json())

app.use('/task', task)

app.listen(process.env.PORT, () => {
  console.log(`💾 The server has started on port: http://localhost:${process.env.PORT}`)
})

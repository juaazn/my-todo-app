import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import dbConnection from '../config/moongose.config.js'
import task from '../routes/task.js'

const app = express()
app.use(cors())
app.use(express.json())

dbConnection()

app.use('/api/task', task)
app.use((req, res, next) => {
  res.status(404).send('Route no found 404')
})

app.listen(process.env.PORT, () => {
  console.log(`💾 The server has started on port: http://localhost:${process.env.PORT}`)
})

export default app

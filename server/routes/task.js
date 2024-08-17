import express from 'express'
import TaskControllers from '../controllers/TaskControllers.js'

const task = express.Router()

task.post('/create', TaskControllers.create)

export default task

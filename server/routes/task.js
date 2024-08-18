import express from 'express'
import TaskControllers from '../controllers/TaskControllers.js'

const task = express.Router()

task.post('/create', TaskControllers.create)
task.put('/update/:_id', TaskControllers.update)
task.delete('/delete/:id', TaskControllers.delete)
task.get('/', TaskControllers.getAll)

export default task

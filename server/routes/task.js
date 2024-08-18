import express from 'express'
import TaskControllers from '../controllers/TaskControllers.js'

const task = express.Router()

task.post('/create', TaskControllers.create)
task.post('/update-title/:_id')
task.put('/update/:_id', TaskControllers.update)
task.delete('/delete/:_id', TaskControllers.delete)
task.get('/', TaskControllers.getAll)
task.get('/:id', TaskControllers.getAll)

export default task

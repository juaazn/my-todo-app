import express from 'express'
import TaskControllers from '..'

const task = express.Router()

task.post('/create', TaskControllers.create)
task.put('/update-title/:_id', TaskControllers.updateTile)
task.put('/update-completed/:_id', TaskControllers.updateCompleted)
task.delete('/delete/:_id', TaskControllers.delete)
task.get('/', TaskControllers.getAll)
task.get('/:id', TaskControllers.getAll)

export default task

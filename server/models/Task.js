import mongoose from 'mongoose'

const TaskScheme = new mongoose.Schema(
  {
    
  }
)

const Task = mongoose.model('Task', TaskScheme)

export default Task

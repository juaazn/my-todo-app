import mongoose from 'mongoose'

const TaskScheme = new mongoose.Schema(
  {
    tile: {
      type: String,
      required: [true, 'Campo requerido']
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Tasks = mongoose.model('Task', TaskScheme)

export default Tasks

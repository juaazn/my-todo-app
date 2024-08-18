import Tasks  from '../models/Task.js'

const TaskControllers = {
  async create (req, res) {
    try {
      const task = await Tasks.create(req.body)
      res.status(200).send(task)
    } catch (error) {
      res.status(500).send({ message: 'Error server Something went wrong while creating the task', error })
    }
  },
  async update (req, res) {
    try {
      await Tasks.findByIdAndUpdate(req.params._id, req.body, { new: true })
      res.status(201).send({ message: 'Task update' })
    } catch (error) {
      res.status(500).send({ message: 'Error server Something went wrong while updating the task', error })
    }
  },
  async delete (req, res) {
    try {
      const _id = req.params._id

      await Tasks.findByIdAndDelete(_id)
      res.status(204).send({ message: 'task deleted' })
    } catch (error) {
      res.status(500).send({ message: 'Error server algo ha fallado al eliminar la tarea', error })
    }
  },
  async getAll (req, res) {
    try {
      const allTask = await Tasks.find()
      res.status(200).send(allTask)
    } catch (error) {
      res.status(500).send({ message: 'Error server algo ha fallado al obtener todas las tareas', error })
    }
  }
}

export default TaskControllers

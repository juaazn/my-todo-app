import Tasks  from '../models/Task.js'

const TaskControllers = {
  async create (req, res) {
    try {
      const task = await Tasks.create(req.body)
      res.status(201).send(task)
    } catch (error) {
      res.status(500).send({ message: 'Server error Something went wrong while creating the task', error })
    }
  },
  async updateCompleted (req, res) {
    try {
      const taskUpdateCompleted = await Tasks.findById(req.params._id)

      const task = await Tasks.findByIdAndUpdate(
        taskUpdateCompleted, 
        { completed: !taskUpdateCompleted.completed },
        { new: true }
      )

      if (!task) {
        return res
          .status(400)
          .send({ message: 'Task not found with that id' });
      }

      res.status(200).send({ message: 'Task completed', task })
    } catch (error) {
      res.status(500).send({ message: 'Server error Something went wrong while updating the task', error })
    }
  },
  async delete (req, res) {
    try {
      await Tasks.findByIdAndDelete(req.params._id)
      res.status(204).send({ message: 'task deleted' })
    } catch (error) {
      res.status(500).send({ message: 'Server error something went wrong while deleting the task', error })
    }
  },
  async getAll (req, res) {
    try {
      const allTask = await Tasks.find()
      res.status(200).send(allTask)
    } catch (error) {
      res.status(500).send({ message: 'Server error something went wrong while getting all tasks', error })
    }
  },
  async updateTile () {
    try {
      await Tasks.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true })
    } catch (error) {
      res.status(500).send({ message: 'Server error updateTitle', error })
    }
  },
  async getTaskForId (req, res) {
    try {
      const taskForId = await Tasks.findById(req.params._id)
      res.status(200).send({ message: taskForId })
    } catch (error) {
      res.status(500).send({ message: 'Server error updateTitle', error })
    }
  }
}

export default TaskControllers

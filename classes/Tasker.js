/**
 * параметр task = {
 *   name: name,
 *   func: функция,
 *   once: сколько раз должен запускатся задача,
 *   type: тип [default, async],
 * }
 */
import { TaskGroup } from './TaskGroup'

class Tasker {
  constructor () {
    this.tasksGroup = new Map()
  }

  taskGroupExists (name) {
    return this.tasksGroup.has(name)
  }

  addTaskGroup (taskGroupName, tasks) {
    this.tasksGroup.set(taskGroupName, new TaskGroup(taskGroupName, tasks))
  }

  getTaskGroup (taskGroupName) {
    if (this.taskGroupExists(taskGroupName)) {
      return this.tasksGroup.get(taskGroupName)
    }
    return false
  }

  runTasksByGroup (taskGroupName, tasks) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup.get(taskGroupName).runTasksParallel(tasks)
    }
  }

  runTasksByGroupParallelDebounce (taskGroupName, tasks) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup.get(taskGroupName).runTasksParallelDebounce(tasks)
    }
  }

  runTasksByGroupParallelWithPause (taskGroupName, tasks, pause) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup
        .get(taskGroupName)
        .runTasksParallelWithPause(tasks, pause)
    }
  }

  runTasksByGroupOneByOne (taskGroupName, tasks) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup.get(taskGroupName).runTasksOneByOne(tasks)
    }
  }

  runTasksByGroupOneByOneDebounce (taskGroupName, tasks) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup.get(taskGroupName).runTasksOneByOneDebounce(tasks)
    }
  }

  runTasksByGroupOneByOneWithPause (taskGroupName, tasks, pause) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup
        .get(taskGroupName)
        .runTasksOneByOneWithPause(tasks, pause)
    }
  }

  runAllTasksByGroupParallel (taskGroupName) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup.get(taskGroupName).runAllTasksParallel()
    }
  }

  runAllTasksByGroupOneByOne (taskGroupName) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup.get(taskGroupName).runAllTasksOneByOne()
    }
  }

  runAllTasksByGroupOneByOneWithPause (taskGroupName, pause) {
    if (this.taskGroupExists(taskGroupName)) {
      this.tasksGroup.get(taskGroupName).runAllTasksOneByOneWithPause(pause)
    }
  }

  static create (taskGroupName, tasks) {
    return new Tasker(taskGroupName, tasks)
  }

  clear () {
    this.tasksGroup.clear()
  }
}

export default Tasker

export { Tasker }

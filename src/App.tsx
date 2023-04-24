import * as React from 'react'
import {ChangeEvent, useState} from 'react'
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid';

export type changeStatusTasksType = 'all' | 'active' | 'completed'
export type tasksType = {
  id: string
  title: string
  isDone: boolean
}

function App() {
  const titleTask = 'What I must to learn'

  const [tasks, setTask] = useState<tasksType[]>([
    {id: v1(), title: 'HTML&CSS', isDone: false},
    {id: v1(), title: 'JS/ES6&TS', isDone: true},
    {id: v1(), title: 'REACT/REDUX', isDone: false},
    {id: v1(), title: 'ANGULAR', isDone: false},
  ])

  const [title, setTitle] = useState<string>('')

  const [deleteTasks, setDeleteTask] = useState([])

  const removeTask = (id: string) => {
    const removeTasks = tasks.filter(f => f.id === id)
    setTask(tasks.filter(f => f.id !== id))
    setDeleteTask([...deleteTasks, ...removeTasks])
  }

  const showDeleteTasks = () => {
    console.log(deleteTasks)
    setTask(deleteTasks)
  }

  const changeStatusTask = (currentStatusTask: boolean, id: string) => {
    setTask(tasks.map(t => t.id === id ? {...t, isDone: !currentStatusTask} : t))
  }

  const changedInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const addTask = (title: string) => {
    if (title.trim()) {
      const newTask = {
        id: v1(),
        title: title,
        isDone: false
      }
      setTask([newTask, ...tasks])
    }
    setTitle('')
  }

  const [filter, setFilter] = useState<changeStatusTasksType>('all')

  const changeStatusTasks = (tasks: tasksType[], filter: string) => {
    if (filter === 'active') {
      return tasks.filter(f => !f.isDone)
    }
    if (filter === 'completed') {
      return tasks.filter(f => f.isDone)
    }
    return tasks
  }

  const changedFilter = (filterValue: changeStatusTasksType) => {
    setFilter(filterValue)
  }

  const ar = changeStatusTasks(tasks, filter)

  const deleteAllTasks = () => {
    setTask([])
  }

  return (
    <div className="App">
      <TodoList
        title={titleTask}
        input={title}
        tasks={ar}
        setTitle={setTitle}
        addTask={addTask}
        removeTask={removeTask}
        changeStatusTask={changeStatusTask}
        changedInput={changedInput}
        changedFilter={changedFilter}
        deleteAllTasks={deleteAllTasks}
        showDeleteTasks={showDeleteTasks}
      />
    </div>
  );
}

export default App;
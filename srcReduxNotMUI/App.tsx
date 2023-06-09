import * as React from 'react'
import {useReducer} from 'react'
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid';
import {
  addTaskAC,
  changeStatusTaskAC,
  removeTaskAC,
  tasksReducer,
  updateTitleSpaAC
} from './Reducers/tasksReducer';
import SuperInput from './SuperInput';
import {
  addTodolistAC,
  changeFilterAC,
  changeTitleAC,
  removeTodolistAC,
  todolistReducer
} from './Reducers/todolistReducer';

export type ChangeStatusTasksType = 'all' | 'active' | 'completed'

export type taskType = {
  id: string
  title: string
  isDone: boolean
}

export type TodolistsType = {
  id: string
  title: string
  filter: ChangeStatusTasksType
}

export type tasksType = {
  [key: string]: Array<taskType>
}

function App() {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let [todolists, dispatchTodolist] = useReducer(todolistReducer, [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]);

  let [tasks, dispatchTasks] = useReducer(tasksReducer,{
    [todolistId1]: [
      {id: v1(), title: 'HTML&CSS', isDone: true},
      {id: v1(), title: 'React', isDone: false},
      {id: v1(), title: 'SCSS', isDone: true},
      {id: v1(), title: 'Angular', isDone: false},
      {id: v1(), title: 'JS', isDone: true}
    ],
    [todolistId2]: [
      {id: v1(), title: 'Milk', isDone: true},
      {id: v1(), title: 'Bread', isDone: true},
      {id: v1(), title: 'Pee', isDone: false},
      {id: v1(), title: 'Cucumber', isDone: false},
      {id: v1(), title: 'Butter', isDone: true},
      {id: v1(), title: 'Chocolate', isDone: true}
    ]
  });

  const addTask = (todolistId: string, title: string) => {
    dispatchTasks(addTaskAC(todolistId, title))
  }

  const removeTask = (todolistId: string, taskId: string) => {
    dispatchTasks(removeTaskAC(todolistId, taskId))
  }

  const changeStatusTask = (todolistId: string, taskId: string, statusTask: boolean) => {
    dispatchTasks(changeStatusTaskAC(todolistId, taskId, statusTask))
  }

  const updateTitleSpan = (todolistId: string, taskId: string, title: string) => {
    dispatchTasks(updateTitleSpaAC(todolistId, taskId, title))
  }

  ////////////// For todolist
  const changedFilter = (todolistId: string, filterValue: ChangeStatusTasksType) => {
    dispatchTodolist(changeFilterAC(todolistId, filterValue))
  }

  const changeTitleTodoList = (todolistId: string, title: string) => {
    dispatchTodolist(changeTitleAC(todolistId, title))
  }

  const removeTodolist = (todolistId: string) => {
    dispatchTodolist(removeTodolistAC(todolistId))
    dispatchTasks(removeTodolistAC(todolistId))
  }

  const addTodolist = (title: string) => {
    let todolistId = v1()
    const action = addTodolistAC(todolistId, title)
    dispatchTodolist(action)
    dispatchTasks(action)
  }
  return (
    <div className="App">

      <SuperInput callback={(title) => {
        addTodolist(title)
      }}/>

      {todolists.map(todolist => {

        let allTask = tasks[todolist.id]
        let taskForTodolist = allTask

        if (todolist.filter === 'active') {
          taskForTodolist = allTask.filter(task => !task.isDone)
        }

        if (todolist.filter === 'completed') {
          taskForTodolist = allTask.filter(task => task.isDone)
        }

        return (<TodoList
          key={todolist.id}
          titleTodoList={todolist.title}
          titleFilter={todolist.filter}
          todolistId={todolist.id}
          task={taskForTodolist}
          addTask={addTask}
          removeTask={removeTask}
          changeStatusTask={changeStatusTask}
          changeTitleSpan={updateTitleSpan}
          changedFilter={changedFilter}
          changeTitleTodoList={changeTitleTodoList}
          removeTodolist={removeTodolist}

        />)
        }
      )}
    </div>
  );
}

export default App;
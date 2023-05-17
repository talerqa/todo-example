import * as React from 'react'
import {useReducer, useState} from 'react'
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid';
import {addTaskAC, tasksReducer} from './Reducers/tasksReducer';

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

  let [todolists, setTodolist] = useState<Array<TodolistsType>>([
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
      // setTasks({
      //   ...tasks,
      //   [todolistId]: [...tasks[todolistId].filter(fl => fl.id !== taskId)]
      // })
  }

  const changeStatusTask = (todolistId: string, taskId: string, statusTask: boolean) => {
    // setTasks({
    //   ...tasks,
    //   [todolistId]: [...tasks[todolistId].map(m => m.id === taskId
    //     ? {...m, isDone: !statusTask} : m)]
    // })
  }


  const changedFilter = (todolistId: string, filterValue: ChangeStatusTasksType) => {
    // setTodolist(todolists.map(todolist => todolist.id === todolistId ? {...todolist, filter: filterValue} : todolist))
  }

  const updateTitleSpan = (todolistId: string, taskId: string, title: string) => {
    // setTasks({
    //   ...tasks,
    //   [todolistId]: tasks[todolistId].map(task => task.id === taskId
    //     ? {...task, title}
    //     : task)
    // })
  }

  return (
    <div className="App">
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
          />)
        }
      )}
    </div>
  );
}

export default App;
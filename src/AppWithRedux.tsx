import * as React from 'react'
import './App.css';
import {v1} from 'uuid';
import SuperInput from './SuperInput';
import {addTodolistAC, changeFilterAC, changeTitleAC, removeTodolistAC} from './Reducers/todolistReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './Reducers/store';
import {TodoListWithRedux} from './TodoListWithRedux';

export type ChangeStatusTasksType = 'all' | 'active' | 'completed'

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type TodolistsType = {
  id: string
  title: string
  filter: ChangeStatusTasksType
}

export type TasksType = {
  [key: string]: Array<TaskType>
}

function App() {

  const dispatch = useDispatch()
  const todolists = useSelector<AppRootStateType, Array<TodolistsType>>(state => state.todolists)


  ////////////// For todolist
  const changedFilter = (todolistId: string, filterValue: ChangeStatusTasksType) => {
    dispatch(changeFilterAC(todolistId, filterValue))
  }

  const changeTitleTodoList = (todolistId: string, title: string) => {
    dispatch(changeTitleAC(todolistId, title))
  }

  const removeTodolist = (todolistId: string) => {
    dispatch(removeTodolistAC(todolistId))
  }

  const addTodolist = (title: string) => {
    let todolistId = v1()
    const action = addTodolistAC(todolistId, title)
    dispatch(action)
  }
  return (
    <div className="App">

      <SuperInput callback={(title) => {
        addTodolist(title)
      }}/>

      {todolists.map(todolist => {

          return (<TodoListWithRedux
            key={todolist.id}
            titleTodoList={todolist.title}
            titleFilter={todolist.filter}
            todolistId={todolist.id}
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
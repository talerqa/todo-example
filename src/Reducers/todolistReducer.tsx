import {ChangeStatusTasksType, TodolistsType} from '../App';
import * as React from 'react'

export const todolistReducer = (state: TodolistsType[], action: CommonType): TodolistsType[] => {
  switch (action.type) {
    case 'ADD-TODOLIST' : {
      let newTodoList: TodolistsType = {id: action.payload.todolistId, title: action.payload.title, filter: 'all'}
      return [newTodoList, ...state]
    }

    case 'REMOVE-TODOLIST' : {
      return state.filter(todolist => todolist.id !== action.payload.todolistId)
    }

    case 'CHANGE-TITLE': {
      return state.map(todolist => todolist.id === action.payload.todolistId
        ? {...todolist, title: action.payload.title}
        : todolist)
    }

    case 'CHANGE-FILTER': {
      return state.map(todolist => todolist.id === action.payload.todolistId
        ? {...todolist, filter: action.payload.filterValue} : todolist)
    }

    default:
      return state
  }
}

type CommonType = AddTaskACType | ChangeTitleACType | ChangeFilterACType | RemoveTodolistACType
type AddTaskACType = ReturnType<typeof addTodolistAC>
type ChangeTitleACType = ReturnType<typeof changeTitleAC>
type ChangeFilterACType = ReturnType<typeof changeFilterAC>
type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>

export const addTodolistAC = (todolistId: string, title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: {
      todolistId,
      title
    }
  } as const
}

export const removeTodolistAC = (todolistId: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      todolistId,
    }
  } as const
}

export const changeTitleAC = (todolistId: string, title: string) => {
  return {
    type: 'CHANGE-TITLE',
    payload: {
      todolistId,
      title
    }
  } as const
}

export const changeFilterAC = (todolistId: string, filterValue: ChangeStatusTasksType)  => {
  return {
    type: 'CHANGE-FILTER',
    payload: {
      todolistId,
      filterValue
    }
  } as const
}






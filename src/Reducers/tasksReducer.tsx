import {tasksType} from '../App';
import * as React from 'react'
import {v1} from 'uuid';

export const tasksReducer = (state: tasksType, action: CommonType) => {
  switch (action.type) {
    case 'ADD-TASK' : {

      return {
         ...state,
         [action.payload.todolistId]: [{id: v1(), title: action.payload.title, isDone: false},...state[action.payload.todolistId]]
       }
    }
    default:
      return state
  }
}

type CommonType = AddTaskACType

type AddTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (todolistId: string, title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {
      todolistId,
      title
    }
  } as const
}
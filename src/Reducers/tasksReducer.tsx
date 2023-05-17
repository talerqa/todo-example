import {tasksType} from '../App';
import * as React from 'react'
import {v1} from 'uuid';

export const tasksReducer = (state: tasksType, action: CommonType) => {
  switch (action.type) {
    case 'ADD-TASK' : {
      return {
        ...state,
        [action.payload.todolistId]: [{
          id: v1(),
          title: action.payload.title,
          isDone: false
        }, ...state[action.payload.todolistId]]
      }
    }

    case 'REMOVE-TASK': {
      return {
        ...state,
        [action.payload.todolistId]: [...state[action.payload.todolistId].filter(fl => fl.id !== action.payload.taskId)]
      }
    }

    case 'CHANGE-TASK': {
      return {
        ...state,
        [action.payload.todolistId]: [...state[action.payload.todolistId].map(m => m.id === action.payload.taskId
          ? {...m, isDone: !action.payload.statusTask} : m)]
      }
    }

    case 'UPDATE-TITLE-SPAN': {
      return {
        ...state,
        [action.payload.todolistId]: state[action.payload.todolistId].map(task => task.id === action.payload.taskId
          ? {...task, title: action.payload.title}
          : task)
      }
    }

    default:
      return state
  }
}

type CommonType = AddTaskACType | RemoveTaskACType | ChangeStatusTaskType | UpdateTitleSpanType

type AddTaskACType = ReturnType<typeof addTaskAC>
type RemoveTaskACType = ReturnType<typeof removeTaskAC>
type ChangeStatusTaskType = ReturnType<typeof changeStatusTaskAC>
type UpdateTitleSpanType = ReturnType<typeof updateTitleSpaAC>

export const addTaskAC = (todolistId: string, title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {
      todolistId,
      title
    }
  } as const
}

export const removeTaskAC = (todolistId: string, taskId: string) => {
  return {
    type: 'REMOVE-TASK',
    payload: {
      todolistId,
      taskId
    }
  } as const
}

export const changeStatusTaskAC = (todolistId: string, taskId: string, statusTask: boolean) => {
  return {
    type: 'CHANGE-TASK',
    payload: {
      todolistId,
      taskId,
      statusTask
    }
  } as const
}

export const updateTitleSpaAC = (todolistId: string, taskId: string, title: string) => {
  return {
    type: 'UPDATE-TITLE-SPAN',
    payload: {
      todolistId,
      taskId,
      title
    }
  } as const
}


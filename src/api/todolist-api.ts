import axios from 'axios';

export type TodolistType = {
  id: string
  addedDate: string
  order: number
  title: string
}
export type TodolistDomainType = TodolistType & {
  filter: string
}

export type CreateTodolistType<T = { item: TodolistType }> = {
  resultCode: number,
  message: string[]
  data: T
}

export type DeleteTodolistType<T = {}> = {
  resultCode: number,
  message: string[]
  data: T
}

export type UpdateTodolistType<T = {}> = {
  resultCode: number,
  message: string[]
  data: T
}

export type TaskType = {
  description: string
  title: string
  completed: boolean
  status: string
  priority: string
  startDate:string
  deadline: string
  id: string
  todoListId: string
  order: string
  addedDate: string
}


const settings = {
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true
}

const instance = axios.create(settings)

export const todolistApi = {
  getTodoLists() {
    return instance.get<TodolistType[]>('todo-lists', settings)
  },
  postTodoList(title: string) {
    return instance.post<CreateTodolistType>(`todo-lists/`, {title})
  },
  deleteTodolistTodoLists(todolistId: string) {
    return instance.delete<DeleteTodolistType>(`todo-lists/${todolistId}`)
  },
  updateTitleTodolistTodoLists(todolistId: string, title: string) {
    return instance.put<UpdateTodolistType>(`todo-lists/${todolistId}`, {title})
  },
  getTaskTodoLists(todolistId: string) {
    return instance.get<TaskType[]>(`todo-lists/${todolistId}/tasks`)
  },
  postTaskTodoLists(todolistId: string, title: string) {
    return instance.post(`todo-lists/${todolistId}/tasks`, {title})
  },
  deleteTaskTodoLists(todolistId: string, taskId: string) {
    return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
  },
  updateTitleTaskTodoLists(todolistId: string, taskId: string, title: string) {
    return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`)

  }
}
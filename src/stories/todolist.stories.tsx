import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {todolistApi} from '../api/todolist-api';

export default {title: 'getTodoLists'};

export const getTodoLists = () => {
  const [todolist, getTodolist]  = useState<any>(null)
  useEffect(()=> {

    todolistApi.getTodoLists()
      .then((res) => {
        getTodolist(res.data)
      })

  }, [])

  return (
    <div>
      {JSON.stringify(todolist  )}
    </div>
  )
}

export const postTodoList = () => {
  const [todolist, getTodolist] = useState<any>(null)

  const title = 'NewTodolist'

  useEffect(() => {

    todolistApi.postTodoList(title)
      .then((res) => {
        getTodolist(res.data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(todolist)}
    </div>
  )
}

export const deleteTodolistTodoLists = () => {

  const [todolist, getTodolist]  = useState<any>(null)

  const todolistId = '919b8011-b761-43c0-949f-4965e433596e'

  useEffect(()=>{
    todolistApi.deleteTodolistTodoLists(todolistId)
      .then((res) => {
        getTodolist(res.data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(todolist)}
    </div>
  )
}

export const updateTitleTodolistTodoLists = () => {

  const [todolist, getTodolist]  = useState<any>(null)

  const todolistId = 'ac07b531-f013-48fc-a22b-7e26896ec336'
  const title = 'I CANT FLY'

  useEffect(()=>{
    todolistApi.updateTitleTodolistTodoLists(todolistId, title)
      .then((res) => {
        getTodolist(res.data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(todolist)}
    </div>
  )
}

export const getTaskTodoLists = () => {
  const [todolist, getTodolist]  = useState<any>(null)

  const todolistId = 'ac07b531-f013-48fc-a22b-7e26896ec336'

  useEffect(()=> {

    todolistApi.getTaskTodoLists(todolistId)
      .then((res) => {
        getTodolist(res.data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(todolist)}
    </div>
  )
}

export const postTaskTodoLists = () => {
  const [todolist, getTodolist]  = useState<any>(null)

  const todolistId = 'ac07b531-f013-48fc-a22b-7e26896ec336'
  const title = 'ITS A JOKE'

  useEffect(()=> {

    todolistApi.postTaskTodoLists(todolistId, title)
      .then((res) => {
        getTodolist(res.data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(todolist)}
    </div>
  )
}

export const deleteTaskTodoLists = () => {
  const [todolist, getTodolist]  = useState<any>(null)

  const todolistId = 'ac07b531-f013-48fc-a22b-7e26896ec336'
  const taskId = '9fc84dc3-29a4-4e60-b2be-5f2e43afbf14'

  useEffect(()=>{

    todolistApi.deleteTaskTodoLists(todolistId, taskId)
      .then((res) => {
        getTodolist(res.data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(todolist)}
    </div>
  )
}

export const updateTitleTaskTodoLists = () => {
  const [todolist, getTodolist]  = useState<any>(null)

  const todolistId = 'ac07b531-f013-48fc-a22b-7e26896ec336'
  const taskId = 'c6fc97d6-789d-43c1-8418-98b3f1313e81'
  const title = 'React-Redux0111111111111111111111'

  useEffect(()=>{

    todolistApi.updateTitleTaskTodoLists(todolistId, taskId, title)
      .then((res) => {
        getTodolist(res.data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(todolist)}
    </div>
  )
}
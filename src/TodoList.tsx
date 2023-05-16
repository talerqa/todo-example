import {ChangeStatusTasksType, taskType} from './App';
import * as React from 'react';
import {ChangeEvent, FC, useState} from 'react';
import ButtonFilterStatus from './ButtonFilterStatus';

type TodoListType = {
  todolistId: string
  titleTodoList: string
  titleFilter: ChangeStatusTasksType
  task: taskType[]
  addTask: (todolistId: string, title: string) => void
  removeTask: (todolistId: string, taskId: string) => void
  changeStatusTask: (todolistId: string, taskId: string, statusTask: boolean) => void
  changedInput: (e: ChangeEvent<HTMLInputElement>) => void
  changedFilter: (todolistId: string, filter: ChangeStatusTasksType) => void
}


const TodoList: FC<TodoListType> = (props) => {
  const {
    todolistId,
    titleTodoList,
    titleFilter,
    task,
    addTask,
    removeTask,
    changeStatusTask,
    changedInput,
    changedFilter
  } = props

  const [title, setTitle] = useState('')

  const onChangeFilter = (todolistId: string, filter: ChangeStatusTasksType) => {
    changedFilter(todolistId, filter)
    console.log(todolistId, filter)
  }

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const addTaskHandler = (todolistId: string) => {
    addTask(todolistId, title)
  }

  const removeTaskHandler = (todolistId: string, taskId: string) => {
    removeTask(todolistId, taskId)
  }

  return (
    <div>
      <span>{titleTodoList}</span>
      <button>X</button>
      <ul>
        <input type={'text'} value={title} onChange={onChangeInput}/>
        <button onClick={()=> addTaskHandler(todolistId)}>+
        </button>
        {task.map(task => {
          return (<div key={task.id}
                       style={{display: 'flex'}}>
              <input type={'checkbox'}
                     checked={task.isDone}
                     onChange={() => {
                       changeStatusTask(todolistId, task.id, task.isDone)
                     }}
              />
              <li style={{listStyleType: 'none'}}>{task.title}</li>
              <button onClick={() => removeTaskHandler(todolistId, task.id)}>x
              </button>
            </div>
          )
        })
        }
      </ul>
      <ButtonFilterStatus
        filter={titleFilter}
        callback={(filter) => onChangeFilter(todolistId, filter)}/>

    </div>
  )
}

export default TodoList;
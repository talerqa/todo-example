import {ChangeStatusTasksType, taskType} from './App';
import * as React from 'react';
import {FC, useState} from 'react';
import ButtonFilterStatus from './ButtonFilterStatus';
import EditableSpan from './EditableSpan';
import SuperInput from './SuperInput';

type TodoListType = {
  todolistId: string
  titleTodoList: string
  titleFilter: ChangeStatusTasksType
  task: taskType[]
  addTask: (todolistId: string, title: string) => void
  removeTask: (todolistId: string, taskId: string) => void
  changeStatusTask: (todolistId: string, taskId: string, statusTask: boolean) => void
  changeTitleSpan: (todolistId: string, taskId: string, title: string) => void
  changedFilter: (todolistId: string, filter: ChangeStatusTasksType) => void
  changeTitleTodoList: (todolistId: string, title: string) => void
  removeTodolist: (todolistId: string) => void

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
    changeTitleSpan,
    changedFilter,
    changeTitleTodoList,
    removeTodolist,

  } = props

  const [title, setTitle] = useState('');

  const onChangeFilter = (todolistId: string, filter: ChangeStatusTasksType) => {
    changedFilter(todolistId, filter)
  }

  const onChangeInput = (title: string) => {
    setTitle(title)
  }

  const addTaskHandler = (todolistId: string, title: string) => {
    addTask(todolistId, title)
    setTitle('')
  }


  const removeTaskHandler = (todolistId: string, taskId: string) => {
    removeTask(todolistId, taskId)
  }

  const changeTitleSpanHandler = (todolistId: string, taskId: string, title: string) => {
    changeTitleSpan(todolistId, taskId, title)
  }

  const changeTitleTodolistHandler = (todolistId: string, title: string) => {
    changeTitleTodoList(todolistId, title)
  }

  const removeTodolistHandler = (todolistId: string) => {
    removeTodolist(todolistId)
  }

  return (
    <div>
      <EditableSpan title={titleTodoList} callback={(title) => changeTitleTodolistHandler(todolistId, title)}/>
      <button onClick={() => removeTodolistHandler(todolistId)}>X</button>
      <ul>
        {/*<input type={'text'} value={title} onChange={onChangeInput}/>*/}
        <SuperInput
          callback={(title) => addTaskHandler(todolistId, title)}/>

        {task.map(task => {
          return (
            <div key={task.id} style={{display: 'flex'}}>
              <input type={'checkbox'}
                     checked={task.isDone}
                     onChange={() => {
                       changeStatusTask(todolistId, task.id, task.isDone)
                     }}/>


              <EditableSpan
                title={task.title}
                callback={(title) => changeTitleSpanHandler(todolistId, task.id, title)}
              />

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
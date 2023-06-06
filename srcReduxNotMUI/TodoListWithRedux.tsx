import {ChangeStatusTasksType} from './App';
import * as React from 'react';
import {FC, useState} from 'react';
import ButtonFilterStatus from './ButtonFilterStatus';
import EditableSpan from './EditableSpan';
import SuperInput from './SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './Reducers/store';
import {addTaskAC, changeStatusTaskAC, removeTaskAC, updateTitleSpaAC} from './Reducers/tasksReducer';
import {TaskType} from './AppWithRedux';

type TodoListType = {
  todolistId: string
  titleTodoList: string
  titleFilter: ChangeStatusTasksType
  changedFilter: (todolistId: string, filter: ChangeStatusTasksType) => void
  changeTitleTodoList: (todolistId: string, title: string) => void
  removeTodolist: (todolistId: string) => void
}

export const TodoListWithRedux: FC<TodoListType> = (props) => {
  const {
    todolistId,
    titleTodoList,
    titleFilter,
    changedFilter,
    changeTitleTodoList,
    removeTodolist,
  } = props

  const [title, setTitle] = useState('');

  const dispatch = useDispatch()
  const tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[todolistId])

  const onChangeFilter = (todolistId: string, filter: ChangeStatusTasksType) => {
    changedFilter(todolistId, filter)
  }

  const addTaskHandler = (todolistId: string, title: string) => {
    dispatch(addTaskAC(todolistId, title))
  }

  const removeTaskHandler = (todolistId: string, taskId: string) => {
    dispatch(removeTaskAC(todolistId, taskId))
  }

  const changeTitleTodolistHandler = (todolistId: string, title: string) => {
    changeTitleTodoList(todolistId, title)
  }

  const removeTodolistHandler = (todolistId: string) => {
    removeTodolist(todolistId)
  }

  let allTask = tasks
  let taskForTodolist = allTask
  if (titleFilter === 'active') {
    taskForTodolist = allTask.filter(task => !task.isDone)
  }

  if (titleFilter === 'completed') {
    taskForTodolist = allTask.filter(task => task.isDone)
  }

  return (
    <div>
      <EditableSpan title={titleTodoList} callback={(title) => changeTitleTodolistHandler(todolistId, title)}/>
      <button onClick={() => removeTodolistHandler(todolistId)}>X</button>
      <ul>
        {/*<input type={'text'} value={title} onChange={onChangeInput}/>*/}
        <SuperInput
          callback={(title) => addTaskHandler(todolistId, title)}/>

        {taskForTodolist.map(task => {
          return (
            <div key={task.id} style={{display: 'flex'}}>
              <input type={'checkbox'}
                     checked={task.isDone}
                     onChange={() => {
                       dispatch(changeStatusTaskAC(todolistId, task.id, task.isDone))
                     }}/>

              <EditableSpan
                title={task.title}
                callback={(title) => dispatch(updateTitleSpaAC(todolistId, task.id, title))}
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


import {ChangeStatusTasksType, taskType} from './App';
import * as React from 'react';
import {ChangeEvent, FC} from 'react';
import ButtonFilterStatus from './ButtonFilterStatus';

type TodoListType = {
  todolistId: string
  titleTodoList: string
  titleFilter: ChangeStatusTasksType
  task: taskType[]
  addTask: (title: string) => void
  removeTask: (id: string) => void
  changeStatusTask: (currentStatusTask: boolean, id: string) => void
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


  const onChangeFilter = (todolistId: string, filter: ChangeStatusTasksType) => {
    changedFilter(todolistId, filter)
    console.log(todolistId, filter)
  }

  return (
    <div>
      <span>{titleTodoList}</span>
      <button>X</button>
      <ul>
        <input type={'text'}/>
        <button>+</button>
        {task.map(task => {
          return (<div key={task.id}
                       style={{display: 'flex'}}>
              <input type={'checkbox'}
                     checked={task.isDone}
                     onChange={() => {
                     }}
              />
              <li style={{listStyleType: 'none'}}>{task.title}</li>
            </div>
          )
        })
        }
      </ul>
      <ButtonFilterStatus
        filter={titleFilter}
        callback={(filter) => onChangeFilter(todolistId, filter)}/>


      {/*<button onClick={() => {*/}
      {/*  changedFilter('all', todolistId)*/}
      {/*}}>All tasks*/}
      {/*</button>*/}
      {/*<button onClick={() => {*/}
      {/*  changedFilter('completed', todolistId)*/}
      {/*}}>Completed*/}
      {/*</button>*/}
      {/*<button onClick={() => {*/}
      {/*  changedFilter('active', todolistId)*/}
      {/*}}>Active*/}
      {/*</button>*/}
    </div>
  )
}

export default TodoList;
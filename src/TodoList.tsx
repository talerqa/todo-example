import * as React from 'react'
import {ChangeEvent, KeyboardEvent} from 'react'
import {changeStatusTasksType, tasksType} from './App';

type TodoListType = {
  title: string
  tasks: tasksType[]
  addTask: (title: string) => void
  removeTask: (id: string) => void
  input: string
  setTitle: (title: string) => void
  changeStatusTask: (currentStatusTask: boolean, id: string) => void
  changedInput: (e: ChangeEvent<HTMLInputElement>) => void
  changedFilter: (filter: changeStatusTasksType) => void
  deleteAllTasks: () => void
  showDeleteTasks: () => void
}

const TodoList = (props: TodoListType) => {

  const pressKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter'
    && props.addTask(props.input.trim())
  }

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input
          onChange={props.changedInput}
          onKeyDown={pressKeyHandler}
          value={props.input}
        />
        <button
          onClick={() => {
            props.addTask(props.input.trim())
          }}
        >+
        </button>
      </div>
      {props.tasks.map(t => {
        return (<div>
          <ul>
            <li key={t.id} className={t.isDone && 'isDone'}>
              {t.title}
              <input
                onChange={() => {
                  props.changeStatusTask(t.isDone, t.id)
                }}
                type="checkbox"
                checked={t.isDone}/>
              <button
                onClick={() => {
                  props.removeTask(t.id)
                }}
              >х
              </button>
            </li>
          </ul>
        </div>)
      })}
      <button onClick={props.deleteAllTasks}
      >Delete All tasks
      </button>
      <div>
        <button onClick={() => {
          props.changedFilter('all')
        }}>All
        </button>
        <button onClick={() => {
          props.changedFilter('active')
        }}>Active
        </button>
        <button onClick={() => {
          props.changedFilter('completed')
        }}>Completed
        </button>
        <button onClick={props.showDeleteTasks}>
          Show delete task's
        </button>
      </div>
    </div>
  )
}

export default TodoList;
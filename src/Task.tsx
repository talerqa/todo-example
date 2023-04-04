import React from 'react';
import {dataType} from './App';

type TasksPropsType = {
  state: dataType
  removeTask: (id: number) => void
  statusTasks: (id: string) => void
}

const Tasks = (props: TasksPropsType) => {

  const listOfTask = props.state.map(task => {
    return <li>
      <input type="checkbox" checked={task.isDone}/>
      <span> {task.title} </span>
      <button onClick={() => {
        props.removeTask(task.taskId)
      }}>x
      </button>
    </li>
  })

  return (<div>
    <h1>What to do</h1>
    <ul>
      {listOfTask}
    </ul>
    <div>
      <button onClick={()=>{props.statusTasks('All')} }>All</button>
      <button onClick={()=>{props.statusTasks('Active')} }>Active</button>
      <button onClick={()=>{props.statusTasks('Completed')} }>Completed</button>
    </div>
  </div>)
}

export default Tasks;
import React from 'react';

type TaksPropsType = {
  state: any
  removeTask: any
}

const Tasks: React.FC<TaksPropsType> = (props) => {
  const listOfTasks = props.state.map((t: any) => {
    return <li>
      <input type="checkbox" checked={t.isDone}/>
      <span> {t.title} </span>
      <button onClick={() => {
        props.removeTask(t.taskId)
      }
      }>х
      </button>
    </li>
  })


  return (<div>
    <h1>What to do</h1>
    <ul>
      {listOfTasks}
    </ul>
    <div>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  </div>)
}

export default Tasks;
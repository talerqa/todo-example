import * as React from 'react';
import {ChangeStatusTasksType} from './App';

type ButtonFilterStatusPropsType = {
  filter: ChangeStatusTasksType
  callback: (filter: ChangeStatusTasksType) => void
}

type FilterDataType = {
  title: string
  filter: ChangeStatusTasksType
}

const ButtonFilterStatus = (props: ButtonFilterStatusPropsType) => {
  const filterData: FilterDataType[] = [
    {
      title: 'All tasks',
      filter: 'all'
    },
    {
      title: 'Active tasks',
      filter: 'active'
    },
    {
      title: 'Completed tasks',
      filter: 'completed'
    },
  ]

  return (
    <div>
      {filterData.map(data => {
        return (

            <button onClick={() => {
              props.callback(data.filter)
            }
            }>
              {data.title}
            </button>

        )
      })}

    </div>
  );
};

export default ButtonFilterStatus;
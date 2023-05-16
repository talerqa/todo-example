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
      {filterData.map(filter1 => {
        return (
          <div>
            <button onClick={() => {
              props.callback(filter1.filter)
            }
            }>
              {filter1.title}
            </button>
          </div>
        )
      })}

    </div>
  );
};

export default ButtonFilterStatus;
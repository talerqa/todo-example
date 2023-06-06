import * as React from 'react';
import {ChangeEvent, useState} from 'react';

type EditableSpanType = {
  title: string,
  callback: (title: string) => void
}

const EditableSpan = (props: EditableSpanType) => {

  const [newTitle, setNewTitle] = useState(props.title)
  const [active, setActive] = useState(true)

  const onChangeTitleSpan = (e: ChangeEvent<HTMLInputElement>) => {

    setNewTitle(e.currentTarget.value)
  }
  const onChangeStatusTitle = () => {
    setActive(!active)
    props.callback(newTitle)
  }
  return (
    <div>
      {active
        ? <li style={{listStyleType: 'none'}}
              onDoubleClick={onChangeStatusTitle}>
          {props.title}</li>
        : <input
          autoFocus
          type={'text'}
          value={newTitle}
          onChange={onChangeTitleSpan}
          onBlur={onChangeStatusTitle}
        />
      }
    </div>
  );
};

export default EditableSpan;
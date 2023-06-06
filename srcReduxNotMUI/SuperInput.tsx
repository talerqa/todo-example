import * as React from 'react'
import {ChangeEvent, useState} from 'react'

type OnChangeInputType = {
  callback: (title: string) => void
}

const SuperInput = (props: OnChangeInputType) => {

  const [title, setTitle] = useState('')

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }

  const addTaskHandler = (title: string) => {
    props.callback(title)
    setTitle('')
  }

  return (
    <div>
      <input type={'text'} value={title} onChange={onChangeInput}/>
      <button onClick={() => addTaskHandler(title)}>+</button>
    </div>
  );
};

export default SuperInput;
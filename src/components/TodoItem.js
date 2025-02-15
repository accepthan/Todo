import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';

function TodoItem({ id, done, text }) {
  return (
    <div className='TodoItemBlock'>
      <div className={done === true ? 'CheckCircle done' : 'CheckCircle'} done={done}>{done && <MdDone />}</div>
      <div className={done === true ? 'Text done' : 'Text'} done={done}>{text}</div>
      <div className='Remove'>
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
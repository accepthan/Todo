import React, { useState } from 'react';
import '../styles/css/Common.css';

import { MdAdd } from 'react-icons/md';

function TodoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <div className='InsertFormPositioner'>
          <form className='InsertForm'>
            <input className='Input' autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </form>
        </div>
      )}

      <button className={open === true ? 'CircleButton open' : 'CircleButton'} onClick={onToggle} open={open}>
        <MdAdd />
      </button>
    </>
  );
}

export default TodoCreate;
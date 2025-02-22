import React, { useState } from 'react';
import '../styles/css/Common.css';

import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

function TodoCreate() {
  const [open, setOpen] = useState(false);//TodoCreate 서만 사용되는 props
  const [value, setValue] = useState('');//TodoCreate 서만 사용되는 props

  const dispatch = useTodoDispatch();//context에서 가져온 행위
  const nextId = useTodoNextId();//context에서 가져온 다음 id

  const onToggle = () => setOpen(!open);//TodoCreate 서만 사용되는 props 변경
  const onChange = e => setValue(e.target.value);//TodoCreate 서만 사용되는 props 변경

  //Enter 시 실행
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    //context porps 변경 후 초기화 + 다음 nextId 세팅
    setValue('');
    setOpen(false);
    nextId.current += 1;//useRef > 리렌더링 되어도 유지됨 / current  > useRef 값 세팅
  };

  return (
    <>
      {open && (// 논리연산 && > true 인 경우 가장 오른쪽 값을 리턴
        <div className='InsertFormPositioner'>
          <form className='InsertForm' onSubmit={onSubmit}>
            <input 
              className='Input' 
              autoFocus 
              placeholder="할 일을 입력 후, Enter 를 누르세요" 
              onChange={onChange}
              value={value}
            />
          </form>
        </div>
      )}

      <button 
        className={open === true ? 'CircleButton open' : 'CircleButton'} 
        onClick={onToggle} 
        open={open}>
        <MdAdd />
      </button>
    </>
  );
}

export default React.memo(TodoCreate);
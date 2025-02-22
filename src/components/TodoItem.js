import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();//context > 행위만 가져다 씀
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <div className='TodoItemBlock'>
      <div 
        onClick={onToggle} 
        className={done === true ? 'CheckCircle done' : 'CheckCircle'} 
        done={done}>
        {done && <MdDone />}
      </div>
      <div className={done === true ? 'Text done' : 'Text'} done={done}>{text}</div>
      <div onClick={onRemove} className='Remove'>
        <MdDelete />
      </div>
    </div>
  );
}

/**
 * props가 변하지 않으면(이전 props와 동일하면) 인자로 넘긴 함수는 재실행되지 않고
 * 이전의 메모이즈된 결과를 반환한다 > onRemove, onToggle 시 context에 있는 props 변경된 TodoItem만 리렌더링 됨
 * HOC : 컴포넌트를 인자로 받아 새로운 컴포넌트롤 다시 return해주는 함수
 */
export default React.memo(TodoItem);
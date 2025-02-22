import React from 'react';
import '../styles/css/Common.css';
import { useTodoState } from '../TodoContext';

function TodoHead() {
  
  const todos = useTodoState();//context > props 만 가져다 사용
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <div className='TodoHeadBlock'>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </div>
  );
}

export default TodoHead;//context 에 선언된 props 는 바뀔때마다 렌더링 되야하므로 memo 사용 안됨
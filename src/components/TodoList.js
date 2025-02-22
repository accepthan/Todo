import React from 'react';
import '../styles/css/Common.css';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

function TodoList() {
  const todos = useTodoState();//context > props 만 가져다 사용

  return <div className='TodoListBlock'>
            {
              todos.map(todo => (//TodoItem에 값 전달
                <TodoItem 
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
                />
              ))
            }
        </div>;
}

export default TodoList;//context 에 선언된 props 는 바뀔때마다 렌더링 되야하므로 memo 사용 안됨
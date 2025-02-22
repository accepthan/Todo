import React from 'react';
import '../styles/css/Common.css';

function TodoTemplate({ children }) {//todo list 감싸는 용도로 사용
  return <div className='TodoTemplateBlock'>{children}</div>;
}

export default TodoTemplate;
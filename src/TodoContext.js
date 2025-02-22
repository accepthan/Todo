import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [];//초기값

//상태관리할 대상의 행위 정의 (행위 후 리턴)
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);//배열에 전달받은 값 추가 state 리턴
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );//state 순회하면서 id가 같은 경우 done 값 변경 순회종료시 state 리턴
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);//state에서 todo.id가 다른 값들만 뽑아서 state 리턴
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();//상태관리할 대상 Context 선언
const TodoDispatchContext = createContext();//행위 Context 선언
const TodoNextIdContext = createContext();//next key Context 선언

export function TodoProvider({ children }) {//Todo 기능 최상단에 선언 children : App > TodoProvider 하위에 선언된 요소들
  
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(0);//useRef 렌더링 이후에도 값 유지

  return (
    /** Context 에서 사용할 값 지정시 value에 설정 */
    <TodoStateContext.Provider value={state}>{/** TodoStateContext > state만 제공 */}
      <TodoDispatchContext.Provider value={dispatch}>{/** TodoDispatchContext > dispatch만 제공 */}
        <TodoNextIdContext.Provider value={nextId}>{/** TodoNextIdContext > nextId만 제공 */}
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {//TodoStateContext 를 반환하는 hook
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {//useTodoDispatch 를 반환하는 hook
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {//useTodoNextId 를 반환하는 hook
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
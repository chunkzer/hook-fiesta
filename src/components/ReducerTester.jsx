import React, { useState, useReducer } from 'react';

const initialState = {
  todos: [
    {
      id: 'a',
      task: 'Learn React',
      complete: true,
    },
    {
      id: 'b',
      task: 'Learn Firebase',
      complete: true,
    },
    {
      id: 'c',
      task: 'Learn GraphQL',
      complete: false,
    },
  ],
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'addTodo': {
      const complexTodo = {
        id: Math.random(),
        task: payload,
        complete: false,
      };
      return { todos: [...state.todos, complexTodo] };
    }
    case 'removeTodo': {
      const newTodos = state.todos.filter(todo => todo.id !== payload);
      return { todos: [...newTodos] };
    }
    default: return state;
  }
};

const ReducerTester = () => {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state: ', state);
  console.log('dis: ', dispatch);

  return (
    <div style={styles.container}>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <span onClick={() => dispatch({ type: 'removeTodo', payload: todo.id })}>❌</span>
          </li>
        ))}
      </ul>
      <div>
        <span>New Todo: </span>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <span onClick={() => dispatch({ type: 'addTodo', payload: inputValue })}>✅</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
};

export { ReducerTester };

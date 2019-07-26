import React, { useState } from 'react';

const initialTodos = [
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
];

const StateTester = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodo] = useState(initialTodos);

  const _addTodo = (todo) => {
    const complexTodo = {
      id: Math.random(),
      task: todo,
      complete: false,
    };
    setTodo([...todos, complexTodo]);
  };

  const _removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    return setTodo(newTodos);
  };


  return (
    <div style={styles.container}>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ marginRight: 3 }}>{todo.task}</span>
            <span onClick={() => _removeTodo(todo.id)}>❌</span>
          </li>
        ))}
      </ul>
      <div>
        <span>New Todo: </span>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <span onClick={() => _addTodo(inputValue)}>✅</span>
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

export { StateTester };

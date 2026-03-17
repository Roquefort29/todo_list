import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if(inputValue.trim() !== ''){
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('')
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  return (
    <div className="app">
      <h1>My To-Do List</h1>

      <div className="input-wrapper">
        <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick = {addTodo}>Add</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my_todos');
    return savedTodos ? JSON.parse(savedTodos) : []
  });
  const [inputValue, setInputValue] = useState('')

  useEffect(() =>{
    localStorage.setItem('my_todos', JSON.stringify(todos))
  })

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
    <div className="app" style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center'}}>
      <h1>My To-Do List</h1>

      <div className="input-wrapper">
        <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='What I need to do?' 
        />
        <button onClick = {addTodo}>Add</button>
      </div>

      <ul style={{ padding: 0, marginTop: '20px'}}>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
function TodoItem({ todo, deleteTodo, toggleTodo }){
    return (
        <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />

            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem
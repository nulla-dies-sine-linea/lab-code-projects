import React from 'react';
import ToDoList from './ToDo/ToDoList';

function App() {
	const [todos, setTodos] = React.useState([
		{ id: 1, completed: false, title: 'workout' },
		{ id: 2, completed: true, title: 'water flowers' },
		{ id: 3, completed: false, title: 'make lunch' },
	]);

	function toggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	}

	return (
		<div className='wrapper'>
			<h1>To Do:</h1>
			<ToDoList todos={todos} onToggle={toggleTodo} />
		</div>
	);
}

export default App;

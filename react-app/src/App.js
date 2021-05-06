import React, { useEffect } from 'react';
import TodoList from './ToDo/TodoList';
import Context from './context';
import Loader from './Loader';

const AddTodo = React.lazy(() => import('./ToDo/AddTodo'));

function App() {
	const [todos, setTodos] = React.useState([
		// { id: 1, completed: false, title: 'workout' },
		// { id: 2, completed: true, title: 'water flowers' },
		// { id: 3, completed: false, title: 'make lunch' },
	]);
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then((response) => response.json())
			.then((todos) => {
				setTimeout(() => {
					setTodos(todos);
					setLoading(false);
				}, 2000);
			});
	}, []);

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

	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	function addTodo(title) {
		setTodos(
			todos.concat([
				{
					title,
					id: Date.now(),
					completed: false,
				},
			])
		);
	}

	return (
		<Context.Provider value={{ removeTodo }}>
			<div className='wrapper'>
				<h1>To Do:</h1>
				<React.Suspense fallback=''>
					<AddTodo onCreate={addTodo}></AddTodo>
				</React.Suspense>

				{loading && <Loader />}
				{todos.length ? (
					<TodoList todos={todos} onToggle={toggleTodo} />
				) : loading ? null : (
					<p>No tasks</p>
				)}
			</div>
		</Context.Provider>
	);
}

export default App;

import React from 'react';
import ToDoList from './ToDo/ToDoList';

function App() {
	const todos = [
		{ id: 1, completed: false, title: 'workout' },
		{ id: 1, completed: false, title: 'water flowers' },
		{ id: 1, completed: false, title: 'make lunch' },
	];

	return (
		<div className='wrapper'>
			<h1>To Do:</h1>
			<ToDoList todos={todos} />
		</div>
	);
}

export default App;

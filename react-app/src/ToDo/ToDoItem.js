import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alighItems: 'center',
		padding: '.5rem 1rem',
		border: '1px solid #ccc',
		borderRadius: '4px',
		mardinButtom: '.5rem',
	},
	input: {
		marginRight: '1rem',
	},
};

function ToDoItem({ todo, index, onChange }) {
	const classes = [];

	if (todo.completed) {
		classes.push('done');
	}

	return (
		<li style={styles.li}>
			<span className={classes.join(' ')}>
				<input
					type='checkbox'
					checked={todo.completed}
					style={styles.input}
					onChange={() => onChange(todo.id)}
				/>
				<strong>{index + 1}</strong>
				&nbsp;
				{todo.title}
			</span>
			<button className='rm'>&times;</button>
		</li>
	);
}

ToDoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired,
};

export default ToDoItem;

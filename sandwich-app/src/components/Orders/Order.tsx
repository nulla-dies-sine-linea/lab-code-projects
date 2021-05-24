import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Sandwich, { SandwichIngredientType } from '../Sandwich/Sandwich';
import { StoreDispatchType } from '../../store';
import { deleteOrderAction, deleteOrderActionType } from '../../store/order';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: '20px',
		},
		amount: {
			marginTop: '10px',
		},
		deleteButton: {
			color: 'red',
			borderColor: 'red',
			marginTop: '10px',
		},
	})
);

interface IProps {
	orderID: string;
	ingredients: SandwichIngredientType[];
	amount: number;
	deleteOrder: deleteOrderActionType;
}

const Order = (props: IProps): JSX.Element => {
	const classes = useStyles();

	const { orderID, amount, ingredients, deleteOrder } = props;

	return (
		<div className={classes.root}>
			<Sandwich ingredients={ingredients} />

			<Typography
				className={classes.amount}
				variant='h6'
				component='span'
				color='secondary'
			>
				Amount: {amount}
			</Typography>

			<Button
				className={classes.deleteButton}
				variant='outlined'
				onClick={() => deleteOrder({ orderID })}
			>
				Delete
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch: StoreDispatchType) => {
	return {
		deleteOrder: ({ orderID }: { orderID: string }) =>
			dispatch(deleteOrderAction({ orderID })),
	};
};

export default connect(undefined, mapDispatchToProps)(Order);

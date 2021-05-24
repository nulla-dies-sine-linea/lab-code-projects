import { v4 } from 'uuid';
import { SandwichIngredientType } from '../components/Sandwich/Sandwich';

type ADD_ORDER = 'ADD_ORDER';
type DELETE_ORDER = 'DELETE_ORDER';
type RESET_ORDERS = 'RESET_ORDERS';

interface IAddOrderAction {
	type: ADD_ORDER;
	ingredients: SandwichIngredientType[];
	amount: number;
}

interface IDeleteOrderAction {
	type: DELETE_ORDER;
	orderID: string;
}

interface IResetOrdersAction {
	type: RESET_ORDERS;
}

type ActionTypes = IAddOrderAction | IDeleteOrderAction | IResetOrdersAction;

export type addOrderActionType = ({
	ingredients,
	amount,
}: {
	ingredients: SandwichIngredientType[];
	amount: number;
}) => IAddOrderAction;

export const addOrderAction: addOrderActionType = ({ ingredients, amount }) => {
	return {
		type: 'ADD_ORDER',
		ingredients,
		amount,
	};
};

export type deleteOrderActionType = ({
	orderID,
}: {
	orderID: string;
}) => IDeleteOrderAction;

export const deleteOrderAction: deleteOrderActionType = ({ orderID }) => {
	return {
		type: 'DELETE_ORDER',
		orderID,
	};
};

export type resetOrdersActionType = () => IResetOrdersAction;

export const resetOrdersAction: resetOrdersActionType = () => {
	return {
		type: 'RESET_ORDERS',
	};
};

export type OrdersStateType = {
	[orderID: string]: { ingredients: SandwichIngredientType[]; amount: number };
};
const initialState: OrdersStateType = {};

const reducer = (
	state = initialState,
	action: ActionTypes
): OrdersStateType => {
	switch (action.type) {
		case 'ADD_ORDER': {
			const newState = { ...state };

			newState[v4()] = {
				ingredients: action.ingredients,
				amount: action.amount,
			};

			return newState;
		}
		case 'DELETE_ORDER': {
			const newState = { ...state };
			delete newState[action.orderID];
			return newState;
		}
		case 'RESET_ORDERS': {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;

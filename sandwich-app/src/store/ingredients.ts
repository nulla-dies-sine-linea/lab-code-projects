import { SandwichIngredientType } from '../components/Sandwich/Sandwich';

type ADD_INGREDIENT = 'ADD_INGREDIENT';
type DELETE_INGREDIENT = 'DELETE_INGREDIENT';
type RESET_INGREDIENTS = 'RESET_INGREDIENTS';

interface IAddIngredientAction {
	type: ADD_INGREDIENT;
	ingredient: SandwichIngredientType;
}

interface IDeleteIngredientAction {
	type: DELETE_INGREDIENT;
	ingredientIndex: number;
}

interface IResetIngredientsAction {
	type: RESET_INGREDIENTS;
}

type ActionTypes =
	| IAddIngredientAction
	| IDeleteIngredientAction
	| IResetIngredientsAction;

export type addIngredientActionType = ({
	ingredient,
}: {
	ingredient: SandwichIngredientType;
}) => IAddIngredientAction;

export const addIngredientAction: addIngredientActionType = ({
	ingredient,
}) => {
	return {
		type: 'ADD_INGREDIENT',
		ingredient,
	};
};

export type deleteIngredientActionType = ({
	ingredientIndex,
}: {
	ingredientIndex: IDeleteIngredientAction['ingredientIndex'];
}) => IDeleteIngredientAction;

export const deleteIngredientAction: deleteIngredientActionType = ({
	ingredientIndex,
}) => {
	return {
		type: 'DELETE_INGREDIENT',
		ingredientIndex,
	};
};

export type resetIngredientsActionType = () => IResetIngredientsAction;

export const resetIngredientsAction: resetIngredientsActionType = () => {
	return {
		type: 'RESET_INGREDIENTS',
	};
};

export type IngredientsStateType = SandwichIngredientType[];
const initialState: IngredientsStateType = [];

const reducer = (
	state = initialState,
	action: ActionTypes
): SandwichIngredientType[] => {
	switch (action.type) {
		case 'ADD_INGREDIENT': {
			const newState = [...state];
			newState.unshift(action.ingredient);
			return newState;
		}
		case 'DELETE_INGREDIENT': {
			const newState = [...state];
			newState.splice(action.ingredientIndex, 1);
			return newState;
		}
		case 'RESET_INGREDIENTS': {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;

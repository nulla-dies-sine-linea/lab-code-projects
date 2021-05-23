import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SandwichBread from '../Sandwich/Ingredients/SandwichBread';
import SandwichBacon from '../Sandwich/Ingredients/SandwichBacon';
import SandwichCheese from '../Sandwich/Ingredients/SandwichCheese';
import SandwichCucumber from '../Sandwich/Ingredients/SandwichCucumber';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: '100%',
		},
	})
);

export type SandwichIngredientType = 'bacon' | 'cheese' | 'cucumber';

const ingredientsMap: { [key in SandwichIngredientType]: JSX.Element } = {
	bacon: <SandwichBacon />,
	cheese: <SandwichCheese />,
	cucumber: <SandwichCucumber />,
};

interface IProps {
	ingredients: SandwichIngredientType[];
	onIngredientClick?: (ingredientIndex: number) => void;
}

const Sandwich = (props: IProps): JSX.Element => {
	const classes = useStyles();

	const { ingredients, onIngredientClick = () => null } = props;

	const sandwichIngredients: JSX.Element[] = [];

	ingredients.forEach((ingredient, index) => {
		const ingredientComponent = (
			<div
				key={`${ingredient + index}`}
				onClick={() => onIngredientClick(index)}
			>
				{ingredientsMap[ingredient]}
			</div>
		);

		sandwichIngredients.push(ingredientComponent);
	});

	return (
		<div className={classes.root}>
			<SandwichBread />

			{sandwichIngredients.length > 0 ? (
				sandwichIngredients
			) : (
				<Typography color='primary' variant='h4' component='span'>
					No ingredients yet
				</Typography>
			)}

			<SandwichBread />
		</div>
	);
};

Sandwich.defaultProps = {
	onIngredientClick: () => null,
};

export default Sandwich;

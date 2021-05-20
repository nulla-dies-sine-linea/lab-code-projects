import React from 'react';
import { Switch, Route } from 'react-router-dom';
import homeRoutes from './home';
import basketRouter from './basket';

export interface IRouterObject {
	name: string;
	path: string;
	exact: boolean;
	RenderFn: () => JSX.Element;
}

export const allRoutes = [...homeRoutes, ...basketRouter];

const Routes = (): JSX.Element => {
	return (
		<Switch>
			{allRoutes.map(({ name, path, exact, RenderFn }) => (
				<Route
					exact={exact}
					path={path}
					key={name}
					render={() => <RenderFn />}
				/>
			))}

			<Route render={() => <h1>Not Found</h1>} />
		</Switch>
	);
};

export default Routes;

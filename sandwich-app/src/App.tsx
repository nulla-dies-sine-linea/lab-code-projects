import React, { useEffect } from 'react';
import Layout from './HOC/layout/layout';

const App = (): JSX.Element => {
	useEffect(() => {}, []);

	return (
		<div className='App'>
			<Layout>
				<h1>Content</h1>
			</Layout>
		</div>
	);
};

export default App;

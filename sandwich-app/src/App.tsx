import React, { useEffect } from 'react';
import Layout from './HOC/layout/layout';
import Routes from './routes/index';

const App = (): JSX.Element => {
	// useEffect(() => {}, []);

	return (
		<div className='App'>
			<Layout>{Routes()}</Layout>
		</div>
	);
};

export default App;

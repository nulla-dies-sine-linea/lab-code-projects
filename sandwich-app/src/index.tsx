import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#f58634', light: '#ffcc29' },
		secondary: { main: '#206a5d', light: '#81b214' },
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

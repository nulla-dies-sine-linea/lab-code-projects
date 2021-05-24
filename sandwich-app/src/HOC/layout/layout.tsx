import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import Footer from '../../components/Footer/Footer';
import constants from '../../common/constans';

interface Iprops {
	children: JSX.Element;
}

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '100vh',
		width: '100%',
	},
	content: {
		flex: '1',
		width: constants.CONTENT_WIDTH,
		margin: '0 auto',
	},
});

const Layout = (props: Iprops): JSX.Element => {
	const { children } = props;
	const classes = useStyles();
	// useEffect(() => {}, []);

	return (
		<div className={classes.root}>
			<NavigationHeader />

			<main className={classes.content}>{children}</main>

			<Footer />
		</div>
	);
};

export default Layout;

import React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
// import classes from '*.module.css';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.palette.secondary.main,
			color: 'white',
			padding: '10px',
		},
	})
);

const Footer = (): JSX.Element => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography>All Rights Reserved</Typography>
		</div>
	);
};

export default Footer;

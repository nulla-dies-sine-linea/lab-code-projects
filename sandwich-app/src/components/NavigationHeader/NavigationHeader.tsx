import React from 'react';
import { Button, createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { HomeOutlined, ShoppingBasketOutlined } from '@material-ui/icons';
// import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
import constants from '../../common/constans';
// import { StoreType } from '../../store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: theme.palette.primary.main,
			width: '100%',
		},
		content: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: constants.CONTENT_WIDTH,
			margin: '0 auto',
			padding: '10px 20px',
			boxSizing: 'border-box',
		},
	})
);

const NavigationHeader = (): JSX.Element => {
	const classes = useStyles();

	const theme = useTheme();

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<Button color='secondary' variant='contained'>
					<HomeOutlined style={{ color: theme.palette.primary.light }} />
				</Button>

				<Button color='secondary' variant='contained'>
					<ShoppingBasketOutlined
						style={{ color: theme.palette.primary.light }}
					/>
				</Button>
			</div>
		</div>
	);
};

export default NavigationHeader;

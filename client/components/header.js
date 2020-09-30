import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import { Grid, Tab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '3em',
    fontFamily: 'Merienda One',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3em',
    },
  },
  link: {
    fontFamily: 'Handlee',
    textTransform: 'none',
    fontSize: '1.2em',
    fontWeight: 600,
    background: '#FFCCE6',
    borderRadius: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  appbar: {
    background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 60%, #b2ff59 90%)',
    height: '5.5em',
    [theme.breakpoints.down('md')]: {
      height: '5em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '4.8em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3.5em',
    },
  },
  logo: {
    height: '8em',
    width: '8rem',
    [theme.breakpoints.down('md')]: {
      height: '7em',
      width: '7rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
      width: '5.5rem',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export default ({ currentUser }) => {
  const classes = useStyles();
  const theme = useTheme();

  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Button key={href} color="inherit" className={classes.link}>
          <Link underline="none" href={href}>
            <a className="padding: 0">{label}</a>
          </Link>
        </Button>
      );
    });

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link href="/">
            <a
              className="navbar-brand"
              style={{
                flexGrow: 1,
                fontSize: '3em',
                fontFamily: 'Merienda One',
                [theme.breakpoints.down('xs')]: {
                  fontSize: '1.3em',
                },
              }}
            >
              FriendlyTix
            </a>
          </Link>
          <Grid container direction="row" justify="flex-end">
            {links}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

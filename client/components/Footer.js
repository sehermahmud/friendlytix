import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 60%, #b2ff59 90%)',
    width: '100%',
    position: 'relative',
    height: '3em',
  },
  reservedText: {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.8em',
    fontFamily: 'Merienda One',
    marginTop: '29em',
    [theme.breakpoints.down('md')]: {
      marginTop: '48em',
      fontSize: '1.6em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '33em',
      fontSize: '1.6em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '26em',
      fontSize: '1.4em',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography className={classes.reservedText}>
        All right reserved by{' '}
        <Link href="#" color="secondary" underline="none">
          Seher
        </Link>
      </Typography>
    </footer>
  );
}

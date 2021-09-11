import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Button id='home' color='primary' variant='contained' onClick>Home</Button>
        </Link>
        <Link to={'/shop'} style={{ textDecoration: 'none' }}>
        <Button id='shop' color='primary' variant='contained' onClick>Shop</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );

}

export default Navbar

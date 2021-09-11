import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  grow: {
    flexGrow: 1,
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
        <Link to={'/camera'} style={{ textDecoration: 'none' }}>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
              <AddIcon />
          </Fab>
        </Link>
        <div className={classes.grow} />
        <Link to={'/shop'} style={{ textDecoration: 'none' }}>
          <Button id='shop' color='primary' variant='contained' onClick>Shop</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );

}

export default Navbar

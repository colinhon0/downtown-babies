import React from 'react'

import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Recycle</Typography>
        <Link to={'/shop'} style={{ textDecoration: 'none' }}>
        <Button id='shop' color='primary' variant='contained' onClick>Shop</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );

}

export default Navbar

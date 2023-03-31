import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../assets/images/monoma-logo.jpg'

import Menu from './Menu'

const Header = () => {
  return (
    <>
      <Box sx={styles.Box}>
        <AppBar position="fixed" sx={styles.AppBar}>
          <Toolbar variant="dense" sx={styles.Toolbar}>
            <Avatar alt="Logo Icon" src={Logo} sx={styles.Avatar} />
            <Menu />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

const styles = {
  Box: {
    flexGrow: 1
  },
  AppBar: {
    backgroundColor: '#47667b',
  },
  Toolbar: {
    minHeight: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Avatar: {
    width: '60px',
    height: '60px',
  }
}

export default Header
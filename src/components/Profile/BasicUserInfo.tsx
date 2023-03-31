import React from 'react'

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import basicInfo from '../../utils/userInfoMock.json'

import UserAvatar from '../../assets/images/user-avatar.jpg'

const BasicUserInfo = () => {
  const { basic_info: { name, email, category } } = basicInfo

  return (
    <Box sx={styles.Box}>
      <CssBaseline />
      <Avatar alt="User Avatar" src={UserAvatar} sx={styles.Avatar} />
      <Box sx={styles.UserContent}>
        <Typography component="h1" sx={styles.UserName} align='center'>
          {name}
        </Typography>
        <Typography component="h2" sx={styles.UserCategory} align='center'>
          {category}
        </Typography>
        <Typography component="p" sx={styles.UserEmail} align='center'>
          {email}
        </Typography>
      </Box>
    </Box>
  )
}

const styles = {
  Box: {
    background: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
    borderRadius: '8px',
    padding: '1em',
    width: '100%',
    boxSizing: 'border-box',
  },
  UserContent: {
    padding: '1em'
  },
  UserName: {
    fontSize: '35px',
    margin: '10px 0',
  },
  UserCategory: {
    fontSize: '25px',
    margin: '10px 0',
    color: '#47667b'
  },
  UserEmail: {
    textDecoration: 'underline'
  },
  Avatar: {
    margin: '0 auto',
    width: '100%',
    height: '100%',
    'img': {
      width: '100%',
      height: '100%'
    },
  }
}

export default BasicUserInfo
import React from 'react'

import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import BasicUserInfo from '../components/Profile/BasicUserInfo';
import PersonalUserInfo from '../components/Profile/PersonalUserInfo';

const Profile = () => {
  return (
    <Container component="main" fixed maxWidth={'lg'} sx={styles.Container}>
      <Box>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 4, md: 8 }}
        >
          <Grid item xs={8} sm={4} md={3}>
            <BasicUserInfo />
          </Grid>
          <Grid item xs={8} sm={4} md={5}>
            <PersonalUserInfo />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

const styles = {
  Title: {
    m: 0,
    fontWeight: '500',
    fontFamily: 'Nunito'
  },
  Container: {
    marginTop: '110px',
    paddingBottom: '60px'
  },
}

export default Profile
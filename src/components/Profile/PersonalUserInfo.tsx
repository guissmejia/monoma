import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import additionalInfo from '../../utils/userInfoMock.json'

const PersonalUserInfo = () => {
  const { additional_info: { age, birthday, zip_code, gender, address, phone, city, languages, other_activities, description } } = additionalInfo

  return (
    <Box sx={styles.Box}>
      <CssBaseline />
      <Box sx={styles.UserContent}>
        <Typography component="p" sx={styles.FieldName} align='justify'>
          Age:<Typography component="span">{age}</Typography>
        </Typography>
        <Typography component="p" sx={styles.FieldName} align='justify'>
          Birthday:<Typography component="span">{birthday}</Typography>
        </Typography>
        <Typography component="p" sx={styles.FieldName} align='justify'>
          Gender:<Typography component="span">{gender}</Typography>
        </Typography>
        <Typography component="p" sx={styles.FieldName} align='justify'>
          City:<Typography component="span">{city}</Typography>
        </Typography>
        <Typography component="p" sx={styles.FieldName} align='justify'>
          ZIP Code:<Typography component="span">{zip_code}</Typography>
        </Typography>
        <Typography component="p" sx={styles.FieldName} align='justify'>
          Address:<Typography component="span">{address}</Typography>
        </Typography>
        <Typography component="p" sx={styles.FieldName} align='justify'>
          Phone:<Typography component="span">{phone}</Typography>
        </Typography>
        <Typography component="p" sx={styles.FieldName} align='justify'>
          Languages:<Typography component="span">{languages}</Typography>
        </Typography>
        <Typography component="p" sx={[styles.FieldName, styles.Description]} align='justify'>
          Other activities:<Typography component="span">{other_activities}</Typography>
        </Typography>
        <Typography component="p" sx={[styles.FieldName, styles.Description]} align='justify'>
          Description:<Typography component="span">{description}</Typography>
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
    padding: '1em',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
    '@media (max-width: 575px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  },
  FieldName: {
    fontSize: '18px',
    fontWeight: '400',
    margin: '7px 5px',
    'span': {
      fontWeight: '300',
      fontSize: '16px',
      marginLeft: '5px'
    }
  },
  Description: {
    gridColumn: '1/3'
  }
}

export default PersonalUserInfo

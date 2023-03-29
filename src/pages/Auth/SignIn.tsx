import React, { useState } from 'react';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Snorlax from '../../assets/images/snorlax.png'

interface LoginForm {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required("Field required"),
  password: Yup.string().required("Field required"),
});

const SignIn: React.FC<{}> = () => {
  const [showPassword, setShowPassword] = useState(false)

  const onShowPassword = () => setShowPassword(!showPassword)

  const initialValues: LoginForm = {
    email: "",
    password: "",
  }

  return (
    <Container component="main" fixed maxWidth={false} disableGutters sx={styles.Container}>
      <Box sx={styles.Box}>
        <CssBaseline />
        <Box sx={styles.FormContainer}>
          <Avatar alt="Snorlax Icon" src={Snorlax} sx={styles.Avatar} />
          <Formik
            initialValues={initialValues}
            validateOnChange={false}
            validationSchema={validationSchema}
            onSubmit={(values) => {
            }}
          >
            {({ errors, values, touched, handleChange }) => (
              <Form style={{ position: 'absolute' }}>
                <Typography component="h1" variant="h5">
                  Hello Again!
                </Typography>
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? <FaEye onClick={onShowPassword} /> : <FaEyeSlash onClick={onShowPassword} />}
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={styles.Button}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
}

const styles = {
  Container: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    background: 'linear-gradient(130deg, #073942 0%, #4CE0D2 100%)',
    height: '100vh',
  },
  Box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  FormContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: '#ffffff',
    padding: '1em 2em',
    borderRadius: '8px',
    position: 'relative',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    justifyContent: 'center',
  },
  Avatar: {
    width: '100%',
    height: '100%',
    opacity: '0.1',
    borderRadius: 'none',
  },
  Button: {
    mt: 3, 
    mb: 2,
    textTransform: 'inherit',
    borderRadius: '4px',
    height: '48px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '25px',
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: '#a5c3a7',
    ':hover': {
      bgcolor: '#47667b', 
      color: 'white',
    },
  }
}

export default SignIn
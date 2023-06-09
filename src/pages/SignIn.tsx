import React, { useState, useReducer } from 'react';
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaEye, FaEyeSlash } from "react-icons/fa";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Snorlax from '../assets/images/snorlax.png'
import Pokemons from '../assets/images/pokemons.png'

import { LoginForm, FormValues } from '../models/LoginData';

import { login } from "../services/auth.service";
import { loginReducer, initialState } from "../store";
import { notify } from "../utils/utils";
import { Loader } from '../components/Loader';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required("Field required"),
  password: Yup.string().required("Field required"),
});

const SignIn: React.FC<{}> = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const onShowPassword = () => setShowPassword(!showPassword)

  const initialValues: LoginForm = {
    email: "",
    password: "",
  }

  const { isLoading, error } = state;

  const handleSubmit = async (values: FormValues) => {
    const { email, password } = values

    dispatch({ type: "login" });

    try {
      await login({ email, password });
      dispatch({ type: "success" });

      navigate('/dashboard')
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <>
      {error && notify('error', 'Wrong email or password')}
      <Container component="main" fixed maxWidth={false} disableGutters className='Login__view-root' sx={styles.Container}>
        <Box sx={styles.Box}>
          <CssBaseline />
          <Box sx={styles.FormContainer}>
            <Avatar alt="Snorlax Icon" src={Snorlax} sx={styles.Avatar} />
            <Formik
              initialValues={initialValues}
              validateOnChange={false}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleSubmit(values)
              }}
            >
              {({ errors, values, touched, handleChange }) => (
                <Form style={{ position: 'absolute', maxWidth: '85%' }}>
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
                    sx={styles.TextField}
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
                    sx={styles.TextField}
                  />
                  {isLoading ? <Loader /> : (
                    <Button
                      type="submit"
                      data-cy='sign-in'
                      fullWidth
                      variant="contained"
                      sx={styles.Button}
                      disabled={isLoading}
                    >
                      Sign In
                    </Button>
                  )}
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
        <Box>
          <Avatar alt="Pokemons Icon" src={Pokemons} sx={styles.Pokemons} />
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
}

const styles = {
  Container: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    background: 'linear-gradient(130deg, #607848 8%, #339999 100%)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  },
  Box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  FormContainer: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: '#ffffff',
    padding: '1em 2em',
    borderRadius: '8px',
    position: 'relative',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    justifyContent: 'center',
    '@media (max-width: 575px)': {
      background: 'transparent',
      boxShadow: 'none',
    }
  },
  Avatar: {
    width: '100%',
    height: '100%',
    opacity: '0.1',
    borderRadius: 'inherit'
  },
  Pokemons: {
    height: '100%',
    justifyContent: 'flex-end',
    borderRadius: 'inherit',
    position: 'absolute',
    alignItems: 'flex-end',
    width: '30%',
    right: '0',
    bottom: '0',
    'img': {
      width: '400px',
      height: 'auto',
    },
    '@media (max-width: 575px)': {
      display: 'none'
    },
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
  },
  TextField: {
    'div': {
      background: 'white'
    }

  }
}

export default SignIn
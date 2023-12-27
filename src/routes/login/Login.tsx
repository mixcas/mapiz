import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import firebase from '~/firebase';

const auth = getAuth(firebase);

const Login = () => {
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  console.log({ user, loading, error });

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    console.log({
      email,
      password,
    });

    if (
      email
      && password
      && typeof email === 'string' 
      && typeof password === 'string'
    ) {
      signInWithEmailAndPassword(email, password);
    }
  };

  useEffect(() => {
    if (user) {
      // TODO, add redirectUrl
      navigate('/admin');
    }
  }, [user, navigate]);

  return (
    <Container 
      component="main" 
      maxWidth="xs"
      sx={{
        marginTop: (theme) => theme.spacing(3),
        marginBottom: (theme) => theme.spacing(3),
      }}
    >
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          disabled={loading}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={loading}
        />
        <LoadingButton 
          loading={loading}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Entrar
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default Login;

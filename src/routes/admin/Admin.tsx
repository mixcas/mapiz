import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import FullScreenLoader from '~/components/FullScreenLoader';
import Sidebar from './components/Sidebar';

import firebase from '~/firebase';

// import './App.css'

const auth = getAuth(firebase);

const Admin = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  console.log(user);


  useEffect(() => {
    if (!loading && !user) {
      // TODO, add redirectUrl
      navigate('/login');
    }
  }, [user, loading]);

  if (loading || !user) {
    return <FullScreenLoader />
  }

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            MAPIZ
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Sidebar />
        <Outlet />
      </Container>
    </>
  )
};

export default Admin;

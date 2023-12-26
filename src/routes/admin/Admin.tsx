import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Sidebar from './components/Sidebar';

// import './App.css'

const Admin = () => {
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

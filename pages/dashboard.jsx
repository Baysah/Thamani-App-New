import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';
import DashboardTabs from '../components/siteParts/DashboardTabs'

const dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '80vh'}}>
      {user ? (
        <Box sx={{ width: '100%', minHeight: '90%' }}>
          <Typography variant="h3" sx={{ fontSize: '25px', color: 'primary' }}>
            Welcome to your dashboard{' '}
            <span sx={{ color: 'yesslo' }}>{user.email}</span>
          </Typography>
          <hr />
          <DashboardTabs />
        </Box>
      ) : (
        <Box>
          <Typography variant="h4">
            You do not have the permissions to view this page
          </Typography>
          <Typography variant="p">
            If you have an account, Please log in now to view your dashboard
          </Typography>
          <Link href="/login">
            <Button variant="contained">Log in</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default dashboard;

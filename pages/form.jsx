import { Container, Box, Typography, Button } from '@mui/material';
import FormStepper from '../components/formComponents/FormStepper';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
const form = () => {

    const [user, error] =useAuthState(auth)
  return (
    <Box sx={{ my: 4 }}>
        {user ? <FormStepper /> : (
            <Box>
                <Typography>You will in to login to fill out a form</Typography>
                <Link href='/login'>
                    <Button>Login</Button>
                </Link>
            </Box>
        ) }
      
    </Box>
  );
};


export default form;

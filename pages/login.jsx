import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const router = useRouter();
    const [user, error] = useAuthState(auth)

    const [err, setErr] = useState('');


    const defaultValues = {
        email: '',
        password: ''
    }
    const { handleSubmit, reset, setValue, control } = useForm({
      defaultValues,
    });

     const handleLogin = async (formData) => {
       const email = formData.email;
       const password = formData.password;
       signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           //redirect to dashboard
           router.push('/form');
           const successMessage = () => {
                <div>
                  <Typography
                    variant="p"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Log in Success
                  </Typography>
                  <Typography>You have logged in</Typography>
                </div>;
           }
           toast.success(successMessage, {
             position: toast.POSITION.TOP_CENTER,
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: 'light',
           });
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;

           const message = () => (
             <div>
               <Typography variant="p" color="red" sx={{fontWeight: 'bold'}}>An Error Occured!</Typography>
               <Typography>{errorMessage}</Typography>
             </div>
           );
           toast(message, {
             position: toast.POSITION.TOP_CENTER,
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: 'light',
           });
         });
     };

     console.log(err);
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper>
        <Box
          sx={{
            padding: '20px',
            borderRadius: '20px',
            border: 'none',
          }}
        >
          <Typography mb={2} variant="h4" color="primary" textAlign="center">
            Login
          </Typography>
          {err ? (
            <Typography variant="h6" color="red">
              {err}
            </Typography>
          ) : null}
          {user && (
            <Typography mb={2} variant="p" color="primary" textAlign="center">
              You are already Logged in
            </Typography>
          )}
          {!user && (
            <form onSubmit={handleSubmit(handleLogin)}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        type="email"
                        {...field}
                        label="Email "
                        fullWidth
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        helperText={error ? error.message : null}
                        type="password"
                        {...field}
                        label="Password "
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Box>
      </Paper>
      <ToastContainer />
    </Box>
  );
};

export default LogIn;

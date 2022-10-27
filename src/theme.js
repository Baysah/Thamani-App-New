import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const mainTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(65,117,127)',
    },
    secondary: {
      main: 'rgb(255,243,1)'
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(65,117,127)',
    },
    secondary: {
      main: 'rgb(255,243,1)'
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(65,117,127)',
    },
    secondary: {
      main: 'rgb(255,243,1)'
    },
    mode: 'dark',
  },
});


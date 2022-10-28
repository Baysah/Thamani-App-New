import { useState } from 'react';
import { css } from '@emotion/react';
import { lightTheme } from '../../src/theme';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.config';
import { useRouter } from 'next/router';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  styled,
  Container,
  Stack,
  Drawer,
} from '@mui/material';
import {
  Menu,
  Search,
  Person,
  ExitToApp,
  WbSunny,
  Brightness2,
  Close,
  Login,
  Logout
} from '@mui/icons-material';
import Link from 'next/link';

import { useTheme } from 'next-themes';
import Cookies from 'js-cookie';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
  { name: 'Form', link: '/form' },
];

const Navbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '3rem',
});

const MenuContainer = styled(Box)({
  display: 'flex',
  gap: '1.5rem',
});
const IconsContainer = styled(Stack)({});

const Header = () => {
    const router = useRouter();
    const [user] = useAuthState(auth);

  const { siteTheme, resolvedTheme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const sitename = `${process.env.NEXT_PUBLIC_SITE_NAME}`;

  const handleSignOut = () => {
    //Sign the user out
    signOut(auth);
    //Remove the loggedIn Cookie
    Cookies.remove('loggedIn');
    //Redirect user to the home lage
    router.push('/')
  };
  const handleSignIn = () => {
    router.push('/login')
  }
  return (
    <AppBar component="nav">
      <Navbar>
        <Typography variant="h6" component="div">
          <Link className="siteLogo" href="/">
            {sitename}
          </Link>
        </Typography>
        <MenuContainer sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          ))}
        </MenuContainer>
        <IconsContainer direction="row">
          <IconButton aria-label="user account" sx={{ color: 'white' }}>
            <Person />
          </IconButton>
          <IconButton
            onClick={() =>
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }
            aria-label="Change Theme"
            sx={{ color: 'white' }}
          >
            {resolvedTheme === 'light' ? <Brightness2 /> : <WbSunny />}
          </IconButton>
          {user && (
            <IconButton
              onClick={handleSignOut}
              aria-label="Sign Out"
              sx={{ color: 'white' }}
            >
              <Logout />
            </IconButton>
          )}
          {!user && (
            <IconButton
              onClick={handleSignIn}
              aria-label="Sign Out"
              sx={{ color: 'white' }}
            >
              <Login/>
            </IconButton>
          )}
        </IconsContainer>
        <IconButton
          onClick={toggleMobileMenu}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <Menu
            sx={{
              color: 'white',
            }}
          />
        </IconButton>
      </Navbar>
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '50%',
            backgroundColor: 'primary',
          },
        }}
      >
        <Stack
          padding={2}
          role="menu"
          sx={{ height: '100vh', backgroundColor: '#556cd6' }}
        >
          <Close
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              marginLeft: 'auto',
              marginRight: '1rem',
              marginTop: '.5rem',
              cursor: 'pointer',
              marginBottom: '1rem',
              cursor: 'pointer',
              color: 'white',
              border: '1px solid white',
              borderRadius: '10px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          />
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default Header;

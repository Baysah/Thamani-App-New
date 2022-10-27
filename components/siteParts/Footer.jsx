import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';

const Footer = () => {
    const sitename = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
  return (
    <Box>
      <Typography variant="body2" color="text" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="/">
          {sitename}
        </MuiLink>{' '}
        2000 - {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};

export default Footer;

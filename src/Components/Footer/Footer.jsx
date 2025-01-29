// export default function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  styled,
} from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import * as React from 'react';
// import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  padding: '64px 0 32px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const FooterLink = styled(Typography)({
  color: '#ffffff',
  cursor: 'pointer',
  marginBottom: '8px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#4dabf5',
  },
});

const SocialButton = styled(IconButton)({
  color: '#ffffff',
  margin: '0 8px',
  transition: 'transform 0.3s ease, color 0.3s ease',
  '&:hover': {
    color: '#4dabf5',
    transform: 'translateY(-3px)',
  },
});

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <StyledFooter component="footer">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box mb={3}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1687183564367-ba7a1ed75379?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Company Logo"
                  style={{ height: '40px', marginBottom: '16px' }}
                />

                <Box>
                  <SocialButton aria-label="Github">
                    <FaGithub />
                  </SocialButton>
                  <SocialButton aria-label="Twitter"></SocialButton>
                  <SocialButton aria-label="LinkedIn">
                    <FaLinkedin />
                  </SocialButton>
                  <SocialButton aria-label="Instagram"></SocialButton>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            mt={8}
            pt={3}
            borderTop={1}
            borderColor="rgba(255, 255, 255, 0.1)"
            textAlign="center"
          >
            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
              Copyright © {new Date().getFullYear()} Zdravka Goranova. All
              rights reserved.
            </Typography>
          </Box>
        </Container>
      </StyledFooter>

      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Github" icon={<FaGithub />} />
          <BottomNavigationAction label="Mail" icon={<RiMailSendLine />} />
          <BottomNavigationAction label="LinkedIn" icon={<FaLinkedin />} />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default Footer;


import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import {
  Box,
  Container,
  Typography,
  // IconButton,
  styled,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

const StyledFooter = styled(Box)(() => ({
  padding: '64px 0 32px 0',
  position: 'relative',
  overflow: 'hidden',
 
}));

// const SocialButton = styled(IconButton)({
//   margin: '0 8px',
//   transition: 'transform 0.3s ease, color 0.3s ease',
//   '&:hover': {
//     color: '#ffbf00',
//     transform: 'translateY(-3px)',
//   },
// });

const Footer = () => {
  // const [value, setValue] = React.useState(0);

   const { mode} = useContext(ThemeContext); 
  const isDarkMode = mode === 'dark';

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Box
          // display="grid"
          // gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
          // gap={2}
          display="flex"
          justifyContent="center"
        >
          {/* <Box display="flex" justifyContent="center">
            <SocialButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/ZdravkaGoranova"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialButton>

            <SocialButton
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/zdravka-goranova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialButton>
          </Box> */}

          <Box display="flex" justifyContent="center">
            <BottomNavigation
              showLabels
              // value={value}
              // onChange={(event, newValue) => setValue(newValue)}
              sx={{ background: 'none' }}
            >
              <BottomNavigationAction
                label="Github"
                icon={<FaGithub />}
                component="a"
                href="https://github.com/ZdravkaGoranova"
                target="_blank"
                rel="noopener noreferrer"
              />

              <BottomNavigationAction
                label="Mail"
                icon={<RiMailSendLine />}
                component="a"
                href="mailto:zdravka.p.goranova@gmail.com"
              />

              <BottomNavigationAction
                label="LinkedIn"
                icon={<FaLinkedin />}
                component="a"
                href="https://www.linkedin.com/in/zdravka-goranova/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </BottomNavigation>
          </Box>
        </Box>

        <Box
          mt={2}
          pt={2}
          borderTop={1}
          borderColor={
            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
          }
          textAlign="center"
        >
          <Typography
            variant="body2"
            color={
              isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
            }
            label="LinkedIn"
            icon={<FaLinkedin />}
            component="a"
            href="https://www.linkedin.com/in/zdravka-goranova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright © {new Date().getFullYear()} Zdravka Goranova. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

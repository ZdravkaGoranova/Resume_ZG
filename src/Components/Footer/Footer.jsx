import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import {
  Box,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

const Footer = () => {
  const { mode } = useContext(ThemeContext);
  const isDarkMode = mode === 'dark';

  return (
    <footer>
      <Box
        display="flex"
        flexDirection="column"
        gap="10px"
        justifyContent="center"
        mt={0}
        pt={0}
        borderTop={1}
        borderColor={
          isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
        textAlign="center"
      >
        <Box display="flex" justifyContent="center" paddingTop="10px">
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

        <Typography
          paddingBottom="20px"
          variant="body2"
          color={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
          label="LinkedIn"
          icon={<FaLinkedin />}
          // component="a"
          // href="https://www.linkedin.com/in/zdravka-goranova/"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Copyright © {new Date().getFullYear()} Zdravka Goranova. All rights
          reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;

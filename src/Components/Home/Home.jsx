import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home({ data }) {
  const { mode } = useContext(ThemeContext);
  const isDarkMode = mode === 'dark';
  const userData = data?.data?.[0] || {};

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: { xs: 'center', sm: 'left' },
        py: 2,
        px: 3,
      }}
    >
      <Avatar
        alt="Zdravka Goranova"
        src="/image-zdravka-goranova.png"
        sx={{
          width: 350,
          height: 350,
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          border: '3px solid #ffc134',
          mb: { xs: 2, sm: 0 },
          mr: { sm: 8 },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column' },
          gap: '20px',
          alignItems: 'right',
          justifyContent: 'center',
          textAlign: { xs: 'center', sm: 'left' },
          py: 2,
          px: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: isDarkMode ? 'white' : '#333',
            fontWeight: 'bold',
          }}
        >
          Hello, It&apos;s ME
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: isDarkMode ? 'white' : '#222',
            fontWeight: 'bold',
          }}
        >
          {userData?.name || 'Loading...'}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: isDarkMode ? 'white' : '#666',
            fontStyle: 'italic',
          }}
        >
          I&apos;m a{' '}
          <span style={{ color: '#ffc134' }}>
            {userData?.profession || 'Loading...'}
          </span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '600px',
            color: isDarkMode ? 'white' : '#555',
            mt: 1,
            textAlign: 'justify',
          }}
        >
          {userData?.principalInfo || 'Loading...'}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
          sx={{ mt: 3 }}
        >
          <Button
            variant="contained"
            endIcon={<SystemUpdateAltIcon />}
            href="/Zdravka_Goranova_CV_Resume.pdf"
            download="Zdravka_Goranova_CV_Resume.pdf"
            sx={{
              borderRadius: '20px',
              color: 'white',
              backgroundColor: '#ffc134',
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              '&:hover': { backgroundColor: '#272100' },
            }}
          >
            Download CV
          </Button>

          <Stack direction="row" spacing={2}>
            <IconButton
              href={userData?.contacts?.linkedin || '#'}
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                border: '2px solid #ffc134',
                color: '#ffc134',
                transition: 'all 0.3s ease',
                '&:hover': { backgroundColor: '#ffc134', color: '#fff' },
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>

            <IconButton
              href={userData?.contacts?.github || '#'}
              target="_blank"
              sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                border: '2px solid #ffc134',
                color: '#ffc134',
                transition: 'all 0.3s ease',
                '&:hover': { backgroundColor: '#ffc134', color: '#fff' },
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

Home.propTypes = {
  data: PropTypes.any,
};

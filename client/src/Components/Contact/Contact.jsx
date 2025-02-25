import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.jsx';

import Box from '@mui/material/Box';

import Link from '@mui/material/Link';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

export default function Contact({ data }) {
  const userData = data?.data?.[0] || {};
  const contacts = userData?.contacts || {};
  console.log(`contacts:`, contacts);

  const { mode } = useContext(ThemeContext);

  return (
    <>
      <Box
        mb={6}
        sx={{
          borderBottom: '3px solid #ffc134',
          display: 'inline-block',
          pb: 1,
        }}
      >
        <h1 style={{ color: mode === 'light' ? '#797979' : '#fff' }}>
          CONTACT<span style={{ color: '#ffc134' }}> INFORMATION</span>
        </h1>
      </Box>

      <Box sx={{ maxWidth: 400, mx: 'auto', p: 3, textAlign: 'left' }}>
        {/* Phone */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 179, 0, 0.1)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          <FaPhone style={{ marginRight: 8, color: '#ffc134' }} />
          <Typography variant="body1" color={mode === 'dark' ? '#fff' : '#000'}>
            {contacts.phone}
          </Typography>
        </Box>

        {/* Location */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 179, 0, 0.1)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          <FaMapMarkerAlt style={{ marginRight: 8, color: '#ffc134' }} />
          <Typography variant="body1" color={mode === 'dark' ? '#fff' : '#000'}>
            {contacts.location}
          </Typography>
        </Box>

        {/* GitHub */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 179, 0, 0.1)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          <FaGithub style={{ marginRight: 8, color: '#ffc134' }} />
          <Link
            href={contacts.github}
            target="_blank"
            rel="noopener"
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: '#ffc134',
              },
            }}
          >
            <Typography
              variant="body1"
              color={mode === 'dark' ? '#fff' : '#000'}
            >
              GitHub Profile
            </Typography>
          </Link>
        </Box>

        {/* LinkedIn */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 179, 0, 0.1)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          <FaLinkedin style={{ marginRight: 8, color: '#ffc134' }} />
          <Link
            href={contacts.linkedin}
            target="_blank"
            rel="noopener"
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: '#ffc134',
              },
            }}
          >
            <Typography
              variant="body1"
              color={mode === 'dark' ? '#fff' : '#000'}
            >
              LinkedIn Profile
            </Typography>
          </Link>
        </Box>

        {/* Email */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 179, 0, 0.1)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          <FaEnvelope style={{ marginRight: 8, color: '#ffc134' }} />
          <Link
            href={`mailto:${contacts.mail}`}
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: '#ffc134',
              },
            }}
          >
            <Typography
              variant="body1"
              color={mode === 'dark' ? '#fff' : '#000'}
            >
              {contacts.mail}
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}

Contact.propTypes = {
  data: PropTypes.any,
};

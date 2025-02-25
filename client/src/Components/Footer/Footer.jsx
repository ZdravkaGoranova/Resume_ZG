import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Link from '@mui/material/Link';

export default function Contact({ data }) {
  const userData = data?.data?.[0] || {};

  return (
    <>
      {/* Footer */}
      <Box
        sx={{
          bgcolor: '#ffc134', // златист фон на футъра
          color: '#333', // тъмен текст, за да има контраст
          textAlign: 'center',
          padding: '20px',
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        {/* Основният текст */}
        <Typography variant="body2" sx={{ color: '#333', mb: 2 }}>
          &copy; {new Date().getFullYear()} Zdravka Goranova. All rights
          reserved.
        </Typography>

        {/* Линковете */}
        <Box sx={{ mt: 1 }}>
          <Link
            href={userData?.contacts?.linkedin}
            target="_blank"
            sx={{
              color: '#333', // тъмен цвят на линковете
              mx: 2, // пространство между линковете
              textDecoration: 'none', // премахване на подчертаването по подразбиране
              '&:hover': {
                color: '#444', // леко тъмно сивкаво при задържане на мишката
              },
            }}
          >
            LinkedIn
          </Link>
          |
          <Link
            href={userData?.contacts?.github}
            target="_blank"
            sx={{
              color: '#333', // тъмен цвят на линковете
              mx: 2, // пространство между линковете
              textDecoration: 'none', // премахване на подчертаването по подразбиране
              '&:hover': {
                color: '#444', // леко тъмно сивкаво при задържане на мишката
              },
            }}
          >
            GitHub
          </Link>
          |
          <Link
            href={`mailto:${userData?.contacts?.mail}`}
            target="_blank"
            sx={{
              color: '#333', // тъмен цвят на линковете
              mx: 2, // пространство между линковете
              textDecoration: 'none', // премахване на подчертаването по подразбиране
              '&:hover': {
                color: '#444', // леко тъмно сивкаво при задържане на мишката
              },
            }}
          >
            Mail
          </Link>
        </Box>
      </Box>
    </>
  );
}

Contact.propTypes = {
  data: PropTypes.any,
};

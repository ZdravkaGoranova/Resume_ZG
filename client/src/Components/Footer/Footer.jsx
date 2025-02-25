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
          bgcolor: '#333',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Zdravka Goranova. All rights
          reserved.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Link
            href={userData?.contacts?.linkedin}
            target="_blank"
            sx={{ color: '#ffc134', mx: 1 }}
          >
            LinkedIn
          </Link>
          |
          <Link
            href={userData?.contacts?.github}
            target="_blank"
            sx={{ color: '#ffc134', mx: 1 }}
          >
            GitHub
          </Link>
          |
          <Link
            href={`mailto:${userData?.contacts?.mail}`}
            target="_blank"
            sx={{ color: '#ffc134', mx: 1 }}
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

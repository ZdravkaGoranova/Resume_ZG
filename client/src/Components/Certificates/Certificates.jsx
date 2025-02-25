import { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ThemeContext } from '../../ThemeContext.jsx';

function Certificates({ data }) {
  const { mode } = useContext(ThemeContext);
  const userData = data?.data?.[0] || {};
  const certificates = Array.isArray(userData?.certificates)
    ? userData.certificates
    : [];

  return (
    <Box>
      <Box
        mb={6}
        sx={{
          borderBottom: '3px solid #ffc134',
          display: 'inline-block',
          pb: 1,
        }}
      >
        <h1 style={{ color: mode === 'light' ? '#797979' : '#fff' }}>
          C<span style={{ color: '#ffc134' }}>ERTIFICATES</span>
        </h1>
      </Box>
      <Box sx={{ width: '100%', height: 'auto', overflowY: 'scroll' }}>
        <ImageList
          variant="masonry"
          cols={3}
          gap={8}
          sx={{
            '@media (max-width: 1200px)': { cols: 2 },
            '@media (max-width: 600px)': { cols: 1 },
          }}
        >
          {certificates.map((url, index) => (
            <ImageListItem
              key={index}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',

                '&:hover': {
                  filter: 'brightness(1.2) contrast(1.1)',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.4)',
                },
              }}
            >
              <img
                src={url}
                alt={`Certificate ${index + 1}`}
                loading="lazy"
                style={{
                  borderRadius: '10px',
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.4s ease-in-out',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Certificates;

Certificates.propTypes = {
  data: PropTypes.any,
};

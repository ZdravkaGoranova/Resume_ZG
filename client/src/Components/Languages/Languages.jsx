import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.jsx';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import PublicIcon from '@mui/icons-material/Public';

function Languages({ data }) {
  const userData = data?.data?.[0] || {};
  const { mode } = useContext(ThemeContext);
  const languages = userData?.languages || {};

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
        <Typography
          variant="h4"
          sx={{
            color: mode === 'light' ? '#797979' : '#fff',
            fontWeight: 'bold',
          }}
        >
          L<span style={{ color: '#ffc134' }}>ANGUAGES</span>
        </Typography>
      </Box>

      {Object.keys(languages).length > 0 ? (
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {Object.entries(languages).map(([language, proficiency]) => (
            <Card
              key={language}
              sx={{
                background:
                  mode === 'light'
                    ? 'linear-gradient(135deg, #ffffff, #f9f9f9)'
                    : 'linear-gradient(135deg, #1A2027, #2C3E50)',
                borderRadius: 4,
                boxShadow:
                  mode === 'light'
                    ? '0px 4px 10px rgba(0,0,0,0.1)'
                    : '0px 4px 15px rgba(255,255,255,0.1)',
                textAlign: 'center',
                padding: 2,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                },
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Avatar
                  sx={{ bgcolor: 'transparent', width: 56, height: 56, mb: 1 }}
                >
                  <PublicIcon sx={{ fontSize: 32, color: '#ffc134' }} />
                </Avatar>
                <Typography variant="h6" fontWeight="bold">
                  {language}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {proficiency}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : (
        <Typography variant="h6" color="text.secondary" textAlign="center">
          No languages found.
        </Typography>
      )}
    </>
  );
}

export default Languages;

Languages.propTypes = {
  data: PropTypes.any,
};

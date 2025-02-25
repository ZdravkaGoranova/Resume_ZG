import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ color: '#ffc134' }}
      >
        <Box mb={3} textAlign="center">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Russo One, sans-serif',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            L<span style={{ color: '#ffc134' }}>oading...</span>
          </Typography>
        </Box>
        <CircularProgress color="inherit" />
      </Stack>
    </>
  );
}

export default Loading;

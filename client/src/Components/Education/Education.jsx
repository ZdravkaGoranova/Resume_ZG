import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.jsx';

export default function Education({ data }) {
  const userData = data?.data?.[0] || {};
  const { mode } = useContext(ThemeContext);

  const education = Array.isArray(userData?.education)
    ? userData.education
    : [];

  const textColor = mode === 'light' ? '#797979' : '#fff';

  console.log('Education array:', education);

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
          E<span style={{ color: '#ffc134' }}>DUCATION</span>
        </h1>
      </Box>

      <Timeline position="alternate">
        {education.length > 0 ? (
          education.map(
            (education, index) =>
              education.name && (
                <TimelineItem
                  key={index}
                  sx={{
                    '&:hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    },
                  }}
                >
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    {education.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                      <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        color: '#ffc134',
                        fontFamily: 'Russo One, sans-serif',
                        fontWeight: 'bold',
                      }}
                    >
                      {education.name}
                    </Typography>
                    <Typography> {education.university}</Typography>
                    <Typography> {education.city}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ),
          )
        ) : (
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
              color: textColor,
            }}
          >
            No education found.
          </Typography>
        )}
      </Timeline>
    </>
  );
}

Education.propTypes = {
  data: PropTypes.any,
};

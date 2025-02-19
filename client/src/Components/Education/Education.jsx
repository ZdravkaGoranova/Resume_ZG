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
      <Box mb={3}>
        <h1>
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
                    sx={{
                      fontFamily: 'Russo One, sans-serif',
                      fontWeight: 'bold',
                      color: textColor,
                    }}
                    align="right"
                    variant="p"
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
                      variant="h5"
                      component="span"
                      sx={{
                        color: '#ffc134',
                        fontFamily: 'Russo One, sans-serif',
                        fontWeight: 'bold',
                      }}
                    >
                      {education.name}
                    </Typography>
                    <Typography variant="h6">{education.university}</Typography>
                    <Typography variant="h6">{education.city} </Typography>
                  </TimelineContent>
                </TimelineItem>
              ),
          )
        ) : (
          <h2>No education found.</h2>
        )}
      </Timeline>
    </>
  );
}

Education.propTypes = {
  data: PropTypes.any,
};

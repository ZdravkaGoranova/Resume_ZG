import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.jsx';

import WorkIcon from '@mui/icons-material/Work';

export default function Work({ data }) {
  const userData = data?.data?.[0] || {};
  const work = Array.isArray(userData?.work) ? userData.work : [];
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
          W<span style={{ color: '#ffc134' }}>ORK</span>
        </h1>
      </Box>

      <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
        {work.length > 0 ? (
          work.map((job, index) => (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  },
                }}
              >
                <TimelineDot color="primary" variant="outlined" sx={{ mr: 2 }}>
                  <WorkIcon />
                </TimelineDot>

                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: 'Russo One, sans-serif',
                        fontWeight: 'bold',
                        color: '#ffc134',
                      }}
                    >
                      {job.position}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 'bold', color: 'text.primary' }}
                      >
                        {job.organization}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.time} | {job.city}
                      </Typography>
                      <Typography variant="body2" mb={2}>
                        <strong>Responsibilities and Achievements:</strong>
                      </Typography>
                      {Array.isArray(
                        job['Responsibilities and Achievements:'],
                      ) &&
                        job['Responsibilities and Achievements:'].map(
                          (responsibility, idx) => (
                            <Typography variant="body2" key={idx}>
                              • {responsibility}
                            </Typography>
                          ),
                        )}
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index < work.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          ))
        ) : (
          <h2>No work experience found.</h2>
        )}
      </List>
    </>
  );
}

Work.propTypes = {
  data: PropTypes.any,
};

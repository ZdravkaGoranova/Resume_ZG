import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

// MUI Icons
import PsychologyIcon from '@mui/icons-material/Psychology';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ChatIcon from '@mui/icons-material/Chat';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const softSkillIcons = {
  'Logical and Algorithmic Thinking': (
    <PsychologyIcon sx={{ color: '#ffb300' }} />
  ),
  'Problem Solving': <LightbulbIcon sx={{ color: '#ffb300' }} />,
  'Communication skills': <ChatIcon sx={{ color: '#ffb300' }} />,
  'Self-motivated': <SelfImprovementIcon sx={{ color: '#ffb300' }} />,
  'Ability to quickly learn': <TipsAndUpdatesIcon sx={{ color: '#ffb300' }} />,
  'Attention to details': <VisibilityIcon sx={{ color: '#ffb300' }} />,
  Teamwork: <GroupsIcon sx={{ color: '#ffb300' }} />,
};

export default function Skills({ data }) {
  const userData = data?.data?.[0] || {};
  const softSkills = userData?.softSkills || [];
  const technicalSkills = userData?.technicalSkills?.[0] || {};

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
      <Box mb={3}>
        <h1>
          S<span style={{ color: '#ffc134' }}>kills</span>
        </h1>
      </Box>
      <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
        {/* Soft Skills */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#ffc134',
              mb: 2,
              fontFamily: 'Russo One, sans-serif',
              textAlign: 'center',
            }}
          >
            Soft Skills
          </Typography>
          <List sx={{ flexGrow: 1 }}>
            {softSkills.map((skill, index) => (
              <React.Fragment key={index}>
                <ListItem
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 179, 0, 0.3)',
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    },
                  }}
                >
                  <ListItemIcon>
                    {softSkillIcons[skill] || <PsychologyIcon />}
                  </ListItemIcon>
                  <ListItemText primary={skill} />
                </ListItem>
                {index < softSkills.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Grid>

        {/* Technical Skills */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#ffc134',
              mb: 2,
              fontFamily: 'Russo One, sans-serif',
              textAlign: 'center',
            }}
          >
            Technical Skills
          </Typography>
          <List sx={{ flexGrow: 1 }}>
            {Object.entries(technicalSkills).map(
              ([category, skills], index) => {
                const skillCategory = category.trim();
                const icon = {
                  'Programming Languages': (
                    <CodeIcon sx={{ color: '#ffb300' }} />
                  ),
                  ' Tools': <BuildIcon sx={{ color: '#ffb300' }} />,
                  'Version control systems': (
                    <GitHubIcon sx={{ color: '#ffb300' }} />
                  ),
                  Library: <LibraryBooksIcon sx={{ color: '#ffb300' }} />,
                  ' Databases': <StorageIcon sx={{ color: '#ffb300' }} />,
                  'Cloud Technologies': <CloudIcon sx={{ color: '#ffb300' }} />,
                }[skillCategory] || <BuildIcon sx={{ color: '#ffb300' }} />;

                return (
                  <React.Fragment key={index}>
                    <ListItem
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(255, 179, 0, 0.3)',
                          transform: 'scale(1.05)',
                          transition:
                            'transform 0.3s ease, box-shadow 0.3s ease',
                        },
                      }}
                    >
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText
                        primary={skillCategory}
                        secondary={
                          <Typography
                            component="span"
                            sx={{ whiteSpace: 'pre-line' }}
                          >
                            {skills}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < Object.keys(technicalSkills).length - 1 && (
                      <Divider />
                    )}
                  </React.Fragment>
                );
              },
            )}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

Skills.propTypes = {
  data: PropTypes.any,
};

import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.jsx';

export default function Projects({ data }) {
  const userData = data?.data?.[0] || {};
  const { mode } = useContext(ThemeContext);
  const projects = Array.isArray(userData?.projects) ? userData.projects : [];

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 4 }}
      >
        <Box
          mb={6}
          sx={{
            borderBottom: '3px solid #ffc134',
            display: 'inline-block',
            pb: 1,
          }}
        >
          <h1 style={{ color: mode === 'light' ? '#797979' : '#fff' }}>
            PERSONAL<span style={{ color: '#ffc134' }}> PROJECTS</span>
          </h1>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
          alignItems="stretch"
          marginBottom={1}
        >
          {projects.length > 0 ? (
            projects.map(
              (project, index) =>
                project.name && (
                  <Grid item xs={12} sm={4} md={4} key={index}>
                    <Paper elevation={3}>
                      <ProjectCard
                        name={project.name}
                        title={project.title}
                        linkGithub={project.linkGithub}
                        linkLive={project.linkLive}
                        image={project.image}
                        info={project.info}
                      />
                    </Paper>
                  </Grid>
                ),
            )
          ) : (
            <h2>No projects found.</h2>
          )}
        </Grid>
      </Box>
    </>
  );
}
Projects.propTypes = {
  data: PropTypes.any,
};

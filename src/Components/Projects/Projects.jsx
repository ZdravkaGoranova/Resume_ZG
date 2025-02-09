import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Projects({ data }) {
  const userData = data?.data?.[0] || {};

  const projects = Array.isArray(userData?.projects) ? userData.projects : [];

  console.log('Projects array:', projects);

  return (
    <>
      <h1>Projects</h1>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
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
                    />
                  </Paper>
                </Grid>
              ),
          )
        ) : (
          <p>No projects found.</p>
        )}
      </Grid>
    </>
  );
}
Projects.propTypes = {
  data: PropTypes.any,
};

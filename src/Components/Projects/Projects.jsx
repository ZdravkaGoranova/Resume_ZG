import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

export default function Projects({ data }) {
  const userData = data?.data?.[0] || {};

  const projects = Array.isArray(userData?.projects) ? userData.projects : [];

  console.log('Projects array:', projects);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box mb={3}>
          <h1>
            PERSONAL <span style={{ color: '#ffc134' }}>PROJECTS</span>
          </h1>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
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
            <p>No projects found.</p>
          )}
        </Grid>
      </Box>
    </>
  );
}
Projects.propTypes = {
  data: PropTypes.any,
};

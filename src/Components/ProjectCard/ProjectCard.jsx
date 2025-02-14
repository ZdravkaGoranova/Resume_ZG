import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';

import PropTypes from 'prop-types';

const ExpandMore = styled((props) => {
  const {  ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: (props) => (props.expand ? 'rotate(180deg)' : 'rotate(0deg)'),
}));

export default function ProjectCard({
  name,
  title,
  linkGithub,
  linkLive,
  image,
  info,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false); 
  };

  info = Array.isArray(info) ? info : [];

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Russo One, sans-serif',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '300px',
              '&:hover': {
                transform: 'scale(1.05)',
                color: '#ffc134',
              },
            }}
          >
            {name}
          </Typography>
        }
      />

      {isLoading && (
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#aaa',
            height: '194px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
          }}
        >
          Loading...
        </Typography>
      )}
      <CardMedia
        component="img"
        height="194"
        image={image || 'https://via.placeholder.com/345x194?text=No+Image'}
        alt={name}
        onLoad={handleImageLoad}
        onError={handleImageError}
        sx={{
          display: isLoading ? 'none' : 'block',
        }}
      />
      <CardContent>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
          component="div"
        >
          {info.length > 0 ? (
            <Grid container spacing={0}>
              {info.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ margin: 0, padding: 0 }}
                >
                  <ListItem sx={{ margin: 0, padding: 0 }}>
                    <ListItemIcon>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography>No info found.</Typography>
          )}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          href={linkGithub || '#'}
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            borderRadius: '50%',
            border: '2px solid #ffc134',
            color: '#ffc134',
            transition: 'all 0.3s ease',
            '&:hover': { backgroundColor: '#ffc134', color: '#fff' },
            marginRight: 1,
          }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>

        <IconButton
          href={linkLive || '#'}
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            borderRadius: '50%',
            border: '2px solid #ffc134',
            color: '#ffc134',
            transition: 'all 0.3s ease',
            '&:hover': { backgroundColor: '#ffc134', color: '#fff' },
          }}
        >
          <ShareIcon fontSize="small" />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{
            borderRadius: '50%',
            border: '2px solid #ffc134',
            color: '#ffc134',
            transition: 'all 0.3s ease',
            '&:hover': { backgroundColor: '#ffc134', color: '#fff' },
          }}
        >
          <ExpandMoreIcon fontSize="small" />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            sx={{
              marginBottom: 2,
              borderTop: '1px solid #FFD700',
              paddingTop: 2,
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkGithub: PropTypes.string,
  linkLive: PropTypes.string,
  image: PropTypes.string,
  info: PropTypes.arrayOf(PropTypes.string),
};

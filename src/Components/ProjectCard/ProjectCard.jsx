import * as React from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import GitHubIcon from '@mui/icons-material/GitHub';

import PropTypes from 'prop-types';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function ProjectCard({
  name,
  title,
  linkGithub,
  linkLive,
  image,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={name} />
        <CardMedia component="img" height="194" image={image} alt={name} />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {title}
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
            <Typography sx={{ marginBottom: 2 }}>{title}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.any,
  title: PropTypes.any,
  linkGithub: PropTypes.any,
  linkLive: PropTypes.any,
  image: PropTypes.any,
};

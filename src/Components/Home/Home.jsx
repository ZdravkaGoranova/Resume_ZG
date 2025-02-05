import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home({ data }) {
  const userData = data?.data?.[0] || {};

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="zdravka Goranova Image"
          src="/image-zdravka-goranova.png"
          sx={{ width: 156, height: 156 }}
        />
      </Stack>
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        {/* <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre> */}
      </div>

      <div>
        <h5>Hello, It&apos; s ME</h5>
        <h1>{userData?.name || 'Loading...'}</h1>
        <h2>
          I&apos;m a <span>{userData?.profession || 'Loading...'}</span>
        </h2>
        <p>{userData?.principalInfo || 'Loading...'}</p>
      </div>

      <Stack spacing={2} direction="row" textAlign="center">
        <Button
          href="/Zdravka_Goranova_CV_Resume.pdf"
          download="Zdravka_Goranova_CV_Resume.pdf"
        >
          Download CV
        </Button>

        <IconButton
          href={userData?.contacts?.linkedin || 'Loading...'}
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href={userData?.contacts?.github || 'Loading...'}
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Stack>
    </>
  );
}
Home.propTypes = {
  data: PropTypes.any,
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
);

const IconButton = styled(BaseButton)(
  ({ theme }) => `
  width: 48px; /* Прави бутона кръгъл */
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Заоблени ръбове */
  background-color: ${blue[500]};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
  }
`,
);

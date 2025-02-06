import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { Button as BaseButton, buttonClasses } from '@mui/base/Button';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

export default function Home({ data }) {
  const userData = data?.data?.[0] || {};

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="zdravka Goranova Image"
          src="/image-zdravka-goranova.png"
          sx={{
            width: 220,
            height: 220,
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            border: '3px solid #ffc134',
          }}
        />
      </Stack>

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

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
        textAlign="center"
        padding="50px"
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100%' }}
      >
        <Button
          variant="contained"
          endIcon={<SystemUpdateAltIcon />}
          href="/Zdravka_Goranova_CV_Resume.pdf"
          download="Zdravka_Goranova_CV_Resume.pdf"
          style={{
            borderRadius: '20px',
            color: 'white',
            transition: 'all 150ms ease',
            cursor: 'pointer',
            border: `1px solid ${yellow[700]}`,
            backgroundColor: yellow[500],
            padding: '9px 16px',
          }}
        >
          Download CV
        </Button>

        <IconButton
          href={userData?.contacts?.linkedin || 'Loading...'}
          rel="noopener noreferrer"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 150ms ease',
            cursor: 'pointer',
            border: `2px solid ${yellow[500]}`,
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href={userData?.contacts?.github || 'Loading...'}
          target="_blank"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 150ms ease',
            cursor: 'pointer',
            border: `2px solid ${yellow[500]}`,
          }}
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

const yellow = {
  200: '#ffe34d',
  300: '#ffdf33',
  400: '#ffdb1a',
  500: '#ffc134',
  600: '#ffd700',
  700: '#d8b600',
};

// const grey = {
//   50: '#F3F6F9',
//   100: '#E5EAF2',
//   200: '#DAE2ED',
//   300: '#C7D0DD',
//   400: '#B0B8C4',
//   500: '#9DA8B7',
//   600: '#6B7A90',
//   700: '#434D5B',
//   800: '#303740',
//   900: '#1C2025',
// };

// const Button = styled(BaseButton)(
//   ({ theme }) => `
//     endIcon={<SystemUpdateAltIcon />}
//   font-weight: 600;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   background-color: ${yellow[500]};
//   padding: 9px 16px;
//   border-radius:20px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   border: 1px solid ${yellow[700]};
//   box-shadow: 0 2px 1px ${
//     theme.palette.mode === 'dark'
//       ? 'rgba(0, 0, 0, 0.5)'
//       : 'rgba(45, 45, 60, 0.2)'
//   }, inset 0 1.5px 1px ${yellow[400]}, inset 0 -2px 1px ${yellow[600]};

//   &:hover {
//     background-color: ${yellow[600]};
//   }

//   &.${buttonClasses.active} {
//     background-color: ${yellow[700]};
//     box-shadow: none;
//     transform: scale(0.99);
//   }

//   &.${buttonClasses.focusVisible} {
//     box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? yellow[300] : yellow[200]};
//     outline: none;
//   }
//   `,
// );

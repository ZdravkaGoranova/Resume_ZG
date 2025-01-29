import '../../App.css';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

const NAVIGATION = [
  { segment: 'home', title: 'Home', icon: <HomeRoundedIcon /> },
  { segment: 'about', title: 'About', icon: <PersonRoundedIcon /> },
  { segment: 'education', title: 'Education', icon: <SchoolRoundedIcon /> },
  { segment: 'skills', title: 'Skills', icon: <SettingsRoundedIcon /> },
  {
    segment: 'projects',
    title: 'Projects',
    icon: <FolderSpecialRoundedIcon />,
  },
  { segment: 'contact', title: 'Contact', icon: <LocalPhoneRoundedIcon /> },
];

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Navbar(props) {
  const { window } = props;
  const router = useDemoRouter('/');
  const demoWindow = window !== undefined ? window() : undefined;
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              display: 'inline-block',
              color: mode === 'light' ? '#797979' : '#fff',
            }}
          >
            <span style={{ color: '#FFBF00', fontWeight: 'bold' }}>P</span>
            ortfolio
            <span style={{ color: '#FFBF00', fontWeight: 'bold' }}>Z</span>G
          </Typography>
        ),
        title: '',
        homeUrl: '/',
      }}
      router={router}
      window={demoWindow}
    >
      <DashboardLayout>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '10px',
          }}
        >
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: mode === 'light' ? '#FFBF00' : '#444',
              color: mode === 'light' ? '#000' : '#fff',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {mode === 'light' ? '🌙 Dark Mode' : '☀ Light Mode'}
          </button>
        </Box>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

import '../../App.css';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import CustomThemeSwitcher from '../CustomThemeSwitcher/CustomThemeSwitcher.jsx';

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
  {
    kind: 'header',
    title: 'Main items',
  },
  { segment: 'home', title: 'Home', icon: <HomeRoundedIcon /> },
  {
    kind: 'header',
    title: 'More information',
  },
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

  const { mode } = useContext(ThemeContext);

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
      <DashboardLayout
        slots={{
          toolbarActions: CustomThemeSwitcher,
        }}
      >
        <DemoPageContent pathname={router.pathname} />

        {/* <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-74.25987571760744!3d40.69767006358627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b60165%3A0x8b621f8a7a7d28a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633452834502!5m2!1sen!2s"
          style={{ flex: 1, border: 0 }}
          allowFullScreen
          loading="lazy"
        /> */}
      </DashboardLayout>
    </AppProvider>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

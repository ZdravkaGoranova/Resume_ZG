import '../../App.css';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import Home from '../../Components/Home/Home.jsx';

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
    segment: 'home',
    title: 'Home',
    icon: <HomeRoundedIcon />,
  },
  {
    segment: 'about',
    title: 'About',
    icon: <PersonRoundedIcon />,
  },
  {
    segment: 'education',
    title: 'Education',
    icon: <SchoolRoundedIcon />,
  },
  {
    segment: 'skills',
    title: 'Skills',
    icon: <SettingsRoundedIcon />,
  },
  {
    segment: 'projects',
    title: 'Projects',
    icon: <FolderSpecialRoundedIcon />,
  },
  {
    segment: 'contact',
    title: 'Contact',
    icon: <LocalPhoneRoundedIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

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
      <Home></Home>
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

  const theme = useTheme();

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            PortfolioZG
          </Typography>
        ),

        title: '',
        homeUrl: '/',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

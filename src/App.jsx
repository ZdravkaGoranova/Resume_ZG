import './App.css';
import { AppProvider } from '@toolpad/core/AppProvider';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import CustomThemeSwitcher from './Components/CustomThemeSwitcher/CustomThemeSwitcher.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Education from './Components/Education/Education.jsx';

function App(props) {
  const { window } = props;

  const router = null;
  const demoWindow = window !== undefined ? window() : undefined;
  const navigate = useNavigate();

  const { mode } = useContext(ThemeContext);

  const NAVIGATION = [
    { kind: 'header', title: 'Main items' },
    {
      title: 'Home',
      segment: ' ',
      icon: <HomeRoundedIcon />,
      // component: Link,
      // to: '/',
      homeUrl: '/',
    },
    { kind: 'header', title: 'More information' },
    {
      title: 'About',
      segment: 'about',
      icon: <PersonRoundedIcon />,
      // component: Link,
      // to: '/about',
      homeUrl: '/about',
      // onClick: () => navigate('/about'),
    },
    {
      title: 'Education',
      segment: 'education',
      icon: <SchoolRoundedIcon />,
      // component: Link,
      // to: '/education',
      homeUrl: '/education',
    },
    {
      title: 'Skills',
      segment: 'skills',
      icon: <SettingsRoundedIcon />,
      // component: Link,
      // to: '/skills',
      homeUrl: '/skills',
    },
    {
      title: 'Projects',
      segment: 'projects',
      icon: <FolderSpecialRoundedIcon />,
      // component: Link,
      // to: '/projects',
      homeUrl: '/projects',
    },
    {
      segment: 'contact',
      title: 'Contact',
      icon: <LocalPhoneRoundedIcon />,
      // component: Link,
      // to: '/contact',
      homeUrl: '/contact',
    },
  ];

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
        <Box
          sx={{
            py: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </DashboardLayout>

      <Footer />
    </AppProvider>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;

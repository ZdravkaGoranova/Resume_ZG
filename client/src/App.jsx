import './App.css';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import { useEffect, useState } from 'react';
// import { getData } from './api.js';
import { ThemeContext } from './ThemeContext.jsx';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Projects from './Components/Projects/Projects.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import CustomThemeSwitcher from './Components/CustomThemeSwitcher/CustomThemeSwitcher.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Education from './Components/Education/Education.jsx';
import Work from './Components/Work/Work.jsx';
import Loading from './Components/Loading/Loading.jsx';

function App(props) {
  const { window } = props;
  const router = null;
  const demoWindow = window !== undefined ? window() : undefined;
  const { mode } = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const url = 'https://backend-portfolio-zg.onrender.com/';

  const NAVIGATION = [
    { kind: 'header', title: 'Main items' },
    {
      title: 'Home',
      segment: ' ',
      icon: <HomeRoundedIcon />,
      homeUrl: '/',
    },
    { kind: 'header', title: 'More information' },
    {
      title: 'Work',
      segment: 'work',
      icon: <PersonRoundedIcon />,
      homeUrl: '/work',
    },
    {
      title: 'Education',
      segment: 'education',
      icon: <SchoolRoundedIcon />,
      homeUrl: '/education',
    },
    {
      title: 'Skills',
      segment: 'skills',
      icon: <SettingsRoundedIcon />,
      homeUrl: '/skills',
    },
    {
      title: 'Projects',
      segment: 'projects',
      icon: <FolderSpecialRoundedIcon />,
      homeUrl: '/projects',
    },
    {
      segment: 'contact',
      title: 'Contact',
      icon: <LocalPhoneRoundedIcon />,
      homeUrl: '/contact',
    },
  ];

  // useEffect(() => {
  //   getData().then((fetchedData) => {
  //     setData(fetchedData);
  //   });
  // }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log('Current Data:', data);

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
              fontFamily: 'Russo One, sans-serif',
              letterSpacing: '1px',
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
        drawerPosition="right"
      >
        <Box
          sx={{
            py: 5,
            px: { xs: 2, sm: 5, md: 10 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {data === null ? (
            <Loading />
          ) : (
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="work" element={<Work data={data} />} />
              <Route path="projects" element={<Projects data={data} />} />
              <Route path="contact" element={<Contact data={data} />} />
              <Route path="education" element={<Education data={data} />} />
              <Route path="skills" element={<Skills data={data} />} />
              <Route path="*" element={<NotFound data={data} />} />
            </Routes>
          )}
        </Box>
      </DashboardLayout>

      <Footer data={data} />
    </AppProvider>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;

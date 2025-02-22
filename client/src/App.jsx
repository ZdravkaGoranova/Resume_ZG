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
      homeUrl: '#/work',
    },
    {
      title: 'Education',
      segment: 'education',
      icon: <SchoolRoundedIcon />,
      homeUrl: '#/education',
    },
    {
      title: 'Skills',
      segment: 'skills',
      icon: <SettingsRoundedIcon />,
      homeUrl: '#/skills',
    },
    {
      title: 'Projects',
      segment: 'projects',
      icon: <FolderSpecialRoundedIcon />,
      homeUrl: '#/projects',
    },
    {
      segment: 'contact',
      title: 'Contact',
      icon: <LocalPhoneRoundedIcon />,
      homeUrl: '#/contact',
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
          {/* <div>
            <h1>MongoDB Connected</h1>
            <p>{data ? JSON.stringify(data) : 'Loading...'}</p>
          </div> */}

          <Routes>
            <Route  path="/" element={<Home data={data} />} />
            <Route  path="/work" element={<Work data={data} />} />
            <Route  path="/projects" element={<Projects data={data} />} />
            <Route  path="/contact" element={<Contact data={data} />} />
            <Route
              
              path="/education"
              element={<Education data={data} />}
            />
            <Route  path="/skills" element={<Skills data={data} />} />
            <Route  path="*" element={<NotFound data={data} />} />
          </Routes>
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

// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';

// import Drawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),

//     marginLeft: 0,
//     position: 'relative',
//     variants: [
//       {
//         props: ({ open }) => open,
//         style: {
//           transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//           }),

//           marginLeft: -drawerWidth,
//         },
//       },
//     ],
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['margin', 'width'], {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginRight: drawerWidth,
//       },
//     },
//   ],
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

// export default function App(props) {
//   const { window } = props;
//   const router = null;
//   const demoWindow = window !== undefined ? window() : undefined;
//   const { mode, toggleTheme } = useContext(ThemeContext);
//   const [data, setData] = useState(null);
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     getData().then((fetchedData) => {
//       setData(fetchedData);
//     });
//   }, []);

//   console.log('Current Data:', data);

//   return (
//     <>
//       <Box
//         sx={{
//           display: 'flex',
//           width: '100%',
//           maxWidth: '100vw',
//           overflowX: 'hidden',
//         }}
//         router={router}
//         window={demoWindow}
//       >
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           open={open}
//           sx={{ backgroundColor: theme.palette.background.paper }}
//         >
//           <Toolbar>
//             <Typography
//               variant="h6"
//               noWrap
//               sx={{
//                 flexGrow: 1,
//                 cursor: 'pointer',
//                 color: '#fff',
//               }}
//               component="div"
//             >
//               <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//                 <span
//                   style={{
//                     color: mode === 'light' ? 'black' : '#FFD700',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   P
//                 </span>
//                 ortfolio
//                 <span
//                   style={{
//                     color: mode === 'light' ? 'black' : '#FFD700',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   Z
//                 </span>
//                 G
//               </Link>
//             </Typography>

//             <IconButton
//               color="inherit"
//               onClick={toggleTheme}
//               sx={{ marginRight: 2 }}
//             >
//               {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
//             </IconButton>

//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="end"
//               onClick={handleDrawerOpen}
//               sx={[open && { display: 'none' }]}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//         <Main open={open}>
//           <DrawerHeader sx={{ marginBottom: 2 }} />
//         </Main>
//         <Drawer
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             '& .MuiDrawer-paper': {
//               width: drawerWidth,
//             },
//           }}
//           variant="persistent"
//           anchor="right"
//           open={open}
//         >
//           <DrawerHeader>
//             <IconButton onClick={handleDrawerClose}>
//               {theme.direction === 'rtl' ? (
//                 <ChevronLeftIcon />
//               ) : (
//                 <ChevronRightIcon />
//               )}
//             </IconButton>
//           </DrawerHeader>
//           <Divider />
//           <List>
//             {NAVIGATION.map((item, index) => {
//               if (item.kind === 'header') return null;
//               return (
//                 <ListItem key={index} disablePadding>
//                   <ListItemButton component="a" href={item.homeUrl}>
//                     <ListItemIcon>{item.icon}</ListItemIcon>
//                     <ListItemText primary={item.title} />
//                   </ListItemButton>
//                 </ListItem>
//               );
//             })}
//           </List>
//         </Drawer>

//         <Routes>
//           <Route path="/" element={<Home data={data} />} />
//           <Route path="/about" element={<About data={data} />} />
//           <Route path="/projects" element={<Projects data={data} />} />
//           <Route path="/contact" element={<Contact data={data} />} />
//           <Route path="/education" element={<Education data={data} />} />
//           <Route path="/skills" element={<Skills data={data} />} />
//           <Route path="*" element={<NotFound data={data} />} />
//         </Routes>
//       </Box>
//       <Footer data={data} />
//     </>
//   );
// }
// App.propTypes = {
//   window: PropTypes.func,
// };

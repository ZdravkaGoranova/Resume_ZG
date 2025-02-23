import { createContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

const getTheme = (mode) =>
  createTheme({
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#FFBF00' : '#FFBF00',
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#000103',
        paper: mode === 'light' ? '#ffffff' : '#000103',
      },
      text: {
        primary: mode === 'light' ? '#000103' : '#ffffff',
      },
    },
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

export const ThemeProviderComponent = ({ children }) => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    setMode(savedTheme);
    document.documentElement.setAttribute(
      'data-toolpad-color-scheme',
      savedTheme,
    );
  }, []);

  useEffect(() => {
    if (mode) {
      document.documentElement.setAttribute('data-toolpad-color-scheme', mode);
      localStorage.setItem('theme', mode);
    }
  }, [mode]);


  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProviderComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext };

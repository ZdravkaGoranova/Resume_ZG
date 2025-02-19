import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#140f00',
    },
    secondary: {
      main: '#ffbf00',
      light: '#FFDD7A',
      dark: '#D6A000',
      contrastText: '#898476',
    },
  },
});

export default theme;


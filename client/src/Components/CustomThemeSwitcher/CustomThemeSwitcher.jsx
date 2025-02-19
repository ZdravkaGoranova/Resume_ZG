import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';

export default function CustomThemeSwitcher() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
        <Tooltip title="Themes" enterDelay={1000}>
          <IconButton type="button" aria-label="themes" onClick={toggleTheme}>
            {mode === 'light' ? (
              <LightModeRoundedIcon />
            ) : (
              <NightlightRoundedIcon />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}

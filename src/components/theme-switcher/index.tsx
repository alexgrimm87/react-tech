import {useContext} from 'react';
import {Grid, IconButton, useTheme} from "@mui/material";
import {DarkMode, LightMode, NotificationsNone} from "@mui/icons-material";
import {ColorModeContext} from "../../theme";

const ThemeSwitcherComponent = () => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);

  return (
    <Grid
      onClick={colorMode.toggleColorMode}
      sx={{
        pr: '35px',
        paddingTop: '10px'
      }}
    >
      <IconButton sx={{mr: '45px'}}>
        {theme.palette.mode === 'dark' ? (<DarkMode />) : (<LightMode />)}
      </IconButton>
      <IconButton>
        <NotificationsNone />
      </IconButton>
    </Grid>
  );
};

export default ThemeSwitcherComponent;

import {useContext} from "react";
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {LightMode, DarkMode, Search, NotificationsNone, MenuOutlined} from '@mui/icons-material';
import {ColorModeContext, tokens} from "../../theme";
//import {useAppSelector} from "../../utils/hook";

const TopBarComponent = (props: any) => {
  //const {user} = useAppSelector((state) => state.auth.user)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode: any = useContext(ColorModeContext);
  const {isOpen, setIsOpen} = props;

  return (
    <AppBar
      position='static'
      sx={{
        background: `${colors.primary.DEFAULT} !important`,
        borderBottom: `1px solid ${colors.borderColor}`,
        boxShadow: 'none !important'
      }}
    >
      <Toolbar sx={{justifyContent: 'space-between', padding: '25px 45px'}}>
        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
          <MenuOutlined sx={{marginRight: '10px', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)} />
          <Typography variant='h3'>
            Welcome Alex
            {/*{user && `Welcome ${user.firstName}`}*/}
          </Typography>
        </Box>
        <Box display='flex'>
          <Grid
            onClick={colorMode.toggleColorMode}
            sx={{
              pr: '35px',
              paddingTop: '10px',
              borderRight: `1px solid ${colors.borderColor}`
            }}
          >
            <IconButton sx={{mr: '45px'}}>
              {theme.palette.mode === 'dark' ? (<DarkMode />) : (<LightMode />)}
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              maxHeight: '45px',
              backgroundColor: `${colors.primary[600]}`,
              borderRadius: '8px',
              ml: '28px'
            }}
          >
            <IconButton sx={{'&:hover': {background: 'transparent'}}}>
              <Search />
            </IconButton>
            <InputBase sx={{px: '18px', py: '12px'}} placeholder='Search' />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBarComponent;

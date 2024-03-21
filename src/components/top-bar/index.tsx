import {FC} from "react";
import {AppBar, Box, Grid, Toolbar, Typography, useTheme} from "@mui/material";
import {MenuOutlined} from '@mui/icons-material';
import {ITopBarProps} from "../../common/types/top-bar";
import {tokens} from "../../theme";
import ThemeSwitcherComponent from "../theme-switcher";
import SearchBarComponent from "../search-bar";

const TopBarComponent:FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {isOpen, setIsOpen, isNonMobile} = props;

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
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={3} lg={3}>
            <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
              <MenuOutlined sx={{marginRight: '10px', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)} />
              <Typography variant='h3'>Welcome {sessionStorage.getItem('name')}</Typography>
            </Box>
          </Grid>
          {isNonMobile && (
            <Grid display="flex" justifyContent="flex-end" item sm={9} lg={9}>
              <ThemeSwitcherComponent />
              <SearchBarComponent />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBarComponent;

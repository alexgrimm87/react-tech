import {FC} from "react";
import {AppBar, Grid, Toolbar, Typography, useTheme} from "@mui/material";
import {MenuOutlined} from '@mui/icons-material';
import {useAppSelector} from "../../utils/hook";
import {ITopBarProps} from "../../common/types/top-bar";
import {tokens} from "../../theme";
import ThemeSwitcherComponent from "../theme-switcher";
import SearchBarComponent from "../search-bar";
import FlexBetween from "../flex-between";

const TopBarComponent:FC<ITopBarProps> = (props: ITopBarProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {isOpen, setIsOpen, isNonMobile} = props;
  const {user} = useAppSelector((state) => state.auth.user);

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
            <FlexBetween>
              <MenuOutlined sx={{marginRight: '10px', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)} />
              <Typography variant='h3'>Welcome {user ? `${user.firstName}` : ''}</Typography>
            </FlexBetween>
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

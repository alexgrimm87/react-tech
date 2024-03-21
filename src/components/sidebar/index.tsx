import {FC, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import {ChevronLeftOutlined, LogoutOutlined} from '@mui/icons-material';
import {navMenu} from "../../common/moks/navigate";
import {tokens} from "../../theme";
import ThemeSwitcher from "../theme-switcher";
import SearchBarComponent from "../search-bar";
import {ISidebarProps} from "../../common/types/sidebar";
import Logo from "../../assets/images/sidebar/logo.svg"

const SidebarComponent: FC<ISidebarProps> = (props: ISidebarProps): JSX.Element => {
  const [active, setActive] = useState('');
  const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props;
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const renderNavMenu = navMenu.map((element): JSX.Element => {
    return (
      <ListItem key={element.id}>
        <ListItemButton
          onClick={() => navigate(`${element.path}`)}
          className={active === element.path ? 'active' : ''}
          sx={{
            '&:hover': {
              backgroundColor: '#1900D5 !important',
              color: '#fff',
              borderRadius: '4px',
              '& .MuiSvgIcon-root': {
                color: `${colors.white.DEFAULT} !important`
              }
            },
            '&.active': {
              backgroundColor: '#1900D5 !important',
              color: '#fff !important',
              borderRadius: '4px !important'
            }
          }}
        >
          <ListItemIcon>{element.icon}</ListItemIcon>
          <ListItemText>
            <Typography variant='body1'>{element.name}</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    )
  });

  return (
    <Box component='nav'>
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant='persistent'
          anchor='left'
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              boxSizing: 'border-box',
              width: drawerWidth,
            }
          }}
        >
          <Box width='100%' sx={{borderBottom: `1px solid ${colors.borderColor}`}}>
            <Box>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box
                  display='flex'
                  alignItems='center'
                  gap='10px'
                  padding='30px 15px'
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  <img src={Logo} alt="Logo" />
                  <Typography
                    variant='h1'
                    color={theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}
                  >
                    Groth
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </Box>
            </Box>
            <List>
              {!isNonMobile && (
                <ListItem>
                  <SearchBarComponent />
                </ListItem>
              )}
            </List>
            <List sx={{marginBottom: '55px'}}>
              {renderNavMenu}
            </List>
          </Box>
          <Box width='100%'>
            <List>
              {!isNonMobile && (
                <ListItem>
                  <Box padding="5px">
                    <ThemeSwitcher />
                  </Box>
                </ListItem>
              )}
              <ListItem>
                <ListItemButton
                  sx={{
                  '&:hover': {
                    backgroundColor: '#1900D5 !important',
                    color: '#fff',
                    borderRadius: '4px'
                  }
                }}
                >
                  <ListItemIcon>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Logout</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SidebarComponent;

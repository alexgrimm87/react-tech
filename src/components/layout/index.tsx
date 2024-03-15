import {FC, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import TopBarComponent from "../top-bar";
import SidebarComponent from "../sidebar";

const LayoutComponent: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    location.pathname === '/login' || location.pathname === '/register'
      ? (
        <>
          <Outlet />
        </>
      ) : (
        <Box
          display={isNonMobile ? 'flex' : 'block'}
          justifyContent='space-between'
          width='100%'
          height='100%'
        >
          <SidebarComponent
            isNonMobile={isNonMobile}
            drawerWidth='250px'
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <Box
            display='flex'
            flexGrow='1'
            flexDirection='column'
            justifyContent='center'
          >
            <TopBarComponent
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <Outlet />
          </Box>
        </Box>
      )
  );
};

export default LayoutComponent;

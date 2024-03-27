import React, {useEffect, useState} from "react";
import {Box, Grid, Tab, Tabs, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {useAppDispatch} from "../../utils/hook";
import {tabProps} from "../../utils/helpers";
import {getPublicUser} from "../../store/thunks/auth";
import TabPanel from "../../components/tab-panel";
import SettingsPersonalInfoComponent from "../../components/settings-personal-info";
import ChangePasswordComponent from "../../components/change-password";
import DeleteUserComponent from "../../components/delete-user";

const SettingsPage = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getPublicUser());
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  };

  return (
    <Grid sx={{padding: '32px'}}>
      <Box sx={{borderBottom: `1px solid ${colors.borderColor}`}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Settings tabs"
          centered
          textColor="secondary"
          TabIndicatorProps={{
            style: {
              backgroundColor: colors.blue,
            },
          }}
        >
          <Tab label="Personal information" {...tabProps(0)} />
          <Tab label="Change password" {...tabProps(1)} />
          <Tab label="Remove account" {...tabProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SettingsPersonalInfoComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePasswordComponent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeleteUserComponent />
      </TabPanel>
    </Grid>
  );
};

export default SettingsPage;

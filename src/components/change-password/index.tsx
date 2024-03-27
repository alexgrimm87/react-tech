import React, {FC, useState} from "react";
import {Box, Grid, useTheme} from "@mui/material";
import {useAppDispatch} from "../../utils/hook";
import {updateUserPassword} from "../../store/thunks/auth";
import {tokens} from "../../theme";
import InputField from "../input-field";
import AppLoadingButton from "../loading-button";

const ChangePasswordComponent: FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChangePassword = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data = {
      oldPassword,
      newPassword
    }

    dispatch(updateUserPassword(data));
  }

  return (
    <Grid
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleChangePassword}
      sx={{
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: colors.blue
          }
        },
        '& label.Mui-focused': {
          color: `${
            theme.palette.mode === 'dark'
              ? colors.white.DEFAULT
              : colors.black.DEFAULT
          }`
        }
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 0'}}>
        <InputField
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          type="text"
          label="Old password"
          variant="outlined"
        />
        <InputField
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="text"
          label="New password"
          variant="outlined"
        />
        <Box sx={{margin: '32px 0'}}>
          <AppLoadingButton type="submit">Change password</AppLoadingButton>
        </Box>
      </Box>
    </Grid>
  )
}

export default ChangePasswordComponent;

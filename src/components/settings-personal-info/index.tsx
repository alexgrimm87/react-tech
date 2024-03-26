import {useEffect, useState} from "react";
import {Box, Grid, useTheme} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {updateUserInfo} from "../../store/thunks/auth";
import {tokens} from "../../theme";
import InputField from "../input-field";
import AppLoadingButton from "../loading-button";

const SettingsPersonalInfoComponent = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const {user} = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    if (user) {
      setName(user.firstName);
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      firstName: name,
      username: username,
      email: email
    }

    dispatch(updateUserInfo(data));
  }

  return (
    <Grid
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          label="Name"
          variant="outlined"
        />
        <InputField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          label="Username"
          variant="outlined"
        />
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          label="Email"
          variant="outlined"
        />
        <Box sx={{marginTop: '32px'}}>
          <AppLoadingButton type="submit">Save</AppLoadingButton>
        </Box>
      </Box>
    </Grid>
  )
}

export default SettingsPersonalInfoComponent;

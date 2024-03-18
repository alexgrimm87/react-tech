import {FC} from "react";
import {Box, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import AppLoadingButton from "../../../components/loading-button";

const LoginPage:FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const {navigate, register, loading, errors} = props;

  return (
    <>
      <Typography
        variant="h2"
        textAlign="center"
        fontSize={32}
      >
        Authorization
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        textAlign="center"
      >
        Enter your login and password
      </Typography>
      <Box marginBottom={2}>
        <TextField
          error={!!errors.email} //errors.email ? true : false
          fullWidth={true}
          margin="normal"
          label="Email"
          variant="outlined"
          placeholder="Enter your email"
          helperText={errors.email ? `${errors.email.message}` : ''}
          {...register('email')}
        />
        <TextField
          error={!!errors.password} //errors.password ? true : false
          type="password"
          fullWidth={true}
          margin="normal"
          label="Password"
          variant="outlined"
          placeholder="Enter your password"
          helperText={errors.password ? `${errors.password.message}` : ''}
          {...register('password')}
        />
      </Box>
      <AppLoadingButton
        loading={loading}
        type="submit"
        sx={{width: '60%'}}
        variant="contained"
      >
        Sign in
      </AppLoadingButton>
      <Box margin='20px 0'>
        <Typography variant="body1">
          You don't have an account? <span
            style={{
              color: '#1900D5',
              marginLeft: '10px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/register')}
          >
            Registration
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default LoginPage;

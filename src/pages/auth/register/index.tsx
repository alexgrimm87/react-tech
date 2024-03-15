import {FC} from "react";
import {Box, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import AppButton from "../../../components/app-button";

const RegisterPage:FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const {navigate, register, errors} = props;

  return (
    <>
      <Typography
        variant="h2"
        textAlign="center"
      >
        Registration
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        textAlign="center"
      >
        Enter your registration details
      </Typography>
      <Box marginBottom={2}>
        <TextField
          error={!!errors.name}
          fullWidth={true}
          margin="normal"
          label="Name"
          variant="outlined"
          placeholder="Enter your name"
          helperText={errors.name ? `${errors.name.message}` : ''}
          {...register('name')}
        />
        <TextField
          error={!!errors.username}
          fullWidth={true}
          margin="normal"
          label="Username"
          variant="outlined"
          placeholder="Enter your username"
          helperText={errors.username ? `${errors.username.message}` : ''}
          {...register('username')}
        />
        <TextField
          error={!!errors.email}
          fullWidth={true}
          margin="normal"
          label="Email"
          variant="outlined"
          placeholder="Enter your email"
          helperText={errors.email ? `${errors.email.message}` : ''}
          {...register('email')}
        />
        <TextField
          error={!!errors.password}
          type="password"
          fullWidth={true}
          margin="normal"
          label="Password"
          variant="outlined"
          placeholder="Enter your password"
          helperText={errors.password ? `${errors.password.message}` : ''}
          {...register('password')}
        />
        <TextField
          error={!!errors.confirmPassword}
          type="password"
          fullWidth={true}
          margin="normal"
          label="Confirm Password"
          variant="outlined"
          placeholder="Confirm your password"
          helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
          {...register('confirmPassword')}
        />
      </Box>
      <AppButton
        type="submit"
        sx={{fontFamily: 'Poppins', width: '60%'}}
        variant="contained"
      >
        Sign up
      </AppButton>
      <Box margin='20px 0'>
        <Typography
          variant="body1"
          sx={{fontFamily: 'Poppins'}}
        >
          Do you have an account? <span
            style={{
              color: '#1900D5',
              marginLeft: '10px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/login')}
          >
            Sign in
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default RegisterPage;

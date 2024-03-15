import {FC} from "react";
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage:FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const {navigate, register, errors} = props;

  return (
    <>
      <Typography
        variant="h2"
        fontFamily="Poppins"
        textAlign="center"
      >
        Registration
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Enter your registration details
      </Typography>
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
      <Button
        type="submit"
        sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}}
        variant="contained"
      >
        Sign up
      </Button>
      <Typography
        variant="body1"
        sx={{fontFamily: 'Poppins'}}
      >
        Do you have an account? <span className="incitingText" onClick={() => navigate('/login')}>Sign in</span>
      </Typography>
    </>
  );
};

export default RegisterPage;

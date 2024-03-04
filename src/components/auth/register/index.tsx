import {Button, TextField, Typography} from "@mui/material";

const RegisterPage = () => {
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
        fullWidth={true}
        margin="normal"
        label="Name"
        variant="outlined"
        placeholder="Enter your name"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Enter your username"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Enter your password"
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Confirm Password"
        variant="outlined"
        placeholder="Confirm your password"
      />
      <Button
        sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}}
        variant="contained"
      >
        Sign up
      </Button>
      <Typography
        variant="body1"
        sx={{fontFamily: 'Poppins'}}
      >
        Do you have an account? <span className="incitingText">Sign in</span>
      </Typography>
    </>
  );
};

export default RegisterPage;

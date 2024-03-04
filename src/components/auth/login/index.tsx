import {Button, TextField, Typography} from "@mui/material";

const LoginPage = () => {
  return (
    <>
      <Typography
        variant="h2"
        fontFamily="Poppins"
        textAlign="center"
      >
        Authorization
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Enter your login and password
      </Typography>
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
      <Button
        sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}}
        variant="contained"
      >
        Sign in
      </Button>
      <Typography
        variant="body1"
        sx={{fontFamily: 'Poppins'}}
      >
        You don't have an account? <span className="incitingText">Registration</span>
      </Typography>
    </>
  );
};

export default LoginPage;

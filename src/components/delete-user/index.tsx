import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography, useTheme} from "@mui/material";
import {useAppDispatch} from "../../utils/hook";
import {deleteUser} from "../../store/thunks/auth";
import {tokens} from "../../theme";

const DeleteUserComponent = () => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteUser());
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    navigate('/login');
  }

  return (
    <Grid container>
      <Grid item sx={{width: '100%', textAlign: 'center', marginBottom: '32px !important'}}>
        <Typography variant="h2">Remove account</Typography>
      </Grid>
      <Grid item sx={{width: '100%', textAlign: 'center', marginBottom: '32px !important'}}>
        <Typography variant="body1">
          Dear user, by deleting your account, you are deleting all of your
          personal information. Once deleted, all the information you have saved
          information will no longer be available.
        </Typography>
      </Grid>
      <Grid item sx={{width: '100%', marginBottom: '32px !important'}}>
        <FormGroup>
          <FormControlLabel
            label="I agree"
            sx={{
              justifyContent: 'center'
            }}
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                sx={{
                  color: colors.blue,
                  '&.Mui-checked': {
                    color: colors.blue
                  }
                }}
              />
            }
          />
        </FormGroup>
      </Grid>
      <Grid item sx={{width: '100%', textAlign: 'center'}}>
        <Button
          onClick={handleDelete}
          color="success"
          variant="outlined"
          disabled={!checked}
        >
          Remove account
        </Button>
      </Grid>
    </Grid>
  )
}

export default DeleteUserComponent;

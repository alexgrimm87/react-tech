import {styled} from '@mui/system';
import {Grid} from "@mui/material";
import {tokens} from "../../theme";

const CardItem = styled(Grid)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: `${
    theme.palette.mode === 'light'
      ? tokens(theme.palette.mode).primary.DEFAULT
      : tokens(theme.palette.mode).primary[600]
  }`,
  padding: '20px 16px',
  width: '100%',
  maxWidth: 500,
  minHeight: 185,
  marginBottom: '25px !important',
  border: `1px solid ${tokens(theme.palette.mode).borderColor}`,
  borderRadius: 12
}));

export default CardItem;

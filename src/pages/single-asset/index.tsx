import {FC, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {Alert, AlertColor, Avatar, Grid, Snackbar, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {createWatchListRecord} from "../../store/thunks/assets";
import {ISingleAsset} from "../../common/types/assets";
import FlexBetween from '../../components/flex-between';
import CardItem from "../../components/card-item";
import CardTitle from "../../components/card-title";
import Card from "../../components/card";
import CardButton from "../../components/card-button";

const SingleAssetPage: FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor>('success');
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const assetsArray: ISingleAsset[] = useAppSelector((state) => state.assets.assets);
  const asset = assetsArray.find((element) => element.name === id as string);

  const handleCreateRecord = () => {
    try {
      const data = {
        name: '',
        assetId: ''
      }

      if (asset) {
        data.name = asset.name;
        data.assetId = asset.id;
      }

      dispatch(createWatchListRecord(data));
      setSeverity('success');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } catch (e) {
      setSeverity('error');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  }

  return (
    <>
      {asset && (
        <Grid container sx={{padding: 5, alignItems: 'center'}}>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', margin: '50px 0 !important'}}>
            <Typography variant="h1">{asset.name}</Typography>
          </Grid>
          <Card item sm={6} xs={12}>
            <CardItem>
              <FlexBetween>
                <Avatar src={asset.image} sx={{marginRight: 2}} />
                <Typography variant="h2" sx={{fontSize: 20, fontWeight: 600}}>{asset.symbol.toUpperCase()}</Typography>
              </FlexBetween>
            </CardItem>
          </Card>
          <Card item sm={6} xs={12}>
            <CardItem>
              <FlexBetween>
                <CardTitle variant="h2">Price:&nbsp;</CardTitle>
                <Typography variant="h2" sx={{fontSize: 20}}>$ {asset.current_price}</Typography>
              </FlexBetween>
            </CardItem>
          </Card>
          <Card item sm={6} xs={12}>
            <CardItem container>
              <CardTitle variant="h2">Price change:&nbsp;</CardTitle>
              <Typography
                variant="h2"
                sx={[
                  {
                    fontSize: 20
                  },
                  asset.price_change_percentage_24h >= 0
                    ? {color: '#A9FFA7'} : {color: '#FFA7A7'}
                ]}
              >
                $ {asset.price_change_24h.toFixed(4)}
              </Typography>
            </CardItem>
          </Card>
          <Card item sm={6} xs={12}>
            <CardItem>
              <CardTitle variant="h2">Price change % :&nbsp;</CardTitle>
              <Typography
                variant="h2"
                sx={[
                  {
                    fontSize: 20
                  },
                  asset.price_change_percentage_24h >= 0
                    ? {color: '#A9FFA7'} : {color: '#FFA7A7'}
                ]}
              >
                $ {asset.price_change_percentage_24h.toFixed(2)}
              </Typography>
            </CardItem>
          </Card>
          <Grid container justifyContent="center" sx={{marginTop: '25px'}}>
            <CardButton color="success" variant="outlined" onClick={() => navigate(-1)}>
              Go back
            </CardButton>
            <CardButton color="success" variant="outlined" onClick={handleCreateRecord}>
              Add to favourites
            </CardButton>
          </Grid>
          <Snackbar open={open} autoHideDuration={6000}>
            <Alert severity={severity} sx={{width: '100%'}}>Success!</Alert>
          </Snackbar>
        </Grid>
      )}
    </>
  )
}

export default SingleAssetPage;

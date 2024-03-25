import {useEffect} from "react";
import {Grid, Typography, useTheme} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getWatchlistElements} from "../../store/thunks/watchlist";
import {getTopPriceData} from "../../store/thunks/assets";
import {tokens} from "../../theme";
import AssetsTableComponent from "../../components/assets-table";

const WatchlistPage = () => {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector((state) => state.watchlist.assets);
  const {assets} = useAppSelector((state) => state.assets);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getTopPriceData());
    dispatch(getWatchlistElements());
  }, [dispatch]);

  const filteredArray = assets.filter((element: any) => {
    return watchlist.some((otherElement: any) => {
      return otherElement.assetId === element.id;
    })
  });

  return (
    <Grid sx={{padding: '10px 20px'}}>
      <Grid sx={{textAlign: 'center'}}>
        <Typography variant="h2" sx={{margin: '25px 0 !important'}}>
          Favourites
        </Typography>
      </Grid>
      <Grid sx={{
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? colors.primary.DEFAULT
            : colors.primary[600]
        }`,
        padding: '20px 16px',
        marginBottom: '32px',
        minHeight: 270,
        border: `1px solid ${colors.borderColor}`,
        borderRadius: '12px',
        '& .MuiPaper-root': {
          backgroundColor: 'transparent !important',
          boxShadow: 'none !important',
          backgroundImage: 'none !important'
        }
      }}>
        <AssetsTableComponent assets={filteredArray} />
      </Grid>
    </Grid>
  )
};

export default WatchlistPage;

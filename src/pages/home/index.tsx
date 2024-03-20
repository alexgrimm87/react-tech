import {FC, useCallback, useEffect, useMemo, useRef} from "react";
import {Box, Grid, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";
import {IChartData, ISingleAsset} from "../../common/types/assets";
import AreaChart from "../../components/charts/area-chart";
import LineChart from "../../components/charts/line-chart";
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';

const Home: FC = (): JSX.Element => {
  const favoriteAssets: IChartData[] = useAppSelector(state => state.assets.favoriteAssets);
  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);

  const filteredArray = useMemo(() => {
    return favoriteAssets.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    )
  }, [favoriteAssets]);

  const fetchData = useCallback((data: string[]) => {
    data.forEach((element: string) => {
      dispatch(getFavoriteAssets(element));
    });
  }, [dispatch]);

  useEffect(() => {
    if (fetchDataRef.current) return
    fetchDataRef.current = true;
    fetchData(favoriteAssetName);
  }, [favoriteAssetName, fetchData]);

  const renderFavoriteBlock = filteredArray.map((element: IChartData) => {
    let currentPrice = 0;
    let changePrice = 0;

    element.singleAsset.forEach((element: ISingleAsset) => {
      currentPrice = element.current_price
      changePrice = element.price_change_percentage_24h
    });

    return (
      <Grid item xs={12} sm={6} lg={6} key={element.name}>
        <Grid container sx={{
          backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
          padding: '20px 16px',
          minHeight: 185,
          border: `1px solid ${colors.borderColor}`,
          borderRadius: '12px'
        }}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 style={{
              margin: 0,
              fontSize: 25,
              fontWeight: 600,
              lineHeight: '30px',
              textTransform: 'capitalize'
            }}>
              {element.name}
            </h3>
            <div style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              paddingBottom: '35px'
            }}>
              <h3 style={{
                margin: 0,
                fontSize: 32,
                fontWeight: 700,
                lineHeight: '48px'
              }}>
                ${currentPrice}
              </h3>
              <Box
                sx={[
                  {
                    display: 'flex',
                    alignSelf: 'flex-start',
                    padding: '2px',
                    borderRadius: '4px'
                  },
                  changePrice > 0
                  ? {
                      backgroundColor: '#A9FFA7',
                      color: '#037400'
                    }
                  : {
                      backgroundColor: '#FFA7A7',
                      color: '#740000'
                    }
                ]}
              >
                {changePrice > 0 ? (
                  <img src={TrendUp} alt="TrendUp" />
                ) : (
                  <img src={TrendDown} alt="TrendDown" />
                )}
                <span>{Number(changePrice).toFixed(2)}%</span>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AreaChart data={element.price_chart_data} />
          </Grid>
        </Grid>
      </Grid>
    )
  })

  return (
    <Box sx={{flexGrow: 1, padding: '32px'}}>
      <Grid container spacing={2} sx={{marginBottom: '32px'}}>
        {renderFavoriteBlock}
      </Grid>
      <Grid container sx={{
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? colors.primary.DEFAULT
            : colors.primary[600]
        }`,
        padding: '20px 16px',
        minHeight: 270,
        border: `1px solid ${colors.borderColor}`,
        borderRadius: '12px'
      }}>
        <Grid item xs={12} sm={12} lg={12}>
          {filteredArray.length && <LineChart data={filteredArray} />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

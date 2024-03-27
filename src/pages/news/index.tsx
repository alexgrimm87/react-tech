import {FC, useEffect} from "react";
import {Box, Grid, Typography, Link, useTheme} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {tokens} from "../../theme";
import {getNews} from "../../store/thunks/news";

const NewsPage: FC = () => {
  const dispatch = useAppDispatch();
  const {news} = useAppSelector((state) => state.news);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const renderNewsBlock = news.map((element: any) => (
    <Box
      key={element.id}
      sx={{
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
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: {xs: 'center', md: 'flex-start'}
      }}>
        <Box sx={{marginRight: {md: '15px'}}}>
          <img src={element.imageurl} alt={element.category} />
        </Box>
        <Box>
          <Box sx={{marginBottom: '32px'}}>
            <Typography variant="h3">{element.title}</Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{marginBottom: '10px'}}>
              {element.body}
            </Typography>
            <Typography variant="h4" sx={{display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'}}}>
              <Link
                href={element.url}
                target="_blank"
                rel="noopener"
                variant="body1"
              >
                Read more
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  ))

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch])

  return (
    <Grid sx={{
      padding: '32px',
      '& a': {
        textDecoration: 'underline !important',
        color: `${
          theme.palette.mode === 'light'
            ? colors.black.DEFAULT
            : colors.white.DEFAULT
        }`
      }
    }}>
      <Grid sx={{textAlign: 'center', marginBottom: '32px'}}>
        <Typography variant="h2">News</Typography>
      </Grid>
      <Grid>{renderNewsBlock}</Grid>
    </Grid>
  );
};

export default NewsPage;

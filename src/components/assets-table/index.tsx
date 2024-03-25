import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

const AssetsTableComponent = (props: any) => {
  const {assets} = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Changes ($)</TableCell>
            <TableCell align="right">Changes (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((element: any) => (
            <TableRow key={element.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              <TableCell component="th" scope="row">{element.name}</TableCell>
              <TableCell align="right">{element.current_price}</TableCell>
              <TableCell
                align="right"
                sx={[
                  element.price_change_24h > 0
                    ? {color: '#A9FFA7 !important'} : {color: '#FFA7A7 !important'}
                ]}
              >
                {element.price_change_24h.toFixed(2)}
              </TableCell>
              <TableCell
                align="right"
                sx={[
                  element.price_change_percentage_24h > 0
                    ? {color: '#A9FFA7 !important'} : {color: '#FFA7A7 !important'}
                ]}
              >
                {element.price_change_percentage_24h.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssetsTableComponent;

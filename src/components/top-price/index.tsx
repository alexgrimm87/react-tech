import {FC} from "react";
import {ITablePriceData} from "../../common/types/assets";
import AssetsTableComponent from "../assets-table";

const TopPriceComponent: FC<ITablePriceData> = (props: ITablePriceData) => {
  const {assets} = props;

  return <AssetsTableComponent assets={assets} />;
}

export default TopPriceComponent;

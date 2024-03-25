import AssetsTableComponent from "../assets-table";

const TopPriceComponent = (props: any) => {
  const {assets} = props;

  return <AssetsTableComponent assets={assets} />;
}

export default TopPriceComponent;

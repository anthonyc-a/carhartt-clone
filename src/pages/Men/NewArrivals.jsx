import React from "react";
import Helmet from "react-helmet"
import Nav from "../../components/Header/Nav";
import ChooseView from "../../components/ChooseView/ChooseView";
import FooterBlock from "../../components/Footer/FooterBlock/FooterBlock";
import HideInfo from "../../components/HideInfo/HideInfo";
import Layout from "../../components/Layout/Layout";
import Products from "../../components/Products/Products";

const NewArrivals = ({ products, cart, onAddToCart }) => {
  const [hideInfo, setHideInfo] = React.useState(false);
  const [largeView, setLargeView] = React.useState(false);
  const [itemAdded, setItemAdded] = React.useState(false);

  return (
    <div className="page-layout products-page">
      <Helmet>
        <title>Carhartt WIP New Arrivals | carhartt-wip.com</title>
      </Helmet>
      <Layout cart={cart} itemAdded={itemAdded}>
        <Nav />
        <ChooseView largeView={largeView} setLargeView={setLargeView} />
        <HideInfo hideInfo={hideInfo} setHideInfo={setHideInfo} />
        <Products
          products={products}
          onAddToCart={onAddToCart}
          hideInfo={hideInfo}
          largeView={largeView}
          setItemAdded={setItemAdded}
          itemAdded={itemAdded}
        />
        <FooterBlock />
      </Layout>
    </div>
  );
};

export default NewArrivals;

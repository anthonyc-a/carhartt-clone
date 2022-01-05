import React from "react";
import ChooseView from "../../components/ChooseView/ChooseView";
import Footer from "../../components/Footer/Footer"
import FooterBlock from "../../components/Footer/FooterBlock/FooterBlock";
import Header from "../../components/Header/Header";
import Nav from "../../components/Header/Nav";
import Search from "../../components/Header/Search";
import HideInfo from "../../components/HideInfo/HideInfo";
import Products from "../../components/Products/Products";

const NewArrivals = ({ products, cart, onAddToCart }) => {
  const [hideInfo, setHideInfo] = React.useState(false);
  const [largeView, setLargeView] = React.useState(false);
  const [itemAdded, setItemAdded] = React.useState(false);

  return (
    <div>
      <Header cart={cart} itemAdded={itemAdded} />
      <Nav />
      <Search />
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
      <Footer />
    </div>
  );
};

export default NewArrivals;

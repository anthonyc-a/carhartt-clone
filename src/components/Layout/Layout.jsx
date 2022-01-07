import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Search from "../Header/Search";

const Layout = ({ children, cart, itemAdded }) => {
  return (
    <>
      <Header cart={cart} itemAdded={itemAdded} />
      <Search />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

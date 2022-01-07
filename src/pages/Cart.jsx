import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items.length;

  const FilledCart = () => (
    <>
      {cart.line_items.map((item) => (
        <div className="cart-item">{item.name}</div>
      ))}
    </>
  );

  return (
    <>
      <Helmet>
        <title>Your Cart | carhartt-wip.com</title>
      </Helmet>
      <Layout cart={cart}>
        <div className="page-layout cart-page">
          <div className="cart-content">
            <div className="main-title">
              <span>Your Shopping Cart</span>
            </div>
            {isEmpty ? (
              <div className="empty-cart">
                Your cart
                <span> is empty</span>
              </div>
            ) : (
              <FilledCart />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;

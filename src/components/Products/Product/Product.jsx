import React from "react";

const Product = (props) => {
  return (
    <a href="/">
      <div className="product-grid-item-img">
        <div className="product-img-contain">
          <img src={props.image} alt={props.name} />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="product-grid-item-data">
        <div className="center">
          <div className="title">
            <p className="descr">{props.name}</p>
            <p className="colour">{props.colour}</p>
          </div>
          <dl className="price">
            <dd>
              <span>75.00</span>
            </dd>
          </dl>
        </div>
        <div className="sizes">
          <dl>
            <dt>Size in Stock:</dt>
            <dd>
              <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </a>
  );
};

export default Product;

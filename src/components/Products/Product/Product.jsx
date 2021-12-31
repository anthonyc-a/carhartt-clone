import React from "react";

const Product = ({
  product,
  onAddToCart,
  setItemAdded,
  itemAdded,
  hideInfo,
}) => {
  return (
    <a
      href=""
      onClick={() => {
        setItemAdded(true);
        setTimeout(() => setItemAdded(false), 2000);
        !itemAdded && onAddToCart(product.id, 1);
      }}
    >
      <div className="product-grid-item-img">
        <div className="product-img-contain">
          <img src={product.image.url} alt={product.name} />
          <div className="overlay"></div>
        </div>
      </div>
      {!hideInfo && (
        <div className="product-grid-item-data">
          <div className="center">
            <div className="title">
              <p className="descr">{product.name}</p>
              <p className="colour">
                {product.variant_groups[0].options[0].name}
              </p>
            </div>
            <dl className="price">
              <dd>
                <span>{product.price.formatted}</span>
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
      )}
      <div
        className={
          hideInfo
            ? "product-grid-item-data shrink"
            : "product-grid-item-data info-hidden"
        }
      >
        <div className="sizes minimized">
          <div className="center">
            <div className="title">
              <p className="descr">{product.name}</p>
              <p className="colour">
                {product.variant_groups[0].options[0].name}
              </p>
            </div>
            <dl className="price">
              <dd>
                <span>{product.price.formatted}</span>
              </dd>
            </dl>
          </div>
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

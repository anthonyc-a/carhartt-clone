import React from "react";
import Product from "./Product/Product";

const Products = ({ products, onAddToCart, itemAdded, setItemAdded, hideInfo, largeView }) => {
  return (
    <main>
      <div className="products-grid">
        <div className="content">
          {products.map((product) => (
            <article key={product.id} className={largeView ? "large-view" : ""}>
              <Product
                image={product.img}
                name={product.name}
                colour={product.colour}
                product={product}
                onAddToCart={onAddToCart}
                setItemAdded={setItemAdded}
                itemAdded={itemAdded}
                hideInfo={hideInfo}
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;

import React from "react";
import Product from "./Product/Product";

const img1 =
  "https://i1.adis.ws/i/carhartt_wip/I029952_0IA_XX-ST-01/hd-scramble-sweat-dusty-h-brown-black-1101.png?$pop_large$&img404=no_pic%201108w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20https://i1.adis.ws/i/carhartt_wip/I029952_0IA_XX-ST-01/hd-scramble-sweat-dusty-h-brown-black-1101.png?$pop_medium$&img404=no_pic%20700w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20https://i1.adis.ws/i/carhartt_wip/I029952_0IA_XX-ST-01/hd-scramble-sweat-dusty-h-brown-black-1101.png?$pop_small$&img404=no_pic%20320w";
const img2 =
  "https://i1.adis.ws/i/carhartt_wip/I026384_0O7_XX-ST-01/hooded-chase-sweatshirt-camo-mend-gold-1628.png?$pop_large$&img404=no_pic 1108w,";
const img3 =
  "https://i1.adis.ws/i/carhartt_wip/I030283_89_06-ST-01/stetson-jacket-black-stone-washed-339.png?$pop_large$&img404=no_pic 1108w,";

const products = [
  {
    id: 1,
    name: "Hd Scramble Sweat",
    colour: "Dusty H Brown / Black",
    img: img1,
  },
  {
    id: 2,
    name: "Hooded Chase Sweatshirt",
    colour: "Camo Mend / Gold",
    img: img2,
  },
  { id: 3, name: "Stetson Jacket", colour: "Black (stone washed)", img: img3 },
];

const Products = () => {
  return (
    <main>
      <div className="products-grid">
        <div className="content">
          {products.map((product) => (
            <article key={product.id}>
              <Product
                image={product.img}
                name={product.name}
                colour={product.colour}
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;

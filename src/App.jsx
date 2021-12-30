import React from "react";
import { Route, Routes } from "react-router-dom";
import { commerce } from "./lib/commerce";
import NewArrivals from "./pages/Men/NewArrivals";
export const SearchMode = React.createContext();
export const MenuHover = React.createContext();

function App() {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState({});

  const [searchMode, setSearchMode] = React.useState(false);
  const [menuHover, setMenuHover] = React.useState(false);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  React.useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <SearchMode.Provider value={[searchMode, setSearchMode]}>
        <MenuHover.Provider value={[menuHover, setMenuHover]}>
          <Routes>
            <Route
              path="/"
              element={
                <NewArrivals
                  products={products}
                  onAddToCart={handleAddToCart}
                  cart={cart}
                />
              }
              exact
            ></Route>
          </Routes>
        </MenuHover.Provider>
      </SearchMode.Provider>
    </>
  );
}

export default App;

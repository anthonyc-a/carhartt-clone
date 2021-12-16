import React from "react";
import { Route, Routes } from "react-router-dom";
import NewArrivals from "./pages/Men/NewArrivals";
export const SearchMode = React.createContext();
export const MenuHover = React.createContext();

function App() {
  const [searchMode, setSearchMode] = React.useState(false);
  const [menuHover, setMenuHover] = React.useState(false);
  return (
    <>
      <SearchMode.Provider value={[searchMode, setSearchMode]}>
        <MenuHover.Provider value={[menuHover, setMenuHover]}>
          <Routes>
            <Route path="/" element={<NewArrivals />} exact></Route>
          </Routes>
        </MenuHover.Provider>
      </SearchMode.Provider>
    </>
  );
}

export default App;

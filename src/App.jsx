import React from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Header } from "./components/Header";
import NotFound from "./pages/NotFound/NotFound";

export const SearchContext = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;

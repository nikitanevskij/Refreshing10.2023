import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Header } from "./components/Header";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <div className="wrapper">
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
    </div>
  );
};
export default App;

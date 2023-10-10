import React from "react";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { PizzaBlock } from "./components/PizzaBlock";
import { Sort } from "./components/Sort";
import "./scss/app.scss";

const App = () => {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch("https://634fde2edf22c2af7b5c5141.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setPizzas(json.items));
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj, index) => (
              <PizzaBlock key={index} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;

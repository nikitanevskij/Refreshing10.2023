import React from "react";

import { Categories } from "../../components/Categories";
import { Sort } from "../../components/Sort";
import { PizzaBlock } from "../../components/PizzaBlock";
import Sceleton from "../../components/Sceleton";

export const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const loadPizzas = (items) => {
    setPizzas(items);
    setLoading(true);
  };
  React.useEffect(() => {
    fetch("https://634fde2edf22c2af7b5c5141.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => loadPizzas(json.items));
  }, []);

  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? pizzas.map((obj, index) => <PizzaBlock key={index} {...obj} />)
          : [...new Array(8)].map((_, index) => <Sceleton key={index} />)}
      </div>
    </div>
  );
};

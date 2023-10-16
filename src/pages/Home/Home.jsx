import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "../../components/Categories";
import { Sort } from "../../components/Sort";
import { PizzaBlock } from "../../components/PizzaBlock";
import Sceleton from "../../components/Sceleton";
import { SearchContext } from "../../App";

export const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const { searchValue } = React.useContext(SearchContext);
  const { activeCategory, sort, activeSort } = useSelector((state) => state.filterSlice);

  const sortBy = sort[activeSort].searchName;
  const order = sort[activeSort].order;
  const category = activeCategory === 0 ? "" : `&category=${activeCategory}`;
  const loadPizzas = (items) => {
    setPizzas(items);
    setLoading(true);
  };
  React.useEffect(() => {
    setLoading(false);
    fetch(
      `https://634fde2edf22c2af7b5c5141.mockapi.io/items?search=${searchValue}${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((json) => loadPizzas(json.items));
    window.scrollTo(0, 0);
  }, [searchValue, category, sortBy, order]);

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

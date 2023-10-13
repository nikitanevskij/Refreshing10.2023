import React from "react";

import { Categories } from "../../components/Categories";
import { Sort } from "../../components/Sort";
import { PizzaBlock } from "../../components/PizzaBlock";
import Sceleton from "../../components/Sceleton";

export const Home = ({ searchValue }) => {
  const [pizzas, setPizzas] = React.useState([]);

  // const pizzasSearch = pizzas.filter((item) =>
  //   item.name.toLowerCase().includes(searchValue.toLowerCase()),
  // );
  // console.log(pizzasSearch);

  const [isLoading, setLoading] = React.useState(false);

  const [activeCategories, setAactiveCategories] = React.useState(0);
  const onClickCategory = (index) => {
    setAactiveCategories(index);
  };
  const [activeSort, setActiveSort] = React.useState(0);
  const sort = [
    { name: "популярности (ask)", searchName: "rating", order: "desc" },
    { name: "популярности (desc)", searchName: "rating", order: "ask" },
    { name: "цене (ask)", searchName: "price", order: "ask" },
    { name: "цене (desc)", searchName: "price", order: "desc" },
    { name: "алфавиту (ask)", searchName: "name", order: "ask" },
    { name: "алфавиту (desc)", searchName: "name", order: "desc" },
  ];

  const sortBy = sort[activeSort].searchName;
  const order = sort[activeSort].order;
  const category = activeCategories === 0 ? "" : `&category=${activeCategories}`;
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
  }, [activeCategories, activeSort, sortBy, order, searchValue, category]);

  return (
    <div>
      <div className="content__top">
        <Categories activeCategories={activeCategories} onClickCategory={onClickCategory} />
        <Sort sort={sort} activeSort={activeSort} setActiveSort={setActiveSort} />
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

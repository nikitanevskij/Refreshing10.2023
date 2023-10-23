import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories } from "../../components/Categories";
import { Sort } from "../../components/Sort";
import { PizzaBlock } from "../../components/PizzaBlock";
import Sceleton from "../../components/Sceleton";
import { fetchPizzas } from "../../redux/pizzaSlice";
import { RootState, useAppDispatch } from "../../redux/store";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeCategory, sort, activeSort, searchValue } = useSelector(
    (state: RootState) => state.filterSlice,
  );

  const { pizzas, loading } = useSelector((state: RootState) => state.pizzaSlice);

  const sortBy = sort[activeSort].searchName;
  const order = sort[activeSort].order;
  const category = activeCategory === 0 ? "" : `&category=${activeCategory}`;

  React.useEffect(() => {
    dispatch(fetchPizzas({ searchValue, category, sortBy, order }));
    window.scrollTo(0, 0);
  }, [searchValue, category, sortBy, order, dispatch]);

  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!loading
          ? //@ts-ignore
            pizzas.map((obj, index) => <PizzaBlock key={index} {...obj} />)
          : [...new Array(8)].map((_, index) => <Sceleton key={index} />)}
      </div>
    </div>
  );
};

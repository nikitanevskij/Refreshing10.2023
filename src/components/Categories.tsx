import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../redux/filterSlice";
import { RootState } from "../redux/store";

export const Categories: React.FC = () => {
  const { categories, activeCategory } = useSelector((state: RootState) => state.filterSlice);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            className={activeCategory === index ? "active" : ""}
            onClick={() => dispatch(setCategories(index))}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

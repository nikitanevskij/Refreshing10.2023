import React from "react";

export const Categories = ({ activeCategories, onClickCategory }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            className={activeCategories === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

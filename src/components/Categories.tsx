import React from "react";

export const Categories = () => {
  const [activeIndex, setAactiveIndex] = React.useState(0);

  const onClickCategory = (index: number) => {
    setAactiveIndex(index);
  };

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

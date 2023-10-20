import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";

export const PizzaBlock = ({ id, imageUrl, name, types, sizes, price, category, rating }) => {
  const dispatch = useDispatch();
  const addedPizzas = useSelector((state) => state.cartSlice.items.find((item) => item.id === id));
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeNames = ["тонкое", "традиционное"];

  const count = addedPizzas ? addedPizzas.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addProduct(item));
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={name} />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((item, index) => (
            <li
              key={index}
              className={activeType === index ? "active" : ""}
              onClick={() => setActiveType(index)}
            >
              {typeNames[item]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((item, index) => (
            <li
              key={index}
              className={activeSize === index ? "active" : ""}
              onClick={() => setActiveSize(index)}
            >
              {item} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add" onClick={onClickAdd}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {count > 0 ? <i>{count}</i> : " "}
        </div>
      </div>
    </div>
  );
};

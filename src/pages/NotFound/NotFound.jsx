import React from "react";
import style from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p>К сожалению данная страница отсутсвует в нашем интернет-магазине </p>
    </div>
  );
};

import React, { ChangeEvent } from "react";
import style from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filterSlice";
import debounce from "lodash.debounce";

export const Search: React.FC = () => {
  const [value, setValue] = React.useState<string>("");
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useCallback(
    debounce((str: string) => dispatch(setSearchValue(str)), 250),
    [],
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const clearInput = () => {
    inputRef.current?.focus?.();
    setValue("");
    dispatch(setSearchValue(""));
  };

  return (
    <div className={style.root}>
      <svg className={style.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Поиск пиццы..."
      />

      {value && (
        <svg
          onClick={clearInput}
          className={style.clearIcon}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      )}
    </div>
  );
};

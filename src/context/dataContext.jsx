import React, { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState(data);
  const [value, setValue] = useState(0);
  const [activeOption, setActiveOption] = useState("");
  const [randomItem, setRandomItem] = useState("");
  const [realItem, setRealItem] = useState("");
  const handleOptionClick = (option) => {
    if (activeOption === "") {
      setActiveOption(option);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 1;
        } else {
          clearInterval(interval);
          return prevValue;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [value]);

  const restart = () => {
    setActiveOption("");
    setValue(0);
  };

  const selectRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setRandomItem(items[randomIndex]);
    setRealItem(items[randomIndex].answer);
    setActiveOption("");
  };

  useEffect(() => {
    selectRandomItem();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        items,
        value,
        setValue,
        activeOption,
        handleOptionClick,
        setActiveOption,
        realItem,
        restart,
        randomItem,
        selectRandomItem,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

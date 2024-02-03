import React, { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState(data);
  const [value, setValue] = useState(0);
  const [activeOption, setActiveOption] = useState("");

  const handleOptionClick = (option) => {
    if (activeOption === "") {
      setActiveOption(option);
    }
  };

  const realAnswer = items[2].answer;

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

  return (
    <ProductsContext.Provider
      value={{
        items,
        value,
        setValue,
        activeOption,
        handleOptionClick,
        setActiveOption,
        realAnswer,
        restart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

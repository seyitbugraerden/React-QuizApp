import React, { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState(data);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let _val = value;

    setInterval(() => {
      if (_val < 100) {
        _val += 1.67;

        setValue(_val);
      }
      if (_val >= 100) {
        setValue(100);
      }
    }, 50);
  }, []);

  return (
    <ProductsContext.Provider value={{ items, value }}>
      {children}
    </ProductsContext.Provider>
  );
};

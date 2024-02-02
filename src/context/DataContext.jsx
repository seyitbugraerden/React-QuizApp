import React, { createContext, useState } from "react";
import data from "../data/data.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState(data);

  return (
    <ProductsContext.Provider value={{ items }}>
      {children}
    </ProductsContext.Provider>
  );
};

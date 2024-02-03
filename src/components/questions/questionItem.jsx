import React, { useContext } from "react";
import { ProductsContext } from "../../context/dataContext";

function questionItem() {
  const { items } = useContext(ProductsContext);
  return (
    <>
      <p>{items[0].question}</p>
    </>
  );
}

export default questionItem;

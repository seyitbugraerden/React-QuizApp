import React, { useContext } from "react";
import { ProductsContext } from "../../context/dataContext";
import ProgressBar from "../progressbar/progressBar";

function questionItem() {
  const { items } = useContext(ProductsContext);
  return (
    <>
      <p>{items[0].question}</p>

      <ProgressBar />
      <div className="menu">
        <div>A-) {items[0].A}</div>
        <div>B-) {items[0].B} </div>
        <div>C-) {items[0].C}</div>
        <div>D-) {items[0].D}</div>
      </div>
    </>
  );
}

export default questionItem;

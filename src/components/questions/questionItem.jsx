import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/dataContext";
import ProgressBar from "../progressbar/progressBar";

function QuestionItem() {
  const { items, activeOption, handleOptionClick } =
    useContext(ProductsContext);

  return (
    <>
      <p>{items[2].question}</p>
      <ProgressBar />
      <div className="menu">
        <div
          className={
            (activeOption === "A" && "active") ||
            (activeOption !== "" && "non-active") ||
            (activeOption === "" && "not-sellected")
          }
          onClick={() => handleOptionClick("A")}
        >
          A-) {items[2].A}
        </div>
        <div
          className={
            (activeOption === "B" && "active") ||
            (activeOption !== "" && "non-active") ||
            (activeOption === "" && "not-sellected")
          }
          onClick={() => handleOptionClick("B")}
        >
          B-) {items[2].B}{" "}
        </div>
        <div
          className={
            (activeOption === "C" && "active") ||
            (activeOption !== "" && "non-active") ||
            (activeOption === "" && "not-sellected")
          }
          onClick={() => handleOptionClick("C")}
        >
          C-) {items[2].C}
        </div>
        <div
          className={
            (activeOption === "D" && "active") ||
            (activeOption !== "" && "non-active") ||
            (activeOption === "" && "not-sellected")
          }
          onClick={() => handleOptionClick("D")}
        >
          D-) {items[2].D}
        </div>
      </div>
    </>
  );
}

export default QuestionItem;

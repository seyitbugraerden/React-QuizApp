import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/dataContext";
import ProgressBar from "../progressbar/progressBar";

function QuestionItem() {
  const { randomItem, activeOption, handleOptionClick } =
    useContext(ProductsContext);

  return (
    <>
      <p>{randomItem.question}</p>
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
          A-) {randomItem.A}
        </div>
        <div
          className={
            (activeOption === "B" && "active") ||
            (activeOption !== "" && "non-active") ||
            (activeOption === "" && "not-sellected")
          }
          onClick={() => handleOptionClick("B")}
        >
          B-) {randomItem.B}{" "}
        </div>
        <div
          className={
            (activeOption === "C" && "active") ||
            (activeOption !== "" && "non-active") ||
            (activeOption === "" && "not-sellected")
          }
          onClick={() => handleOptionClick("C")}
        >
          C-) {randomItem.C}
        </div>
        <div
          className={
            (activeOption === "D" && "active") ||
            (activeOption !== "" && "non-active") ||
            (activeOption === "" && "not-sellected")
          }
          onClick={() => handleOptionClick("D")}
        >
          D-) {randomItem.D}
        </div>
      </div>
    </>
  );
}

export default QuestionItem;

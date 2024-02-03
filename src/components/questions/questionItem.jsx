import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/dataContext";
import ProgressBar from "../progressbar/progressBar";

function QuestionItem() {
  const { items } = useContext(ProductsContext);
  const [activeOption, setActiveOption] = useState("");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const isActive = (option) => {
    return activeOption === option;
  };

  return (
    <>
      <p>{items[2].question}</p>
      <ProgressBar />
      <div className="menu">
        <div
          className={isActive("A") ? "active" : ""}
          onClick={() => handleOptionClick("A")}
        >
          A-) {items[2].A}
        </div>
        <div
          className={isActive("B") ? "active" : ""}
          onClick={() => handleOptionClick("B")}
        >
          B-) {items[2].B}{" "}
        </div>
        <div
          className={isActive("C") ? "active" : ""}
          onClick={() => handleOptionClick("C")}
        >
          C-) {items[2].C}
        </div>
        <div
          className={isActive("D") ? "active" : ""}
          onClick={() => handleOptionClick("D")}
        >
          D-) {items[2].D}
        </div>
      </div>
    </>
  );
}

export default QuestionItem;

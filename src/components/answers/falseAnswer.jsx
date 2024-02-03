import React, { useContext } from "react";
import { ProductsContext } from "../../context/dataContext";
import falseIcon from "../../assets/false.jpg";
import "animate.css";

function trueAnswer() {
  const {} = useContext(ProductsContext);
  return (
    <div className="card">
      <img
        src={falseIcon}
        alt=""
        height="150px"
        className="animate__animated animate__flash animate__infinite	infinite animate__slower	3s"
      />
      <h4>Your Answer is NOT Correct</h4>
      <button>Try Again</button>
    </div>
  );
}

export default trueAnswer;

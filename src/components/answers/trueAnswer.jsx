import React, { useContext } from "react";
import { ProductsContext } from "../../context/dataContext";
import correct from "../../assets/correct.jpg";
import "animate.css";

function trueAnswer() {
  const { selectRandomItem } = useContext(ProductsContext);
  return (
    <div className="card">
      <img
        src={correct}
        alt=""
        height="150px"
        className="animate__animated animate__flash animate__infinite	infinite animate__slower	3s"
      />
      <h4>Your Answer is Correct</h4>
      <button onClick={selectRandomItem}>Next Question</button>
    </div>
  );
}

export default trueAnswer;

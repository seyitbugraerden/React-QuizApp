import React, { useContext } from "react";
import overWatch from "../../assets/overwatch.jpg";
import { ProductsContext } from "../../context/dataContext";
import "animate.css";
function timeIsOver() {
  const { setValue, setActiveOption } = useContext(ProductsContext);
  return (
    <>
      <div className="card">
        <img
          src={overWatch}
          alt=""
          height="150px"
          className="animate__animated animate__flash animate__infinite	infinite animate__slower	3s"
        />
        <h4>Time is Over</h4>
        <button
          onClick={() => {
            setValue(0);
            setActiveOption("");
          }}
        >
          Try Again
        </button>
      </div>
    </>
  );
}

export default timeIsOver;

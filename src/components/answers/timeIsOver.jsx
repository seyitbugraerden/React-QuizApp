import React, { useEffect } from "react";
import overWatch from "../../assets/overwatch.jpg";
import "animate.css";
function timeIsOver() {
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
      </div>
    </>
  );
}

export default timeIsOver;

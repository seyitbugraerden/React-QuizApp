import React, { useEffect, useState } from "react";
import { Fieldset } from "primereact/fieldset";
import AOS from "aos";
import QuestionItem from "./questionItem";
import "aos/dist/aos.css";
import "./question.css";

function QuestionArea() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Fieldset
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-mirror="true"
      style={{ scale: isVisible ? "" : "0", transition: "500ms" }}
    >
      <QuestionItem />
      <i
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className="bi bi-x-lg"
      ></i>
    </Fieldset>
  );
}

export default QuestionArea;

import React, { useContext, useEffect } from "react";
import { Fieldset } from "primereact/fieldset";
import { ProductsContext } from "../../context/dataContext";
import TimeIsOver from "../answers/timeIsOver";
import AOS from "aos";
import QuestionItem from "./questionItem";
import "aos/dist/aos.css";
import "./question.css";

function QuestionArea() {
  const { value, setValue } = useContext(ProductsContext);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fieldset
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-mirror="true"
    >
      {value >= 100 ? <TimeIsOver /> : <QuestionItem />}
    </Fieldset>
  );
}

export default QuestionArea;

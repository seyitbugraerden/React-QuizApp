import React, { useContext, useEffect } from "react";
import { Fieldset } from "primereact/fieldset";
import { ProductsContext } from "../../context/dataContext";
import TimeIsOver from "../answers/timeIsOver";
import FalseAnswer from "../answers/falseAnswer";
import TrueAnswer from "../answers/trueAnswer";
import AOS from "aos";
import QuestionItem from "./questionItem";
import "aos/dist/aos.css";
import "./question.css";

function QuestionArea() {
  const { value, activeOption, realAnswer } = useContext(ProductsContext);
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
      {value < 100 ? (
        <>
          {activeOption === "" && <QuestionItem />}
          {activeOption === realAnswer && <TrueAnswer />}
          {activeOption !== realAnswer && activeOption !== "" && (
            <FalseAnswer />
          )}
        </>
      ) : (
        <TimeIsOver />
      )}
    </Fieldset>
  );
}

export default QuestionArea;

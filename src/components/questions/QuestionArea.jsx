import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/dataContext";
import { Fieldset } from "primereact/fieldset";
import AOS from "aos";
import "aos/dist/aos.css";

function QuestionArea() {
  const [isVisible, setIsVisible] = useState(true);
  const { items } = useContext(ProductsContext);
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
      <p className="m-0">{items[0].question}</p>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Göster / Gizle
      </button>
    </Fieldset>
  );
}

export default QuestionArea;
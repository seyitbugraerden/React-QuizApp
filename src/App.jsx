import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./context/dataContext";
import { Fieldset } from "primereact/fieldset";
import Particles from "./components/particles/Particles";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const { items } = useContext(ProductsContext);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Fieldset
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-mirror="true"
      >
        <p className="m-0">{items[0].question}</p>
      </Fieldset>

      <Particles id="tsparticles" />
    </>
  );
}

export default App;

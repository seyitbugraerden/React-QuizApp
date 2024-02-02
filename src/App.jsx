import { useContext } from "react";
import "./App.css";
import { ProductsContext } from "./context/dataContext";
import Particles from "./components/particles/Particles";

function App() {
  const { items } = useContext(ProductsContext);
  return (
    <>
      {items[0].question}
      <Particles id="tsparticles" />
    </>
  );
}

export default App;

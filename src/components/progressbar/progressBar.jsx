import React, { useContext } from "react";
import { ProgressBar } from "primereact/progressbar";
import { ProductsContext } from "../../context/dataContext";
import "../questions/question.css";

export default function progressBar() {
  const { value } = useContext(ProductsContext);
  return <ProgressBar value={value} style={{ height: "2px" }}></ProgressBar>;
}

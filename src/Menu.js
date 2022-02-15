import { useState } from "react";
import "./styles.css";
import Garage from "./Garage";

export default function Menu() {
  const [buttonText, setButtonText] = useState("Laborables");
  const [buttonColor, setButtonColor] = useState("blue");

  const changeText = () => {
    buttonText === "Laborables"
      ? setButtonText("Festivos")
      : setButtonText("Laborables");

    buttonColor === "blue" ? setButtonColor("red") : setButtonColor("blue");
  };

  let cars =
    buttonText === "Laborables"
      ? ["Toyota", "Citroen", "Seat"]
      : ["Ferrary", "Tesla", "Mercedes"];

  let coches = cars;
  let tipo = buttonText;

  return (
    <div className="Menu">
      <h1> ¿Que coche me toca hoy? </h1>

      <button onClick={changeText} className={buttonColor}>
        {buttonText}
      </button>

      <Garage coches={coches} tipos={tipo} />
    </div>
  );
}

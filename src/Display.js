import "./styles.css";
import { useState } from "react";
var s1 = 0;
var r1 = 0;
export default function Display() {
  const [lista, setDisplai] = useState(0);
  const pulsa = (pul) => {
    switch (pul) {
      case "+":
        s1 = lista;
        console.log("s1 = " + s1);
        setDisplai("");
        break;
      case "-":
        r1 = lista;
        console.log("r1 = " + r1);
        setDisplai("");
        break;
      case "=":
        console.log("s1= " + s1);
        console.log("lista= " + lista);
        if (s1) setDisplai(s1 + lista);
        if (r1) setDisplai(r1 - lista);
        break;
      default:
    }
  };
  const visualiza = (tecla) => setDisplai((nume) => nume * 10 + tecla);

  const clear = () => {
    setDisplai(0);
    s1 = 0;
    r1 = 0;
  };

  return (
    <div className="display">
      <>
        <table id="segunda">
          <tr>
            <td colspan="3">{lista}</td>
          </tr>
          <tr>
            <td onClick={() => visualiza(7)}>7</td>
            <td onClick={() => visualiza(8)}>8</td>
            <td onClick={() => visualiza(9)}>9</td>
          </tr>
          <tr>
            <td onClick={() => visualiza(4)}>4</td>
            <td onClick={() => visualiza(5)}>5</td>
            <td onClick={() => visualiza(6)}>6</td>
          </tr>
          <tr>
            <td onClick={() => visualiza(1)}>1</td>
            <td onClick={() => visualiza(2)}>2</td>
            <td onClick={() => visualiza(3)}>3</td>
          </tr>
          <tr>
            <td onClick={() => pulsa("+")}>+</td>
            <td onClick={() => pulsa("-")}>-</td>
            <td onClick={() => visualiza(0)}>0</td>
          </tr>
          <tr>
            <td colspan="3" onClick={() => pulsa("=")}>
              =
            </td>
          </tr>
          <tr>
            <td colspan="3" onClick={() => clear()}>
              Clear
            </td>
          </tr>
        </table>
      </>
    </div>
  );
}

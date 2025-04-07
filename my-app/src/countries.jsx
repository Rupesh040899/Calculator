import React, { useCallback, useState } from "react";
import "./Cityselector.css";

export default function CitySelector() {
  const [count, setCount] = useState();
  const [data, setData] = useState(" ");

  const getValue = (event) => {
    //console.log(event.target.value);
    setData(data.concat(event.target.value));
  };

  const calculation = () => {
    //console.log(data);
    if (!data || data == " ") {
      setCount("Error");
      return;
    }
    setCount(eval(data).toString());
  };

  const cancellation = () => {
    setData("");
    setCount();
  };
  return (
    <div>
      <h1>React Calculator</h1>
      <input type="text" value={data} />
      <h3>{count}</h3>
      <div id="button">
        <button onClick={getValue} value="7">
          7
        </button>
        <button onClick={getValue} value="8">
          8
        </button>
        <button onClick={getValue} value="9">
          9
        </button>
        <button onClick={getValue} value="+">
          +
        </button>
        <button onClick={getValue} value="4">
          4
        </button>
        <button onClick={getValue} value="5">
          5
        </button>
        <button onClick={getValue} value="6">
          6
        </button>
        <button onClick={getValue} value="-">
          -
        </button>
        <button onClick={getValue} value="1">
          1
        </button>
        <button onClick={getValue} value="2">
          2
        </button>
        <button onClick={getValue} value="3">
          3
        </button>
        <button onClick={getValue} value="*">
          *
        </button>
        <button onClick={cancellation}>C</button>
        <button onClick={getValue} value="0">
          0
        </button>
        <button onClick={calculation}>=</button>
        <button onClick={getValue} value="/">
          /
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import DefaultInput from "./components/inputs/default-input";
import svgMaker from "./svg-maker";

// const hello = "world";

const sum = (a, b) => {
  return a + b;
};

// const result = sum(4, 6);

function testFunction() {
  const arr = [1, 2, 3];

  arr.forEach((el) => el);

  for (let i of arr) {
    console.log(i);
  }
}

testFunction();

const list = [1, 2, 3, 4, 5, 6, 7, 8];

const setCity = (city, street) => {
  return `My city is ${city}`;
};

const result = setCity("Kiev", "Klovskiy");

const App = () => {
  const [name, setName] = useState("flower");

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  useEffect(() => {
    console.log("Наше значение инпута :", name);
  }, [name]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="mb-[60px]">
          {svgMaker("icon-title", "stroke-[#f5f5f5] w-[283px] h-[16px]")}
        </div>
        <div>
          <DefaultInput handleChangeName={handleChangeName} />
          {/* <input onChange={handleChangeName} type="text" /> */}
        </div>

        <div className="list">
          {list.map((item) => {
            return (
              <div className="card" key={item}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

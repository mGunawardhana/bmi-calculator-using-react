// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);

  const [bmi, setBmi] = useState(null);

  const [status, setStatus] = useState("");

  const calculateBmi = () => {
    //to fixed two to is used to get two floating point numbers
    let bmiResult = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiResult);

    let status = getBmi(bmiResult);
    setStatus(status);

    setHeight("");
    setWeight("");
  };

  const getBmi = (bmi) => {
    if (bmi < 18.5) return "UnderWeight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "OverWeight";
    else return "Obese";
  };

  return (
    <div id="parentContext" class="w-full max-w-sm  m-auto mt-40 shadow-gray-700 transition-opacity shadow-lg rounded-xl">
      <form id="mainContainer" class="bg-white shadow-md rounded px-12 pt-10 pb-8 mb-6">
        <div id="heightBox" class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="height"
          >
            Height
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Height in cm"
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div id="weightBox" class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Weight
          </label>
          <input
            class="shadow appearance-none   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Weight"
            type="Weight in kg"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-lime-700 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-xl rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateBmi}
          >
            Calculate BMI
          </button>
        </div>
        {bmi && (
          <div className="mt-4">
            <p className="colour">Your BMI is : {bmi}</p>
            <p className="colour">You are Currently : {status}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default App;

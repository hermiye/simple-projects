import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1); //only in the highest component can be called, not even in any conditional statement
  const [isOpen, setIsOpen] = useState(true);

  function handleprev() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handlenext() {
    if (step < 3) {
      setStep((s) => s + 1); // use call cask functio always when we want to update state based on current state
      // setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : " "}>1</div>
            <div className={step >= 2 ? "active" : " "}>2</div>
            <div className={step >= 3 ? "active" : " "}>3 </div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#1234f4" }}
              onClick={() => handleprev()}
              //onMouseEnter={() => alert("prev")}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "fff" }}
              onClick={() => handlenext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

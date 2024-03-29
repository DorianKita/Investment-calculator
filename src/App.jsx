import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputisValid = userInput.duration >= 1;
  console.log(inputisValid);

  function handleUserInput(userInputFieldValue, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [userInputFieldValue]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleUserInput} userInput={userInput} />
      {inputisValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;

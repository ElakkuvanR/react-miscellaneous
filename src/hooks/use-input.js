import React, { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(enteredValue);
  const hasErrors = !isValueValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: isValueValid,
    hasErrors,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };
};

export default useInput;

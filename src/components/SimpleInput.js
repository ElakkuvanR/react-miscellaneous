import { useState, useRef, useEffect } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const {
    isValid: isNameValid,
    value: enteredName,
    hasErrors: nameInputHasErrors,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: formReset,
  } = useInput((value) => value.trim() !== "");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isNameValid) {
      setIsFormValid(true);
      console.log("Name is valid");
    } else {
      setIsFormValid(false);
    }
  }, [isNameValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!isNameValid) {
      return;
    }
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    formReset();
  };
  const nameInputClass = nameInputHasErrors
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          ref={nameInputRef}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputHasErrors && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import { useState, useRef, useEffect } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const isNameValid = enteredName.trim() !== "";
  const isNameInputValid = !isNameValid && nameTouched;

  useEffect(() => {
    if (isNameValid) {
      setIsFormValid(true);
      console.log("Name is valid");
    } else {
      setIsFormValid(false);
    }
  }, [isNameValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputFocusHandler = (event) => {
    setNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    if (!isNameValid) {
      return;
    }
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
    setNameTouched(false);
  };
  const nameInputClass = isNameInputValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          onBlur={inputFocusHandler}
        />
      </div>
      {isNameInputValid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

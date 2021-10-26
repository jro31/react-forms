import { useState } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // This works (I think) because the 'nameInputChangeHandler' is called on every keystroke, which updates the 'enteredName' state, which re-evaluates the entire component
  // So 'formIsValid' is set to 'false' (below) after every keystroke, then updated to true if it's valid
  let formIsValid = false;
  if (enteredNameIsValid) { // Imagine there are multiple inputs with 'isValid' states, and they're all included in this 'if'
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSumbissionHandler = (event) => {
    event.preventDefault(); // Prevent an http request being sent to the server automatically

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) return;

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSumbissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

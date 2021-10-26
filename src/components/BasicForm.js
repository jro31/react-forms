import useInput from "../hooks/use-input";

const valueHasLength = value => value.trim().length > 0

const BasicForm = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(valueHasLength);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(valueHasLength);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@') && value.includes('.'));

  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
    outputFormValues();
    resetForm();
  };

  const outputFormValues = () => {
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
  };

  const resetForm = () => {
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const inputClasses = (inputHasError) => inputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={inputClasses(enteredFirstNameInputHasError)}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {enteredFirstNameInputHasError && <p className='error-text'>Invalid first name</p>}
        </div>
        <div className={inputClasses(enteredLastNameInputHasError)}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {enteredLastNameInputHasError && <p className='error-text'>Invalid last name</p>}
        </div>
      </div>
      <div className={inputClasses(enteredEmailInputHasError)}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {enteredEmailInputHasError && <p className='error-text'>Invalid email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

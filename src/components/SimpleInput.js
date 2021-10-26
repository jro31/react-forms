// useRef vs useState for logging input values:
// Use useRef if you're only interested in the value once, when the form is submitted. No need to log the value on every keystroke in this case.
// Use useState if you need the entered value after every keystroke (for example, for validation), because with useRef you can't really do that.
// You can also reset the input easily when using state, by binding the 'value' prop on the input to the 'enteredName' state (or other state) as below
// (doing this with useRef, you have to manipulate the DOM directly (not through React), in which case you're not going to have a good time)
import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSumbissionHandler = (event) => {
    event.preventDefault(); // Prevent an http request being sent to the server automatically

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName('');
  };

  return (
    <form onSubmit={formSumbissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

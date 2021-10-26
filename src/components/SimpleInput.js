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
  };

  return (
    <form onSubmit={formSumbissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

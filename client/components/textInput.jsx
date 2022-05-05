import React from 'react';


// InputField Component gathers user input
const InputField = (props) => {
  const setInput = (e) => {
    const value = e.target.value;
    props.stateFunc(value);
  };

  return (
    <div>
      <input type="text" className="input-field" placeholder="ex. Drinks" value={props.stateData} onChange={setInput} />
    </div>
  )
};

export default InputField;
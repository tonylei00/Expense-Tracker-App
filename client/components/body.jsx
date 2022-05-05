import React, { useState } from 'react';

import AmountInput from './numberInput.jsx';
import InputField from './textInput.jsx';
import CategoryBtn from './category.jsx';
import AddCategory from './addCategory.jsx';

// Debouncer to avoid sending too many server requests
// const debounce = (func, timeout = 300) => {
//   let timer;

//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func.apply(this, args) }, timeout);
//   };
// };

// Body Component which houses the input field as well as the categories
const Body = () => {
  // State variables
  const [ amount, setAmount ] = useState('');
  const [ input, setInput ] = useState('');
  const [ category, setCategory ] = useState(["Rent", "Utilities", "Fuel"]);

  const addCategory = () => {
    setCategory([...category, input]);
    setInput('');
    return;
  };

  // Turn the array of category names into an array of JSX elements
  const categories = category.map(element => {
    return <CategoryBtn reset={setAmount} content={element} payload={amount} />
  });

  return (
    <div className="body-container">

      <div className="amount-container">
        <AmountInput amountStateData={amount} amountStateFunc={setAmount} />
      </div>

      <div className="category-container">
        {categories}
      </div>

      <div className="input-container">
        <InputField stateData={input} stateFunc={setInput} />
        <AddCategory onClick={addCategory} />
      </div>

    </div>
  )
};

export default Body;
import React from 'react';

// InputAmount Component gathers user inputted dollar value
const AmountInput = (props) => {
  const setAmount = (e) => {
    props.amountStateFunc(e.target.value);
  };

  return (
    <input type="number" className="amount-input" placeholder="$0.00" value={props.amountStateData} onChange={setAmount} />
  )
};

export default AmountInput;
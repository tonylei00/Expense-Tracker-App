import React from 'react';

// Button for individual categories
const CategoryBtn = (prop) => {
  const sendAmount = () => {
    // post request to server posting a new category
    // const res = await fetch('http://localhost:3000/category', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ category: prop.content })
    // });
    console.log(`${prop.content}:`, prop.payload);
    prop.reset('');
  };

  return (
    <button className="category-btn" onClick={sendAmount}>{prop.content}</button>
  )
};

export default CategoryBtn;
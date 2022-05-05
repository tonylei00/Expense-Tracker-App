import React from 'react';

// Add category button component
const AddCategory = (props) => {
  return (
    <button className="addCategory-btn" onClick={props.onClick}>Add Category</button>
  )
};

export default AddCategory;
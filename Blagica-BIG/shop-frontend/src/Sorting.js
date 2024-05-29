import React, { useState } from 'react';

const Sorting = ({ onSort }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSort(selectedValue); // Call the onSort function passed from parent component
  };

  return (
    <div>
      <h2>Sort By</h2>
      <select value={selectedOption} onChange={handleSortChange}>
        <option value="">-- Select --</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        {/* Add more sorting options as needed */}
      </select>
    </div>
  );
};

export default Sorting;

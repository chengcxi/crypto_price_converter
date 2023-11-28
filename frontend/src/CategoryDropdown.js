import React from 'react';
import { Select } from '@chakra-ui/react';

const CategoryDropdown = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4']; // Your list of categories

  return (
    <Select placeholder="Select Category" variant="filled" width="200px"> {/* Adjust width as needed */}
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
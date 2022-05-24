import React from 'react';

function Checkbox({ name, info, checked, handleChange }) {
  return (
    <input
      type="checkbox"
      name={name}
      value={info.id || ''}
      onChange={handleChange}
      checked={checked}
      data-value={info.price}
    />
  );
}

export default Checkbox;
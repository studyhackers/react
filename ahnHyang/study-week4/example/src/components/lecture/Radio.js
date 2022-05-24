import React from 'react';

function Radio({ name, info, checked, handleChange }) {
  return (
    <input
      type="radio"
      name={name}
      value={info.id || ''}
      onChange={handleChange}
      checked={checked || false}
      data-value={info.price}
    />
  );
}

export default Radio;
import React from 'react';

function BoardForm({onFormSubmit}) {
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="title" required/>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BoardForm;
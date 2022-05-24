import React from 'react';

function TableRow({ item }) {
  return (
    <tr>
      <td>{item.url}</td>
      <td>{item.regDate}</td>
    </tr>
  );
}

export default TableRow;
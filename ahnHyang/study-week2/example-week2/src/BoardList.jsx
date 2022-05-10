import React from "react";
import BoardItem from './BoardItem';

function BoardList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <BoardItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default BoardList;

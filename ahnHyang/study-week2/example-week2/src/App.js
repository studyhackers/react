import React, { useState } from 'react';
import BoardList from "./BoardList";
import BoardForm from "./BoardForm";

function App() {
  const initialBoardItems = [
    {
      title: "첫번째 게시글입니다.",
    },
    {
      title: "두번째 게시글입니다.",
    },
    {
      title: "세번째 게시글입니다.",
    },
  ];

  const [boardItems, setBoardItems] = useState(initialBoardItems);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target[0];
    setBoardItems(prevState => (
      [...prevState, { title: value }]
    ));
  }

  return (
    <div className="App">
      <h1>리액트 게시판</h1>
      <BoardForm onFormSubmit={handleFormSubmit} />
      <BoardList items={boardItems} />
    </div>
  );
}

export default App;

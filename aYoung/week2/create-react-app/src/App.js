import React, { useState } from "react";

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
    setBoardItems([...boardItems,{title:inputValue}]);
  };
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => setInputValue(event.target.value);

  const BoardForm = ({ onFormSubmit }) => (
    <form onSubmit={onFormSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );

  const BoardList = ({ boardItems }) =>
    boardItems.map((item, index) => (
      <ul key={index}>
        <li>{item.title}</li>
      </ul>
    )
  );

  return (
    <div className="App">
      <h1>리액트 게시판</h1>
      <BoardForm onFormSubmit={handleFormSubmit} />
      <BoardList boardItems={boardItems} />
    </div>
  );
}

export default App;

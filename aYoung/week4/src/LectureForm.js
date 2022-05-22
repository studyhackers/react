import React, { useState } from "react";

const LectureForm = () => {
  const lecture = 130000;
  const [book, setBook] = useState(0);
  const [book12isChecked, setBook12isChecked] = useState(false);
  const [book3IsChecked, setBook3isChecked] = useState(false);
  const [screenMessage, setScreenMessage] = useState("");

  const book12Clicked = () => {
    if (!book12isChecked) {
      setBook12isChecked(true);
      setBook(book + 20000);
    }
  };
  
  const book3Clicked = () => {
    // book3IsChecked = !book3IsChecked;
    // ▼
    setBook3isChecked(!book3IsChecked);
    setBook(book3IsChecked ? book - 20000 : book + 20000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if(book3IsChecked){
    //   if(book12isChecked){
    //     setScreenMessage("수강이 신청되었습니다.");
    //   } else {
    //     // book3IsChecked = false;
    //     setScreenMessage("토익교재 포함 선택 시 그래머 게이트웨이 교재를 선택할 수 있습니다.");
    //   }
    // } else {
    //   setScreenMessage("수강이 신청되었습니다.");
    // }
    // ▼
    if (book3IsChecked && !book12isChecked) {
      setScreenMessage("토익교재 포함 선택 시 그래머 게이트웨이 교재를 선택할 수 있습니다.");
    } else {
      setScreenMessage("수강이 신청되었습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="radio" id="book1" className="book" name="book" onClick={book12Clicked} />
      <label htmlFor="book1">해커스 왕기초 : 20,000원</label>
      <input type="radio" id="book2" className="book" name="book" onClick={book12Clicked} />
      <label htmlFor="book2">해커스 첫토익 : 20,000원</label>
      <input type="checkbox" id="book3" className="book" onClick={book3Clicked} />
      <label htmlFor="book3">그래머게이트웨이 : 20,000원</label>
      <h3>총 강의금액 : {lecture + book}원</h3>
      <p style={{ color: "red" }}>{screenMessage}</p>
      <button>수강신청</button>
    </form>
  );
};

export default LectureForm;

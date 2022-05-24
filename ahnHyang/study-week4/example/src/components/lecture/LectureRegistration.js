import React, { useState } from 'react';
import { numberWithCommas } from "../../assets/Utils";
import Checkbox from './Checkbox';
import Radio from './Radio';

const bookList = [
  {
    id: "book_01",
    title: '해커스 왕기초',
    price: 20000
  },
  {
    id: "book_02",
    title: '해커스 첫토익',
    price: 20000
  },
];

const optionBooks = [{
  id: "option_book1",
  title: '그래머게이트웨이',
  price: 20000
}];

function LectureRegistration(props) {
  const [allPrice, setAllPrice] = useState(130000);
  const [state, setState] = useState({
    mainBook: null,
    optionBook: false,
  });
  const [error, setError] = useState('');


  const handleChange = (event) => {
    setError(''); // 에러메시지 초기화

    // 교재 1, 2번 선택하지 않았을 시
    if (!state.mainBook && event.target.name === 'optionBook') {
      setError('토익교재 포함 선택 시 그래머 게이트웨이 교재를 선택할 수 있습니다.');
      return;
    }

    const price = event.target.getAttribute('data-value');

    if (event.target.type === 'radio') {
      setState({ ...state, [event.target.name]: event.target.value });
      if (!state.mainBook) {
        setAllPrice(prev => prev += Number(price));
      }
      return;
    }

    setState({ ...state, [event.target.name]: event.target.checked });
    setAllPrice(prev => event.target.checked ? prev += Number(price) : prev -= Number(price));
  }

  return (
    <div>
      <h3>수강신청</h3>
      <form>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
          {bookList && bookList.map(book =>
            <li key={book.id}>
              <Radio
                name="mainBook"
                info={book}
                handleChange={handleChange}
                checked={state.mainBook === book.id}
              />
              <span> {book.title} : {numberWithCommas(book.price)}원</span>
            </li>
          )}

          {optionBooks && optionBooks.map(optionBook =>
            <li key={optionBook.id}>
              <Checkbox
                name="optionBook"
                info={optionBook}
                handleChange={handleChange}
                checked={state.optionBook}
              />
              <span> {optionBook.title} : {numberWithCommas(optionBook.price)}</span><br />
              {error ? <small style={{ color: 'red' }}>{error}</small> : null}
            </li>
          )}
        </ul>
        <h4>총 강의금액 : {numberWithCommas(allPrice)}원</h4>
        <button
          disabled={!state.mainBook}
          onClick={() => alert(`수강신청이 완료되었습니다.! 총 강의금액 : ${numberWithCommas(allPrice)}원`)}
        >수강신청</button>
      </form>
    </div>
  );
}

export default LectureRegistration;
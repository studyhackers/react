import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";



function SomunEvent(props) {
  const [boardData, setBoardData] = useState([]); // board 데이터
  const inputRef = useRef(null);
  const [error, setError] = useState('');


  const currentDate = () => {
    const today = new Date();
  
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
  
    return year + '-' + month + '-' + day;
  }

  const fetchData = async () => {
    const { data } = await axios('/event-list.json');
    return data;
  };

  async function setInitialData() {
    const data = await fetchData();
    setBoardData(data);
  }

  const handleSubmit = () => {
    if (!inputRef.current.value) {
      return;
    }

    setBoardData(prevState => [
      ...prevState,
      {
        id: prevState.slice(-1)[0].id + 1,
        url: inputRef.current.value,
        regDate: currentDate()
      }
    ]);

    inputRef.current.value = '';
  }

  const handleInputChange = () => {
    setError(inputRef.current.value ? '' : 'url을 입력해주세요');
  };

  useEffect(() => {
    setInitialData();
  }, []);

  return (
    <div>
      <h3>소문내기 이벤트</h3>

      <input
        type="text"
        style={{ width: '300px' }}
        ref={inputRef}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>인증하기</button><br />
      {error ? <small style={{ color: 'red' }}>{error}</small> : null}

      <table style={{ border: '1px solid #aaa' }}>
        <thead>
          <tr>
            <th>URL</th>
            <th>등록일자</th>
          </tr>
        </thead>
        <tbody>
          {boardData?.map(board =>
            <tr key={board.id}>
              <td>{board.url}</td>
              <td>{board.regDate}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SomunEvent;
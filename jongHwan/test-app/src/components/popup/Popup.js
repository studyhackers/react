import React, { useState } from 'react';
import Contents from './Contents';

function Popup(props) {
  const [popOpen, setPopOpen] = useState(false);

  const toggleTest =() =>{
    setPopOpen(!popOpen)
  }

  return (
    <>
      <h3>팝업</h3>
      <button onClick={() => toggleTest()}>강의 커리큘럼 보기</button>
      {popOpen && <Contents handlePopup={setPopOpen}/>}
    </>
  );
}

export default Popup;
import React, { useState } from "react";

const Popup = () => {
  const [popup, setPopup] = useState(false);

  
  const onClick = () => {
    setPopup(!popup);
  };

  return (
    <div>
      <button onClick={onClick}>강의 커리큘럼 보기</button>

      {popup ? 
        <img src="//gscdn.hackers.co.kr/champ/img/event/2019/07/2200/pc/type3/v1/curri_pop_500_01.jpg" alt="dkdkdk" />
        : null
      }
    </div>
  );
};

export default Popup;

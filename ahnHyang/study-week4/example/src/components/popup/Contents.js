import React from 'react';
import "./popup.css";

function Contents({ handlePopup }) {
  return (
    <div className="layer_n layer">
      <div className="bg" onClick={() => handlePopup(false)}></div>
      <div id="curriculum_pop_v3" className="layer_box ly_type gray_ver" style={{ width: '640px'}}>
        <button onClick={() => handlePopup(false)} className="btn_cls close">X</button>
        <div className="content">
          <img
            src={'//gscdn.hackers.co.kr/champ/img/event/2019/07/2200/pc/type3/v1/curri_pop_500_01.jpg'}
            alt="팝업이미지"
          />
        </div>
      </div>
    </div >
  );
}

export default Contents;
import React from "react";
import LectureRegistration from "./components/lecture/LectureRegistration";
import Popup from "./components/popup/Popup";
import SomunEvent from "./components/somun/SomunEvent";

function App() {
  return (
    <div className="App">
      <LectureRegistration/>
      <br/>
      <Popup/>
      <br /><br />
      <SomunEvent/>
    </div>
  );
}

export default App;

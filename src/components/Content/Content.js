import React from "react";
import BottomInfo from "../BottomInfo/BottomInfo";
import "./Content.css";
import Leftbar from "../LeftBar/Leftbar";
import Main from "../MainContent/Main";

function Content() {
  return (
    <div className="contentContainer">
        <Leftbar />
        <Main />
        <BottomInfo />        
    </div>
  );
}

export default Content;
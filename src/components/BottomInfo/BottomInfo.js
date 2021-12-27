import React from "react";
import "./BottomInfo.css";

function BottomInfo(){
    return(
        <div className="BottomInfo">
            <div className="BottomImage">
                <img className="ImageBottom" src="https://static.twitchcdn.net/assets/coolcat-edacb6fbd813ce2f0272.png" alt=""/>
            </div>
            <div className="BottomText">
                <p className="TextBottomBold">Twitch topluluğuna katılın!</p>
            </div>
            <div className="BottomText">
                <p className="TextBottom">Dilediğiniz yerden en iyi canlı yayınları keşfedin</p>
            </div>
            <button className="BottomButton">Kaydol</button>
            <span className="secret"></span>
        </div>

    )
}

export default BottomInfo;
import React from "react";
import "./Main.css";
import Banner from "../Banner/Banner";
import LiveChannels from "../LiveChannels/LiveChannels";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import TopGames from "../TopGames/TopGames";

function Main() {
  return (
    <div className="mainContainer">
        <SimpleBar forceVisible="y" autoHide={10} style={{ maxHeight: 580}}>
            <Banner />
            <LiveChannels />
            <TopGames />
            <div className="space-hidden"/>
        </SimpleBar>
    </div>
  );
}

export default Main;

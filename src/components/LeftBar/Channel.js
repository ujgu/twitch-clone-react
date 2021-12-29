import React from "react";
import "./Channel.css";
import { IconContext } from "react-icons";
import {CgProfile} from "react-icons/cg";

function Channel(props) {
    return(
        <div className="channel">
        {/* <IconContext.Provider value={{ color: "#fff", className: "profile" }}>
            <CgProfile /> 
        </IconContext.Provider>  */}
        <img src={props.img} alt="" className="img-logo"/>
        <div className="channelInfo">     
        <h5 className="name">{props.name}</h5>
        <h6 className="game">{(props.game).slice(0,25)}</h6>
        </div>
        <span className="liveRed invisible"/>
        <span className="liveRed invisible"/>
        <span className="liveRed"/>
        <p className="view">{(props.viewer/1000).toFixed(2)} K</p>
        
        </div>
    )
}

export default Channel;
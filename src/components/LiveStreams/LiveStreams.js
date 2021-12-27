import React from "react";
import "./LiveStreams.css";
import { IconContext } from "react-icons";
import {CgProfile} from "react-icons/cg";

function LiveStreams(props){
    return(
        <div className="liveStreamsContainer">
            <div className="liveStreamsTumbnail">
                    <img className="picture" src={props.tumbnail} alt=""/>
                   <span className="canli">CANLI</span>         
                   <span className="viewer">{(props.viewer/1000)} izleyici</span> 
                        <div className="profilePic">
                            <IconContext.Provider value={{ color: "#DEDEE3", className: "profileLive" }}>  
                                <CgProfile /> 
                            </IconContext.Provider>
                        </div>   
                        <div className="liveStreamsTitle">
                            <h4 className="TitleLive">{props.title}</h4>
                            <p className="LiveName">{props.name}</p>
                            <p className="LiveGame">{props.game}</p>
                            <span className="language">ENG</span>
                        </div>     
            </div>
        </div>
    )
}

export default LiveStreams;
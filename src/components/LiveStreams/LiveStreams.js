import React from "react";
import "./LiveStreams.css";
// import { IconContext } from "react-icons";
// import {CgProfile} from "react-icons/cg";

function LiveStreams(props){
    return(
        <div className="liveStreamsContainer">
            <div className="liveStreamsTumbnail">
                    <img className="picture" src={props.tumbnail} alt=""/>
                   <span className="canli">CANLI</span>         
                   <span className="viewer">{(props.viewer/1000).toFixed(3)} izleyici</span> 
                        <div className="profilePic">
                        <img src={props.img} alt="" className="profileLive"/>
                            {/* <IconContext.Provider value={{ color: "#DEDEE3", className: "profileLive" }}>  
                                <CgProfile /> 
                            </IconContext.Provider> */}
                        </div>   
                        <div className="liveStreamsTitle">
                            <h4 className="TitleLive">{(props.title).slice(0, 90)}</h4>
                            <p className="LiveName">{props.name}</p>
                            <p className="LiveGame">{(props.game).slice(0, 25)}</p>
                            <span className="language">ENG</span>
                        </div>     
            </div>
        </div>
    )
}

export default LiveStreams;
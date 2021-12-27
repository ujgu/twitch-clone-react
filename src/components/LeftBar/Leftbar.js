import React, { useState, useEffect } from "react";
import "./Leftbar.css";
import { IconContext } from "react-icons";
import {BiArrowBack} from "react-icons/bi";
import Channel from "./Channel";
import api from "../../api";

function Leftbar(){
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams?first=10");
            let dataArray = result.data.data;
            let finalArray = dataArray.map(stream => {
                let newURL = stream.thumbnail_url.replace("{width}", "30").replace("{height}", "30");
                stream.thumbnail_url = newURL;
                return stream
            })
            setChannels(finalArray);
            console.log(finalArray);
        }
      fetchData();
    },[]);

    return(
        <div className="leftbarContainer">
            <div className="header">
                <h5>ÖNERİLEN KANALLAR</h5>
                <IconContext.Provider value={{ color: "#fff", className: "arrow" }}>
                <BiArrowBack />
                </IconContext.Provider>
                </div>
            <div className="channels">
            {channels.map(channel => (
                <Channel  name={channel.user_name} game={channel.game_name} viewer={channel.viewer_count} img={channel.thumbnail_url}/>
            ))}
                
                </div>
            </div>
    )
}

export default Leftbar;
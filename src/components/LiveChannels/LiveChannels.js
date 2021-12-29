import React, { useState, useEffect } from "react";
import LiveStreams from "../LiveStreams/LiveStreams";
import "./LiveChannels.css";
import api from "../../api";


function LiveChannels() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams?first=4");
            let dataArray = result.data.data;
            let finalArray = dataArray.map(stream => {
                let newURL = stream.thumbnail_url.replace("{width}", "320").replace("{height}", "180");
                stream.thumbnail_url = newURL;
                return stream
            })
            setChannels(finalArray);
            console.log(finalArray);
        }
      fetchData();
    },[]);


    return (
        <div className="liveChannelsContainer">
            <div className="LiveChannelsTitle">
                <h3 className="Title">Seveceğinizi düşündüğümüz Canlı kanallar</h3>
            </div>
            <div className="liveStreams">
            {channels.map(channel => (
                <LiveStreams key={channel.user_name} img={channel.thumbnail_url} lang={channel.language} title={channel.title} name={channel.user_name} game={channel.game_name} viewer={channel.viewer_count} tumbnail={channel.thumbnail_url} />
            ))}
             </div>
        </div>
    )
}

export default LiveChannels;
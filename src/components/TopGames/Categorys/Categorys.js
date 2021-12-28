import React,{ useEffect, useState} from "react";
import "./Categorys.css";
import api from "../../../api";

function Categorys(props){
    const[streamData, setStreamData] = useState([]);
    const[viewers, setViewers] =useState(0);

    useEffect(()=>{
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams?game_id="+props.id);
            let dataArray = result.data.data;
            let finalArray = dataArray.map(stream => {
                let newURL = stream.thumbnail_url.replace("{width}", "188").replace("{height}", "250");
                stream.thumbnail_url = newURL;
            });
            let totalViewers = dataArray.reduce((acc, val) => {
                return acc + val.viewer_count;
            }, 0);
            setStreamData(finalArray);
            setViewers(totalViewers);
        }
        fetchData();
    },[]);


    //props.id
    return(
        <div className="top-games-container">
                <div className="top-games-tumbnail">
                    <img className="picture" src={props.Img} alt=""/>
                </div>
                <div className="top-games-name">{props.Game}</div>
                <div className="top-games-view"> {viewers/1000} izleyici</div>
                <span className="top-games-category">{props.Category}</span>
            </div>
    )
}

export default Categorys;
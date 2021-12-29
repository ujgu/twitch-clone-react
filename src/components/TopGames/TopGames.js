import React from "react";
import "./TopGames.css";
import Categorys from "./Categorys/Categorys";
import api from "../../api";
import { useEffect, useState } from "react";

function TopGames(props){
    const[games, setGames] =useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/games/top?first=18");
            //console.log(result.data);
            let dataArray = result.data.data;
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url.replace("{width}", "188").replace("{height}", "250");
                game.box_art_url = newURL;
                return game;
            });
            setGames(finalArray);
            console.log("games",finalArray);
        };
        fetchData();
    },[]);

    return(
        
        <div className="top-games">
            <div className="top-games-title">Seveceğinizi düşündüğümüz Kategoriler</div>
            <div className="top-games-list">
                {games.map(game => (
                <Categorys key={game.id} id={game.id} Game={game.name} Img={game.box_art_url} Viewer="339,7 B" Category="IRL" />
                ))}
            </div>
        </div>
        
    )
}

export default TopGames;
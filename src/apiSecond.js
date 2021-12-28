import axios from "axios";

let apiSecond = axios.create({
    method: "GET",
    headers: {
        "Client-ID": "————————————",
    },
    Accept: "application/vnd.twitchtv.v5+json",
});

export default apiSecond;

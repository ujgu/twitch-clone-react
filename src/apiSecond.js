import axios from "axios";

let apiSecond = axios.create({
    method: "GET",
    headers: {
        "Client-ID": "llgu8578mbq0339kc76oq036osue9m",
    },
    Accept: "application/vnd.twitchtv.v5+json",
});

export default apiSecond;
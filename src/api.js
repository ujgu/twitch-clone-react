import axios from "axios";

let api = axios.create({
    method: "GET",
    headers: {
        "Authorization": "Bearer —————————————-",
        "Client-ID": "———————————————————",
    }
});

export default api;

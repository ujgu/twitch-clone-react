import axios from "axios";

let api = axios.create({
    method: "GET",
    headers: {
        "Authorization": "Bearer 8vrng73140z0tr40xin0toyegdqflp",
        "Client-ID": "llgu8578mbq0339kc76oq036osue9m",
    }
});

export default api;

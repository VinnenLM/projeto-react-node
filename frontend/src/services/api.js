import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json'
      }
});

export default api;
import axios from "axios";

export const api = axios.create({
    baseURL: 'https://nlw-heat-server-bie.herokuapp.com/',
});
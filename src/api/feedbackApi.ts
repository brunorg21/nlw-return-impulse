import axios from "axios";

export const feedbackApi = axios.create({
    baseURL: 'http://localhost:3333'
})
import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_STRAPI_URL;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchTopBar = async (endpoint: string) => {
    const response = await api.get(`${endpoint}`);
    return response.data;

}

export const fetchHome = async (endpoint: string) => {
    const response = await api.get(`${endpoint}`);
    return response.data;

}

export const fetchEvent = async (endpoint: string) => {
    const response = await api.get(`${endpoint}`);
    
    return response.data;

}

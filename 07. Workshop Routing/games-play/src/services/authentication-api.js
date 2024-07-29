import requests from "./requests";

const users_url = 'http://localhost:3030/users';

export const loginRequest = async (email, password) => {
    const authenticationData = await requests.post(`${users_url}/login`, { email, password });
    
    return authenticationData;
};

export const registerRequest = async (email, password) => {
    const authenticationData = await requests.post(`${users_url}/register`, { email, password });
    
    return authenticationData;
};

export const logoutRequest = async () => requests.get(`${users_url}/logout`);

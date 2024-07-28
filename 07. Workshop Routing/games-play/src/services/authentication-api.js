import requests from "./requests";

const users_url = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const authenticationData = await requests.post(`${users_url}/login`, { email, password });
    
    return authenticationData;
};

export const register = async (email, password) => {
    const authenticationData = await requests.post(`${users_url}/register`, { email, password });
    
    return authenticationData;
};

import requests from "./requests";

const games_url = 'http://localhost:3030/jsonstore/games';

export const create = async (gameId, username, text) => {
    const result = await requests.post(games_url + `/${gameId}/comments`, {username, text});
    
    return result;
}

const getAll = async (gameId) => {
    const result = await requests.get(games_url + `/${gameId}/comments`);
    const comments = Object.values(result);

    return comments;
}
